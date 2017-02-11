<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;


class UsersController extends Controller
{
    public function addUser(Request $request)
    {
        $rules = array(
            'lastName' => 'required|max:30',
            'firstName' => 'required|max:30',
            'email' => ['required', 'email', 'unique:users,email', 'max:50'],
            'password' => 'required|max:30|min:6'
        );

        $validator = Validator::make(Input::all(), $rules);

        if($validator->fails()) {
            return Response::json(array('errors' => $validator->getMessageBag()->toArray()));

        } else {
            $user = new User();

            $user->lastName = $request -> lastName;
            $user->firstName = $request -> firstName;
            $user->userRole = $request -> userRole;
            $user->email = $request -> email;
            $user->password = $request -> password;
            $user->status = $request -> status;
            $user->remember_token = $request -> _token;

            $user->save();
            return response()->json($user);
        }

    }

    public function editUser(Request $request)
    {
        $rules = array(
            'lastName' => 'required|max:30',
            'firstName' => 'required|max:30',
            'email' => ['required',
                Rule::unique('users')->ignore($request->id),
                'email',
                'max:50'
            ],
            'password' => 'required|max:30|min:6'
        );

        $validator = Validator::make(Input::all(), $rules);

        if($validator->fails()) {
            return Response::json(array('errors' => $validator->getMessageBag()->toArray()));

        } else {
            $user = User::find($request->id);

            $user->lastName = $request->lastName;
            $user->firstName = $request->firstName;
            $user->userRole = $request->userRole;
            $user->email = $request->email;
            $user->password = $request->password;
            $user->status = $request->status;
            $user->remember_token = $request->_token;

            $user->save();
            return response()->json($user);
        }
    }

    public function deleteUser(Request $request)
    {
        //Single Delete
        $user = User::find($request->id);
        $user->delete();
        return response()->json($user);
    }

    public function deleteUsers(Request $request)
    {
        //Multiple Delete
        $user = Input::get('id');
        User::destroy($user);
        return response()->json($user);
    }
}
