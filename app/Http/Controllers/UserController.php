<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Crypt;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
          $users=User::orderby('id','desc')->get();
            return response()->json($users);
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }
    public function countUser()
    {
        try {
            $users=User::all()->count();
            return response()->json($users);
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }
    public  function searchUser(Request $request){
       try{
           $data=$request->get('name');
           $users =User::where('name','like','%'.$data.'%')->orWhere('id','like','%'.$data.'%')->get();
//           ->orWhere('email ','like','%'.$data.'%')


//               ->orWhere('email ','like','%'.$data.'%')-
//                                    >get();

//           if($users){
//               return response()->json($users);
//           }
           return response()->json($users);


       }
       catch (\Exception $exception){
           Log::error($exception);
       }
    }
    public function viewTowUpUser(){
        try {
            $user=User::orderby('id','desc')->get()->take(2);
            return response()->json($user);
        }
        catch (\Exception $exception){
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
            User::create([
                'name'=>$request->get('userName'),
                'email'=>$request->get('userEmail'),
                'phone'=>$request->get('userPhone'),
                'country'=>$request->get('userCountry'),
//                'password'=>Crypt::encryptString($request->get('userPassword')),
               'password'=>bcrypt( $request->get('userPassword')),
//                'password'=>( $request->get('userPassword')),

            ]);
            return response()->json([
                'name'=>$request->get('userName'),
                'email'=>$request->get('userEmail'),
                'phone'=>$request->get('userPhone'),
                'country'=>$request->get('userCountry'),
            ]);
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }


    public function showUser(Request $request)
    {
        try{
            $user=User::findOrFail($request->get('userId'));
            return response()->json($user);
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        try {
            $userId=$request->get('userId');
            User::where('id',$userId)->update([
                'name'=>$request->get('userName'),
                'email'=>$request->get('userEmail'),
                'phone'=>$request->get('userPhone'),
                'country'=>$request->get('userCountry'),
            ]);
            return response()->json([
                'name'=>$request->get('userName'),
                'email'=>$request->get('userEmail'),
                'phone'=>$request->get('userPhone'),
                'country'=>$request->get('userCountry'),
            ]);
        }
        catch (\Exception $exception){
            Log::error($exception);
        }
    }


    public function delete(Request $request)
    {
        try {
            $user=$request->get('userId');
            User::where('id',$user)->delete();
            return response()->json($user);
        }
        catch (\Exception $exception)
        {
            Log::error($exception);
        }
    }
//    public  function redirect(){
//        return view('home');
//    }
//    public function Login(Request $request){
//        try {
//            $usere=$request->get('email');
////            $userp=Crypt::decryptString($request->get('pass'));
////            $userp=bcrypt($request->get('pass'));
//            $userp=($request->get('pass'));
//
////            if (Hash::check('plain-text-password', $userp)) {
////                $user= User::where('email',$usere)->where('password',$userp)->get();
////            }
//           $user= User::where('email',$usere)->where('password',$userp)->get();
//
//               return response()->json($user);
//
//
//        }
//        catch (\Exception $exception)
//        {
//            Log::error($exception);
//        }
//    }
}
