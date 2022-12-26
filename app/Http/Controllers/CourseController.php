<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $courses = Course::orderby('id', 'desc')->get();
            return response()->json($courses);
        } catch (\Exception $exception) {
            Log::error($exception);
        }
    }
    public  function getCountCourses(){
        try {
            $course=Course::all()->count();
            return response()->json($course);
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
//            $img=$request->get('imageCoursesData')->getClientOriginalName();
//            $path=$request->get('imageCoursesData')->storeAs('images',$img,'img');
            $Coursee=new Course;
            $Coursee->name=$request->get('nameCoursesData');
            $Coursee->excerpt=$request->get('excerptCoursesData');
               $Coursee->description=$request->get('descriptionCoursesData');
               $Coursee->category_courses_id=$request->get('categoryIdCoursesData');
              $Coursee->url=$request->get('urlCoursesData');
//            $Coursee->image=$path;
                $Coursee->save();

            return response()->json($Coursee);
//            if(is_file($img)){
//
//                $image=  $request->get('imageCoursesData')->getClientOriginalName();
//                return response()->json($image);
//            }

//            Course::create([
//                'name'=>$request->get('nameCoursesData'),
//                'excerpt'=>$request->get('excerptCoursesData'),
//                'description'=>$request->get('descriptionCoursesData'),
//                'category_courses_id'=>$request->get('categoryIdCoursesData'),
//                'url'=>$request->get('urlCoursesData'),
////                'image'=>$request->get('imageCoursesData'),
//            ]);

//                $request->get('imageServiceData')
//            return response()->json($img);
//            return response()->json([
//                'name'=>$request->get('nameCoursesData'),
//                'excerpt'=>$request->get('excerptCoursesData'),
//                'description'=>$request->get('descriptionCoursesData'),
//                'category_courses_id'=>$request->get('categoryIdCoursesData'),
//                'url'=>$request->get('urlCoursesData'),
//                 'image'=>$request->get('imageCoursesData'),
//
//            ]);

        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }


    public function detailsCourse(Request $request)
    {
        try{
            $course=Course::findOrFail($request->get('courseId'));
            return response()->json($course);
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $course=Course::findOrFail($request->get('courseId'));
            $course->update([
                'name'=>$request->get('nameCoursesData'),
                'excerpt'=>$request->get('excerptCoursesData'),
                'description'=>$request->get('descriptionCoursesData'),
                'category_courses_id'=>$request->get('categoryIdCoursesData'),
                'url'=>$request->get('urlCoursesData'),
                'image'=>$request->get('imageCoursesData'),
            ]);
            return response()->json([
                'name'=>$request->get('nameCoursesData'),
                'excerpt'=>$request->get('excerptCoursesData'),
                'description'=>$request->get('descriptionCoursesData'),
                'category_courses_id'=>$request->get('categoryIdCoursesData'),
                'url'=>$request->get('urlCoursesData'),
            ]);
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }


    public function destroy(Request $request)
    {
        try{
            $course=Course::findOrFail($request->get('courseId'));
           $course->delete();
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }
}
