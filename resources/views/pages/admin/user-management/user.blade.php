@extends('layout.layout')

@section('content')


{{-- PAGE CONTENT --}}
<div class="rs-sidebar-right-static">

    <div class="container-fluid">
        <div class="row rs-submenu-header">
            <h3>
                <button type="button" href="#menu-toggle" class="rs-sidebar-toggle" id="menu-toggle">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <span class="rs-submenu">User Management</span>
            </h3>
        </div>

        <div class="row rs-submenu-tabs">
            <ul class="rs-submenu-tab rs-submenu-tabs-height">
                <li class="active rs-submenu-tabs-height">
                    <a href="users"><span class="icon-user"></span> Users</a>
                </li>
                <li rs-submenu-tabs-height>
                    <a href="user-roles">User Roles</a>
                </li>
            </ul>
        </div>


        <div class="row rs-main-content">

            {{--MAIN CONTENT--}}

            <div class="rs-table-border table-responsive">
                <table class="table table-striped table-hover">
                    <thead>
                    <tr>
                        <td colspan="6">

                            <div class="rs-filter">
                                Filter:
                            </div>

                            <div class="rs-filter-input">
                                <span class="rs-filter-label">&nbsp;Filter:&nbsp;</span>
                                <input type="text" name="name" id="txtFilter" class="form-control" placeholder="Type to filter..." title="" required="required" >
                            </div>

                            <div class="rs-show-input rs-hide-mobile">
                                <div class="btn-group rs-index-top">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" id="showDropdown">
                                        10 <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-width rs-index-top">
                                        <li><a href="#" id="show10">10</a></li>
                                        <li><a href="#" id="show25">25</a></li>
                                        <li><a href="#" id="show50">50</a></li>
                                        <li><a href="#" id="show100">100</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#" id="showAll">All</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="rs-show">
                                Show:
                            </div>

                            <div class="rs-show-input rs-show-mobile">
                                <div class="btn-group rs-index-top">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" >
                                        10 <span class="caret"></span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-width rs-index-top">
                                        <li><a href="#">10</a></li>
                                        <li><a href="#">25</a></li>
                                        <li><a href="#">50</a></li>
                                        <li><a href="#">100</a></li>
                                        <li role="separator" class="divider"></li>
                                        <li><a href="#">All</a></li>
                                    </ul>
                                </div>
                            </div>

                        </td>
                    </tr>
                    </thead>

                    <thead>
                        <tr>
                            <td></td>
                            <td>Email Address</td>
                            <td>Full Name</td>
                            <td>User Role</td>
                            <td>Status</td>
                            <td>Action</td>
                        </tr>
                    </thead>

                    <tbody id="showUsers">

                        <?php
                            $userCount = 0;
                        ?>

                        @foreach($users as $user)

                            <tr class="item{{ $user->id }}">
                                <td class="rs-table-select">
                                    <input type="checkbox" name="user-select">
                                </td>
                                <td>{{ $user->email }}</td>
                                <td>{{ $user->firstName }} {{ $user->lastName }}</td>
                                <td>{{ $user->userRole }}</td>
                                <td>{{ $user->status }}</td>
                                <td class="rs-table-action">
                                    <a class="edit-user-modal" data-id="{{ $user->id }}" data-email="{{ $user->email }}" data-lastname="{{ $user->lastName }}" data-firstname="{{ $user->firstName }}" data-userrole="{{ $user->userRole }}" data-password="{{ $user->password }}" data-status="{{ $user->status }}"> <span class="glyphicon glyphicon-edit"></span></a>
                                    <a class="delete-user-modal" data-id="{{ $user->id }}" data-email="{{ $user->email }}" data-lastname="{{ $user->lastName }}" data-firstname="{{ $user->firstName }}" data-userrole="{{ $user->userRole }}" data-password="{{ $user->password }}" data-status="{{ $user->status }}"><span class="glyphicon glyphicon-trash"></span></a>
                                </td>
                            </tr>

                        <?php
                            $userCount++;
                        ?>

                        @endforeach

                    </tbody>

                    {{--Table Footer--}}
                    <thead>
                        <tr>
                            <td colspan="6">

                                <div class="rs-showing">
                                    Showing 1 to <span class="user-count">{{ $userCount }}</span> of <span class="user-count2">{{ $userCount }}</span> users.
                                </div>

                                <div class="rs-pagination">
                                    <ul class="pagination pagination-small">
                                        <li><a href="#">&laquo;</a></li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">&raquo;</a></li>
                                    </ul>
                                </div>

                            </td>
                        </tr>
                    </thead>

                </table>
            </div>

            {{--/MAIN CONTENT--}}

        </div>

    </div>
</div>

{{--/PAGE CONTENT--}}


{{--Modal--}}
@include('pages.admin.user-management.user-helper')
<script src="/js/admin/user.js"></script>

@stop

