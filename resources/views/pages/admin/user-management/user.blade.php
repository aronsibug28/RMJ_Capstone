@extends('layout.layout')

@section('content')


{{-- PAGE CONTENT --}}
<div class="rs-sidebar-right-menu">

    <div class="container-fluid rs-border">
        <div class="row rs-submenu-header">
            <h3>
                <span class="rs-submenu">System Users</span>
            </h3>

            <div class="pull-right">
                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-search" id="search" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"></span>
                </h3>

                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-plus add-user-modal" id="add"></span>
                </h3>

                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-trash" id="delete"></span>
                </h3>

                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-filter" id="filter"></span>
                </h3>

                <h3 class="rs-submenu-header-buttons">
                    <span class="glyphicon glyphicon-bookmark" id="bookmark"></span>
                </h3>
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

                </thead>

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
                            <input type="checkbox" name="user-select" id="checkbox{{ $user->id }}">
                            <label for="checkbox{{ $user->id }}"></label>
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
                            Showing 1 to <span class="user-count">{{ $userCount }}</span> of <span class="user-count2">{{ $userCount }}</span> system users.
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

{{--/PAGE CONTENT--}}


{{--Modal--}}
@include('pages.admin.user-management.user-helper')
<script src="/js/admin/user.js"></script>

@stop

