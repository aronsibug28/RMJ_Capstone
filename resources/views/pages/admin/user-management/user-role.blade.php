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
                    <li class="rs-submenu-tabs-height">
                        <a href="users">Users</a>
                    </li>
                    <li class="active rs-submenu-tabs-height">
                        <a href="user-roles"><span class="icon-user"></span> User Roles</a>
                    </li>
                </ul>
            </div>


            <div class="row rs-main-content">

                {{--MAIN CONTENT--}}

                <div class="rs-table-border table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <td colspan="5">

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
                            <td>Role Name</td>
                            <td>Number of Users</td>
                            <td>User Roles</td>
                            <td>Action</td>
                        </tr>
                        </thead>

                        <tbody id="showUsers">

                        <?php
                        $userRoleCount = 0;
                        ?>

                        @foreach($userRoles as $userRole)

                            <tr class="item{{ $userRole->id }}">
                                <td class="rs-table-select">
                                    <input type="checkbox" name="userRole-select">
                                </td>
                                <td>{{ $userRole->roleName }}</td>
                                <td>{{ $userRole->numOfUsers }}</td>
                                <td>{{ $userRole->userRoles }}</td>
                                <td class="rs-table-action">
                                    <a class="edit-user-role-modal" data-id="{{ $userRole->id }}" data-rolename="{{ $userRole->roleName }}" data-numofusers="{{ $userRole->numOfUsers }}" data-userroles="{{ $userRole->userRoles }}"> <span class="glyphicon glyphicon-edit"></span></a>
                                    <a class="delete-user-role-modal" data-id="{{ $userRole->id }}" data-rolename="{{ $userRole->roleName }}" data-numofusers="{{ $userRole->numOfUsers }}" data-userroles="{{ $userRole->userRoles }}"> <span class="glyphicon glyphicon-trash"></span></a>
                                </td>
                            </tr>

                            <?php
                            $userRoleCount++;
                            ?>

                        @endforeach

                        </tbody>

                        {{--Table Footer--}}
                        <thead>
                        <tr>
                            <td colspan="5">

                                <div class="rs-showing">
                                    Showing 1 to <span class="user-role-count">{{ $userRoleCount }}</span> of <span class="user-role-count2">{{ $userRoleCount }}</span> user roles.
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
    @include('pages.admin.user-management.user-role-helper')
    <script src="/js/admin/user-role.js"></script>


@stop

