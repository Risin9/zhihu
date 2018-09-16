<?php
namespace App\Http\Controllers;

class QuestionController extends Controller{

    public function index(){

        return[
            [
                'id' => 1,
                'title' => '第一篇文章',
                'content' => 'this is first contents',
            ],
            [
                'id'=> 2,
                'title' => '第二篇文章',
                'content' => 'this is second contents',
            ]
        ];
    }

    public function show($id){
        return [
            'id' => 1,
            'title' => '第一篇文章',
            'content' => 'this is first contents',
        ];
    }

}




