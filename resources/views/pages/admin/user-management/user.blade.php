@extends('layout.layout')

@section('content')


{{-- PAGE CONTENT --}}
<div class="rs-sidebar-right-menu">

    <div class="container-fluid rs-border">
        <div class="row rs-submenu-header">
            <h3>
                <span class="rs-submenu">System Users</span>
            </h3>

            <div class="rs-table-actions">


                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-search" id="search"></span>
                </h3>

                {{-- Search Tooltip --}}
                <div class="rs-tooltip rs-tooltip-search hidden animated fadeIn">
                    <div class="rs-tooltip1">
                        <span class=" glyphicon glyphicon-triangle-top"></span>
                    </div>
                    <div class="rs-tooltip2">
                        Quick Search
                    </div>
                </div>

                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-plus add-user-modal" id="add"></span>
                </h3>

                {{-- Add User Tooltip --}}
                <div class="rs-tooltip rs-tooltip-add hidden animated fadeIn">
                    <div class="rs-tooltip1">
                        <span class=" glyphicon glyphicon-triangle-top"></span>
                    </div>
                    <div class="rs-tooltip2">
                        Add User
                    </div>
                </div>

                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-trash" id="delete"></span>
                </h3>

                {{-- Delete User Tooltip --}}
                <div class="rs-tooltip rs-tooltip-delete hidden animated fadeIn">
                    <div class="rs-tooltip1">
                        <span class=" glyphicon glyphicon-triangle-top"></span>
                    </div>
                    <div class="rs-tooltip2">
                        Delete User(s)
                    </div>
                </div>

                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-filter" id="filter"></span>
                </h3>

                {{-- Filter Tooltip --}}
                <div class="rs-tooltip rs-tooltip-filter hidden animated fadeIn">
                    <div class="rs-tooltip1">
                        <span class=" glyphicon glyphicon-triangle-top"></span>
                    </div>
                    <div class="rs-tooltip2">
                        Filter Results
                    </div>
                </div>

                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-bookmark" id="bookmark"></span>
                </h3>

                {{-- Bookmark Tooltip --}}
                <div class="rs-tooltip rs-tooltip-bookmark hidden animated fadeIn">
                    <div class="rs-tooltip1">
                        <span class=" glyphicon glyphicon-triangle-top"></span>
                    </div>
                    <div class="rs-tooltip2">
                        Bookmark Page
                    </div>
                </div>
            </div>

            <div class="rs-table-search animated fadeInRight hidden">
                <form role="search">
                    {{ csrf_field() }}

                    <form class="form-group">
                        <div>
                            <input type="text" class="form-control table-search" name="table-search" placeholder="Type to search" />
                        </div>
                    </form>
                </form>
            </div>

        </div>
    </div>

</div>

<div class="rs-sidebar-right-content rs-border">

    <div class="rs-content-container">

        {{--MAIN CONTENT--}}

        <div class="rs-table-border table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <td>
                        <input type="checkbox" name="user-select" class="rs-checkbox-all" id="user-select-all">
                        <label for="user-select-all"></label>
                    </td>
                    <td id="user-email-address">Email Address</td>
                    <td id="user-full-name">Full Name</td>
                    <td id="user-user-role">User Role</td>
                    <td id="user-status">Status</td>
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
                            <input type="checkbox" name="user-select[]" id="checkbox{{ $user->id }}"  data-id="{{ $user->id }}" data-email="{{ $user->email }}" data-lastname="{{ $user->lastName }}" data-firstname="{{ $user->firstName }}" data-userrole="{{ $user->userRole }}" data-password="{{ $user->password }}" data-status="{{ $user->status }}" value="{{ $user->id }}">
                            <label title="Select User" for="checkbox{{ $user->id }}"></label>
                        </td>
                        <td>{{ $user->email }}</td>
                        <td>{{ $user->firstName }} {{ $user->lastName }}</td>
                        <td>{{ $user->userRole }}</td>
                        <td>{{ $user->status }}</td>
                        <td class="rs-table-action">
                            <a class="edit-user-modal" data-toggle="tooltip"  title="Edit User" data-id="{{ $user->id }}" data-email="{{ $user->email }}" data-lastname="{{ $user->lastName }}" data-firstname="{{ $user->firstName }}" data-userrole="{{ $user->userRole }}" data-password="{{ $user->password }}" data-status="{{ $user->status }}"> <span class="glyphicon glyphicon-edit"></span></a>
                            <a class="delete-user-modal" data-toggle="tooltip"  title="Delete User"  data-id="{{ $user->id }}" data-email="{{ $user->email }}" data-lastname="{{ $user->lastName }}" data-firstname="{{ $user->firstName }}" data-userrole="{{ $user->userRole }}" data-password="{{ $user->password }}" data-status="{{ $user->status }}"><span class="glyphicon glyphicon-trash"></span></a>
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

                        @if (count($users) > 0)
                            <div class="rs-showing">
                                <span class="rs-showing-total">Showing 1 to <span class="user-count">{{ $userCount }}</span> of <span class="user-count2">{{ $userCount }}</span> system users.</span>
                            </div>
                        @else
                            <div class="rs-showing">
                                <span class="rs-showing-total">No records found.<br></span>
                            </div>
                        @endif

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

{{--/PAGE CONTENT--}}


{{--Modal--}}
@include('pages.admin.user-management.user-helper')
<script src="/js/admin/user.js"></script>

@stop

