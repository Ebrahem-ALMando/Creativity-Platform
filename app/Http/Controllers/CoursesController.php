<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
             try {
                 $courses = Courses::orderby('id', 'desc')->get();
                    return response()->json($courses);
                } catch (\Exception $exception) {
                    Log::error($exception);
                }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            Courses::create([
                'name'=>$request->get('nameCoursesData'),
                'excerpt'=>$request->get('excerptCoursesData'),
                'description'=>$request->get('descriptionCoursesData'),
//                'category_courses_id'=>'1',
//                'category_courses_id'=>$request->get('categoryIdCoursesData'),
//                 'url'=>$request->get('urlCoursesData'),
                'image'=>$request->get('imageCoursesData'),
            ]);
//                $request->get('imageServiceData')
//            return response()->json($img);
//            return response()->json([
//                'name'=>$request->get('nameServiceData'),
//                'excerpt'=>$request->get('excerptServiceData'),
//                'description'=>$request->get('descriptionServiceData'),
//                'image'=>$img,
//            ]);

        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function show(Courses $courses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Courses $courses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Courses  $courses
     * @return \Illuminate\Http\Response
     */
    public function destroy(Courses $courses)
    {
        //
    }
}
