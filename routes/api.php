<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route::post('login', 'Admin\Api\LoginController@login');


Route::get('get-products', 'Api\ProductController@getProducts');
Route::get('get-cookie', 'Api\OrderController@getCookie');
Auth::routes(['verify' => false, 'reset' => false]);
Route::resource('order', 'Api\OrderController')->only(['index', 'store']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/profile', 'Auth\ProfileController@profile');
});

