{{--Modal--}}

{{--Primary Modal--}}
<div id="user_role_modal" class="modal fade" role="dialog">
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
                            <div class="col-sm-12">
                                <label>Role Name: <b style="color: red">*</b></label>
                                <input type="text" placeholder="Role Name" class="form-control" id="rolename">
                                <span class="rs-form-error errorRoleName rs-hidden">.</span>
                            </div>
                        </div>
                    </div>


                </form>

                <div class="deleteUserRole">
                    Are you sure you want to delete
                    <a class="edit2-user-role-modal"><span class="user-role"></span></a>'s role?
                    <span class="hidden id"></span><br><br>
                </div>

            </div>

            <div class="modal-footer user-role-modal-footer">
                <button type="button" href="#" class="btn btn-link" data-dismiss="modal">Cancel</button>
                <button type="button" href="#" id="user-role-action-btn-modal" class="btn btn-primary rs-btn-primary user_role_action_modal" >Save Changes</button>
            </div>
        </div>
    </div>
</div>
{{--/Modal--}}