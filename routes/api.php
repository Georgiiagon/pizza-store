<?php

use Illuminate\Support\Facades\Auth;
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

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/profile', 'Auth\ProfileController@profile');
    Route::post('/logout', 'Auth\LoginController@logout');
});
Route::resource('order', 'Api\OrderController')->only(['index', 'store']);
Route::get('get-products', 'Api\ProductController@getProducts');

Auth::routes(['verify' => false, 'reset' => false, 'login' => false]);



