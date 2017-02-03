<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/admin/users', 'PageController@users');
Route::get('/admin/user-roles', 'PageController@userRoles');


Route::post('/editUser', 'UsersController@editUser');
Route::post('/addUser', 'UsersController@addUser');
Route::post('/deleteUser', 'UsersController@deleteUser');


Route::post('/editUserRole', 'UserRolesController@editUserRole');
Route::post('/addUserRole', 'UserRolesController@addUserRole');
Route::post('/deleteUserRole', 'UserRolesController@deleteUserRole');
