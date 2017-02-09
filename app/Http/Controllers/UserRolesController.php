<?php

namespace App\Http\Controllers;

use App\UserRole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;

class UserRolesController extends Controller
{
    public function addUserRole(Request $request)
    {
        $rules = array(
            'roleName' => 'required|unique:user_roles|max:50'
        );

        $validator = Validator::make(Input::all(), $rules);

        if($validator->fails()) {
            return Response::json(array('errors' => $validator->getMessageBag()->toArray()));

        } else {
            $userRole = new UserRole();

            $userRole->roleName = $request -> roleName;
            $userRole->remember_token = $request -> _token;

            $userRole->save();
            return response()->json($userRole);
        }

    }

    public function editUserRole(Request $request)
    {
        $rules = array(
            'roleName' => 'required|unique:user_roles|max:50'
        );

        $validator = Validator::make(Input::all(), $rules);

        if($validator->fails()) {
            return Response::json(array('errors' => $validator->getMessageBag()->toArray()));

        } else {
            $userRole = UserRole::find($request->id);

            $userRole->roleName = $request -> roleName;
            $userRole->remember_token = $request -> _token;

            $userRole->save();
            return response()->json($userRole);
        }
    }

    public function deleteUserRole(Request $request)
    {
        $userRole = UserRole::find($request->id)->delete();
        return response()->json($userRole);
    }
}
