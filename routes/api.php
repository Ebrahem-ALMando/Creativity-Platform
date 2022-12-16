<?php

use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
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

Route::get('/all/tow/user',
    [UserController::class,'viewTowUpUser'])->name('up.user');
Route::get('/all/count/users',
    [UserController::class,'index'])->name('count.user');
Route::get('/all/count/message',
    [MessageController::class,'index'])->name('count.user');
Route::post('/sending/message/data',
    [MessageController::class,'createMessage'])->name('create.message');
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
