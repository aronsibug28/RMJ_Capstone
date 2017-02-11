<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\UserRole;
use Illuminate\Support\Facades\DB;

class PageController extends Controller
{

    //Admin - User Management
    public function users()
    {
        $userRoles = UserRole::all();

        $users = DB::table('users')
        ->orderBy('email', 'asc')
        ->get();

        return view('pages.admin.user-management.user', compact('users', 'userRoles'));
    }

    public function userRoles()
    {
        $userRoles = UserRole::all();

        return view('pages.admin.user-management.user-role', compact('userRoles'));
    }
}
