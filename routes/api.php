<?php

use App\Http\Controllers\CategoryCoursesController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EnquirieController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SubjectController;
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
/*   ---------------Login----------------  */
//Route::post('/login/users/data',
//    [UserController::class,'Login'])->name('login.user');
/*   ---------------User----------------  */


Route::post('/store/users/data',
    [UserController::class,'store'])->name('store.user');
Route::post('/update/user/data',
    [UserController::class,'update'])->name('update.user');
Route::post('/delete/user/data',
    [UserController::class,'delete'])->name('delete.user');
Route::post('/get/individual/user/details',
    [UserController::class,'showUser'])->name('individual.user');
Route::get('/get/all/users',
    [UserController::class,'index'])->name('all.user');
Route::get('/all/tow/user',
    [UserController::class,'viewTowUpUser'])->name('up.user');
Route::get('/all/count/users',
    [UserController::class,'countUser'])->name('count.user');

Route::post('/get/search/users',
    [UserController::class,'searchUser'])->name('search.user');

//Route::get('/get/id/user/data',
//    [HomeController::class,'getUserId'])->name('getId.user');
//


/*                       Message                     */
Route::get('/get/all/message',
    [MessageController::class,'index'])->name('all.message');
Route::get('/get/count/message',
    [MessageController::class,'getCountMessage'])->name('count.message');
Route::post('/sending/message/data',
    [MessageController::class,'createMessage'])->name('create.message');
Route::post('/delete/message/data',
    [MessageController::class,'destroy'])->name('delete.message');

/*                       Services                     */
Route::post('/store/service/data',
    [ServiceController::class,'store'])->name('store.service');
Route::post('/delete/service/data',
    [ServiceController::class,'delete'])->name('delete.service');
Route::get('/get/all/services',
    [ServiceController::class,'index'])->name('all.service');
Route::get('/get/count/service',
    [ServiceController::class,'getCountService'])->name('count.service');
/*---------------------------------------*/

Route::get('/get/all/courses',
    [CourseController::class,'index'])->name('all.courses');
Route::get('/get/count/courses',
    [CourseController::class,'getCountCourses'])->name('count.course');
Route::post('/get/individual/course/details',
    [CourseController::class,'detailsCourse'])->name('individual.course');
Route::post('/store/courses/data',
    [CourseController::class,'store'])->name('store.courses');
Route::post('/update/course/data',
    [CourseController::class,'update'])->name('update.course');
Route::post('/delete/course/data',
    [CourseController::class,'destroy'])->name('destroy.course');
/*   -------------------------------  */
Route::get('/get/all/category_courses',
    [CategoryCoursesController::class,'index'])->name('all.category_courses');
Route::post('/get/individual/category/details',
    [CategoryCoursesController::class,'detailsCategory'])->name('individual.category');
Route::post('/store/category/data',
    [CategoryCoursesController::class,'store'])->name('store.category');
Route::post('/update/category/data',
    [CategoryCoursesController::class,'update'])->name('update.category');
Route::post('/delete/category/data',
    [CategoryCoursesController::class,'destroy'])->name('destroy.category');
/*   -------------------------------  */
Route::post('/get/branch/year/subject',
    [SubjectController::class,'getSubjectOfBranchYear'])->name('branch.year.subject');
/*   -------------------------------  */
Route::post('/store/enquiries/data',
    [EnquirieController::class,'store'])->name('store.enquiries');
Route::post('/store/replace/enquiries/data',
    [EnquirieController::class,'storeReplace'])->name('store.replace.enquiries');
Route::post('/delete/enquiries/data',
    [EnquirieController::class,'destroy'])->name('destroy.enquiries');
Route::post('/view/enquiries/data',
    [EnquirieController::class,'View'])->name('view.enquiries');
Route::post('/get/my/enquiries',
    [EnquirieController::class,'getMyEnquiries'])->name('getMy.enquiries');
Route::get('/get/all/enquiries',
    [EnquirieController::class,'index'])->name('all.enquiries');
Route::get('/get/all/count/enquiries',
    [EnquirieController::class,'getCountEnquiries'])->name('count.enquiries');
/*-----------------*/




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
