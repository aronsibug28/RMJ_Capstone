<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\UserRole;

class PageController extends Controller
{

    //Admin - User Management
    public function users()
    {
        $users = User::all();
        $userRoles = UserRole::all();

        return view('pages.admin.user-management.user', compact('users', 'userRoles'));
    }

    public function userRoles()
    {
        $userRoles = UserRole::all();

        return view('pages.admin.user-management.user-role', compact('userRoles'));
    }
}
