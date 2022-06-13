<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/aboutUs', function(){
    return view('aboutUs');
});

Route::get('/', function(){
    return view('start');
});

Route::get('/home', function(){
    return view('home');
});

Route::get('/feed', function() {
    return view('feed');
});

Route::get('/tips', function(){
    return view('tips');
});
