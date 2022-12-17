<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ServiceController extends Controller
{
    public function index()
    {
        try {
            $service = Service::orderby('id', 'desc')->get();
            return response()->json($service);
        } catch (\Exception $exception) {
            Log::error($exception);
        }
    }

    public function store(Request $request)
    {
        try {
//            if ($request->hasFile('imageServiceData'))

//                $imageName = rand(11111, 99999) . '.' . $request->file('imageServiceData');
//                      $img=  $request->get('imageServiceData')->getClientOriginalExtension();
//                $destinationPath = 'events';
//                $upload_success = $request->file('image')->move($destinationPath, $imageName);
//            $image=$request->get('imageServiceData');
//            if(isset($image)){
//                $imagename=time().'.'.$image->getClientOriginalExtension();
//                $image->move( public_path("/public/ServiceImage"),$image->getClientOriginalExtension());
//            }
//            $img=$request->get('imageServiceData');
//            $path=$img->storeAs('img',$img,'images_s');
            Service::create([
                'name'=>$request->get('nameServiceData'),
                'excerpt'=>$request->get('excerptServiceData'),
                'description'=>$request->get('descriptionServiceData'),
//                'image'=>$path
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
public  function delete(Request $request){
    try {
        $service=Service::findOrFail($request->get('idService'));
        $service->delete();
    }catch (\Exception $exception){
        Log::error($exception);
    }
}
}
