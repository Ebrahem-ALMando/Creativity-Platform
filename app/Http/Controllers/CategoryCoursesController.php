<?php

namespace App\Http\Controllers;

use App\Models\CategoryCourses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CategoryCoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $category_courses=CategoryCourses::orderby('id','desc')->get();
            return response()->json($category_courses);
        }
        catch (\Exception $exception){
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
            CategoryCourses::create([
                'name'=>$request->get('nameCategoryData'),
                'description'=>$request->get('descriptionCategoryData')
            ]);
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }


    public function detailsCategory(Request $request)
    {
        try{
            $category=CategoryCourses::findOrFail($request->get('categoryId'));
            return response()->json($category);
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CategoryCourses  $categoryCourses
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CategoryCourses $categoryCourses)
    {
        try {
            $category=CategoryCourses::findOrFail($request->get('categoryId'));
            $category->update([
                'name'=>$request->get('nameCategoryData'),
                'description'=>$request->get('descriptionCategoryData')
            ]);
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CategoryCourses  $categoryCourses
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request)
    {
        try{
            $category=CategoryCourses::findOrFail($request->get('categoryId'));
            $category->delete();
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }
}
