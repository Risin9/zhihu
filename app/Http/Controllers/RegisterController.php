<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Overtrue\EasySms\EasySms;
use Symfony\Component\Console\Exception\LogicException;

class RegisterController extends Controller
{
    /*
     * 发送短信
     */
    public function sms(Request $request)
    {
        // 验证参数
        Validator::make($request->all(), [
            'phone' => 'required|unique:users|numeric',
        ],[
            'phone.unique' => "用户已经注册了"
        ])->validate();

        $phone = $request->get('phone');

        // 生成验证码
        srand((double)microtime() * 1000000);
        //生成四位随机整数验证码
        while(($authnum = rand() % 10000) < 1000);
        $code = $authnum;

        $config = config('sms');
        // 如果是debug模式，缓存设置手机号和验证码的映射，返回验证码
        if ($config['debug']) {
            Log::info("{$phone}: 注册验证码：{$code}");
            Cache::store('redis')->put('register', $code, 10);
            //Cache::put("register:{$phone}", $code, 20);

            return ['status' => true, 'code' => $code];
        }

        // 否则调用EASYSMS的发送短信接口
        $easySms = new EasySms(config('sms'));
        $ret = $easySms->send($phone, [
            'template' => 'SMS_1234567',
            'data' => [
                'code' => $code
            ],
        ]);

        // 检测发送短信是否成功，如果成功，缓存设置手机号和验证码的映射，返回验证码
        $gateways = config('sms.default.gateways');
        $status = false;
        foreach ($gateways as $gateway) {
            if (isset($ret[$gateway]) && 'success' == $ret[$gateway]['status']) {
                $status = true;
                Cache::put("register:{$phone}", $code, 30);
                break;
            }
        }
        // 否则返回失败
        return compact('status');
    }

    /*
     * 检查短信验证码并注册
     */
    public function register(Request $request)
    {
        Validator::make($request->all(), [
            'phone' => 'required|unique:users|numeric',
            'code' => 'numeric',
        ],[
            'phone.unique' => "用户已经注册了"
        ])->validate();


        $code = $request->get('code');
        $phone = $request->get('phone');

        $status = false;
        // 判断code是否正确
        $cacheCode =  Cache::store('redis')->get('register');

        if (empty($cacheCode) || $code != $cacheCode) {
            throw new LogicException("验证码不正确");
        }

        $user = new User();
        $user->phone = $phone;
        $user->created_at = date("Y-m-d H:i:s", time());
        $user->save();

        $status = true;
        Cache::forget("register:{$phone}");
        return compact('status');
    }

}