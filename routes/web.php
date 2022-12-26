<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
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



Route::get('/home',function (){
    return view("home");
})->name('homeUsers');
Route::get('/dashboard',[HomeController::class,'redirect']);
Route::get('/message',[HomeController::class,'redirect']);
Route::get('/users',[HomeController::class,'redirect']);
Route::get('/students',[HomeController::class,'redirect']);
Route::get('/services',[HomeController::class,'redirect']);
Route::get('/category_courses',[HomeController::class,'redirect']);
Route::get('/courses',[HomeController::class,'redirect']);
Route::get('/Enquiries',[HomeController::class,'redirect']);

Route::get('/', function () {
    return view('home');
});
Route::get('/login/user', function () {
    return view('Login');
})->middleware('guest');
Route::get('/enquiry', function () {
    return view('home');
});
Route::get('/myEnquiries', function () {
    return view('home');
})->middleware('auth');
Route::get('/logout/user',[HomeController::class,'logout'])->middleware('auth');;

Route::get('/get/id/user/data',
    [HomeController::class,'getUserId'])->name('getId.user');


Auth::routes();


