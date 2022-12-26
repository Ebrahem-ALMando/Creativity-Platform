<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{
    public function  redirect()
    {

//        return view('');
        {
            if(Auth::id()){

            if (Auth::user()->isAdmin == '1') {

//                return view('home',compact($userId));
                return view('AdminDashboard');

            }
            else {
                return redirect()->back();

            }

        }
            else{
               return abort(403);
//                return redirect()->back();
            }}


    }
    public function getUserId(){
        try {
//            dd(Auth::user()->id);
            if(Auth::id()) {
                $userId=Auth::user()->id;
                $userName=Auth::user()->name;

            return response()->json([$userId,$userName]);
                }
            else{
                return response()->json(false);
            }
        }
        catch
            (\Exception $exception){
                Log::error($exception);
            }
    }

    public function logout(Request $request)
    {

        Auth::logout();
//        $request->session()->invalidate();
//
//        $request->session()->regenerateToken();

        return redirect('/');
    }
}

