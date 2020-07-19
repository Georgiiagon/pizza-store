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

Route::post('/login', 'Auth\LoginController@login');

Route::middleware('auth:sanctum')->get('/profile', function (Request $request) {
    return $request->user();
});

Route::middleware(['auth:sanctum'])->group(function () {
    Route::resource('order', 'Api\OrderController')->only(['index', 'store']);
    Route::post('/logout', 'Auth\LoginController@logout');
});
Route::post('/order-no-register', 'Api\OrderController@store');


Route::get('get-products', 'Api\ProductController@getProducts');
Route::get('get-cookie', 'Api\OrderController@getCookie');
Auth::routes(['verify' => false, 'reset' => false]);



