<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Request;

class IndexController extends Controller{


    public function index(){

        return view('index',['message'=>'434343']);
    }
}
