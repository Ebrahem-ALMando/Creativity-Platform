<?php

namespace App\Http\Controllers;

use App\Models\Enquirie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class EnquirieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try{
            $enq=Enquirie::orderby('id','desc')->get();
            return response()->json($enq);
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }
        public function getCountEnquiries(){
            try {
                $enquiries=Enquirie::all()->count();
                return response()->json($enquiries);
            }catch (\Exception $exception){
                Log::error($exception);
            }
        }
        public function getMyEnquiries(Request $request){
            try{
                $enq=Enquirie::orderby('id','desc')->where('userid',$request->get('userId'))->get();

               return response()->json($enq);
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
        try{
            Enquirie::create([
                'username'=>$request->get('name'),
                'branch'=>$request->get('branch'),
                'year'=>$request->get('year'),
                'subject_id'=>$request->get('subject'),
                'question'=>$request->get('question'),
                'suggestion'=>$request->get('suggestion'),
                'userid'=>$request->get('userId'),
                'isView'=>false,
            ]);
            return response()->json([
                'username'=>$request->get('name'),
                'branch'=>$request->get('branch'),
                'year'=>$request->get('year'),
                'subject_id'=>$request->get('subject'),
                'question'=>$request->get('question'),
                'suggestion'=>$request->get('suggestion'),
                'isView'=>false,
            ]);
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }
    public function storeReplace(Request $request){
        try{
            $enq=Enquirie::findOrFail($request->get('enquiriesID'));
            $enq->update([
                'answers'=>$request->get('replaceData'),
            ]);
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }
    public function View(Request $request){
        try{
            $enq=Enquirie::findOrFail($request->get('enquiriesId'));
            $enq->update([
                'isView'=>true
            ]);
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Enquirie  $enquirie
     * @return \Illuminate\Http\Response
     */
    public function show(Enquirie $enquirie)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Enquirie  $enquirie
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Enquirie $enquirie)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Enquirie  $enquirie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try{
            $enq=Enquirie::findOrFail($request->get('enquiriesId'));
            $enq->delete();
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }
}
