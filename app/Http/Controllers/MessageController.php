<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $messages=Message::orderby('id','desc')->get();
            return response()->json($messages);
        }catch (\Exception $exception){
            Log::error($exception);
    }

    }
    public function getCountMessage()
    {
        try {
            $message=Message::all()->count();
            return response()->json($message);
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
    public function createMessage(Request $request)
    {
        try {
            $firstName=$request->get('firstName');
            $lastName=$request->get('lastName');
            $email=$request->get('email');
            $phone=$request->get('phone');
            $message=$request->get('message');

        Message::create([
            'firstName'=>$firstName,
            'lastName'=>$lastName,
            'email'=>$email,
            'phone'=>$phone,
            'message'=>$message
        ]);
            return response("Success",200)->json();
        }
        catch (\Exception $exception){
            Log::error($exception);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }


    public function destroy(Request $request)
    {
        try {
            $message=Message::findOrFail($request->get('idMessage'));
            $message->delete();
        }catch (\Exception $exception){
            Log::error($exception);
        }
    }
}
