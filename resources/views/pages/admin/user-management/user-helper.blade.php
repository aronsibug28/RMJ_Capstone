{{--Modal--}}

{{--Primary Modal--}}
<div id="user_modal" class="modal fade" role="dialog">
    <div class="modal-dialog rs-modal">
        <div class="modal-content rs-modal-content">
            <div class="modal-header bg-primary rs-modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><span class="glyphicon glyphicon-user"></span> Add User</h4>
            </div>

            <div class="modal-body"><br>

                <form role="form" class="rs-form">
                    {{ csrf_field() }}

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-6">
                                <label>First Name: <b style="color: red">*</b></label>
                                <input type="text" placeholder="First Name" class="form-control" id="firstname">
                                <span class="rs-form-error errorFirstName rs-hidden">.</span>
                            </div>

                            <div class="col-sm-6">
                                <label>Last Name: <b style="color: red">*</b></label>
                                <input type="text" placeholder="Last Name" class="form-control" id="lastname">
                                <span class="rs-form-error errorLastName rs-hidden">.</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-6">
                                <label>Email Address: <b style="color: red">*</b></label>
                                <input type="text" placeholder="Email Address" class="form-control" id="email">
                                <span class="rs-form-error errorEmail rs-hidden">.</span>
                            </div>

                            <div class="col-sm-6">
                                <label>Password: <b style="color: red">*</b></label>
                                <input type="password" placeholder="Password" class="form-control" id="password">
                                <span class="rs-form-error errorPassword rs-hidden">.</span>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col-sm-6">
                                <label>User Role: </label><br>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" id="rs-user-dropdown">
                                        <span class="pull-left" id="userrole"></span> <span class="caret pull-right rs-user-dropdown"></span>
                                    </button>

                                    <ul class="dropdown-menu rs-user-dropdown-width rs-index-top">

                                        @foreach($userRoles as $userRole)
                                            <li><div class="userRole{{ $userRole->id }}">{{ $userRole->roleName }}</div></li>

                                            <script>
                                                $(document).ready(function () {
                                                    $('.userRole{{ $userRole->id }}').click(function () {
                                                        $('#userrole').text($('.userRole{{ $userRole->id }}').text());
                                                    });
                                                });
                                            </script>

                                        @endforeach

                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <label>Status: </label><br>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" id="rs-user-dropdown">
                                        <span class="pull-left" id="status">Enabled</span> <span class="caret pull-right rs-user-dropdown"></span>
                                    </button>
                                    <ul class="dropdown-menu rs-user-dropdown-width rs-index-top">
                                        <li><div id="statusEnable">Enabled</div></li>
                                        <li><div id="statusDisable">Disabled</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div><br>

                </form>

                <div class="deleteUser">
                    Are you sure you want to delete
                    <a class="edit2-user-modal"><span class="user-email"></span></a>'s account?
                    <span class="hidden id"></span><br><br>
                </div>

            </div>

            <div class="modal-footer user-modal-footer">
                <button type="button" href="#" class="btn btn-link" data-dismiss="modal">Cancel</button>
                <button type="button" href="#" id="user-action-btn-modal" class="btn btn-primary rs-btn-primary user_action_modal"  onclick="validate()">Save Changes</button>
            </div>
        </div>
    </div>
</div>
{{--/Modal--}}