// {{--SCRIPTS--}}

// {{--Menu Toggle Script--}}

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


// {{--AJAX Function to Edit User--}}
var UserRoleId = '';

// {{--Edit Data from Modal--}}
$(document).on('click', '.edit-user-role-modal', function() {
    $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Edit User Role");
    $('.deleteUserRole').hide();
    $('.rs-form').show();
    $('.user_role_action_modal').text("Save Changes");
    $('.rs-form-error').addClass('rs-hidden');
    $('#user-role-action-btn-modal').addClass('edit_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('edit2_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('add_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('delete_user_role_action_modal');
    $('#rolename').val($(this).data('rolename'));
    $('#user_role_modal').modal('show');

    UserRoleId = $(this).data('id');
});


$('.user-role-modal-footer').on('click', '.edit_user_role_action_modal', function() {

    $.ajax({
        type: 'POST',
        url: '/editUserRole',
        data: {
            '_token': $('input[name=_token]').val(),
            'id': UserRoleId,
            'roleName': $('#rolename').val(),
            'numOfUsers': 'test',
            'userRoles': 'test'
        },
        success: function (data) {
            if ((data.errors)) {
                $('.errorRoleName').text('');

                $('.errorRoleName').removeClass('rs-hidden').text(data.errors.roleName);

            } else {
                $('.item' + data.id).replaceWith("" +
                    "<tr class='item" + data.id + "'>" +
                    "<td class='rs-table-select'>" +
                    "<input type='checkbox' name='userRole-select'>" +
                    "</td>" +
                    "<td>" + data.roleName + "</td>" +
                    "<td>test</td>" +
                    "<td>test</td>" +
                    "<td class='rs-table-action'>" +
                    "<a class='edit-user-role-modal' data-id='" + data.id + "' data-rolename='" + data.roleName + "' data-numofusers='" + data.numOfUsers + "' data-userroles='" + data.userRoles + "'>" +
                    "<span class='glyphicon glyphicon-edit'></span>" +
                    "</a> " +
                    "<a class='delete-user-role-modal' data-id='" + data.id + "' data-rolename='" + data.roleName + "' data-numofusers='" + data.numOfUsers + "' data-userroles='" + data.userRoles + "'>" +
                    "<span class='glyphicon glyphicon-trash'></span>" +
                    "</a> " +
                    "</td>" +
                    "</tr>");

                $('#user_role_modal').modal('hide');
                $('.container-message .rs-msg').text('User Role successfully Updated.');
                $('.container-message').removeClass('hidden');
                $('.container-message').removeClass('animated fadeOut');
                $('.container-message').addClass('animated fadeInUp');
                $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $('.container-message').removeClass('animated fadeInUp');
                    $('.container-message').addClass('animated fadeOut');
                });

                // to clear values on fields
                $('#rolename').val('');

                $('.errorRoleName').text('');
            }
        }
    });
});


// {{--AJAX Function to Add User Role--}}
var UserRoleCount = 0;

// {{--Add Data from Modal--}}
$(document).on('click', '.add-user-modal', function() {
    // to clear values on fields
    $('#rolename').val('');
    $('.rs-form-error').addClass('rs-hidden');

    $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Add User Role");
    $('.deleteUserRole').hide();
    $('.rs-form').show();
    $('#user-role-action-btn-modal').addClass('add_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('edit_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('edit2_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('delete_user_role_action_modal');
    $('.user_role_action_modal').text("Add User Role");
    $('#user_role_modal').modal('show');
});


$('.user-role-modal-footer').on('click', '.add_user_role_action_modal', function() {

    $.ajax({
        type: 'POST',
        url: '/addUserRole',
        data: {
            '_token': $('input[name=_token]').val(),
            'roleName': $('#rolename').val(),
            'numOfUsers': 'test',
            'userRoles': 'test'
        },
        success: function (data) {
            if ((data.errors)) {
                $('.errorRoleName').text('');

                $('.errorRoleName').removeClass('rs-hidden').text(data.errors.roleName);

            } else {
                $('.error').remove();
                $('#showUsers').append("" +
                        "<tr class='item" + data.id + "'>" +
                        "<td class='rs-table-select'>" +
                        "<input type='checkbox' name='userRole-select'>" +
                        "</td>" +
                        "<td>" + data.roleName + "</td>" +
                        "<td>test</td>" +
                        "<td>test</td>" +
                        "<td class='rs-table-action'>" +
                        "<a class='edit-user-role-modal' data-id='" + data.id + "' data-rolename='" + data.roleName + "' data-numofusers='" + data.numOfUsers + "' data-userroles='" + data.userRoles + "'>" +
                        "<span class='glyphicon glyphicon-edit'></span>" +
                        "</a> " +
                        "<a class='delete-user-role-modal' data-id='" + data.id + "' data-rolename='" + data.roleName + "' data-numofusers='" + data.numOfUsers + "' data-userroles='" + data.userRoles + "'>" +
                        "<span class='glyphicon glyphicon-trash'></span>" +
                        "</a> " +
                        "</td>" +
                        "</tr>");

                $('#user_role_modal').modal('hide');
                $('.container-message .rs-msg').text('User Role successfully Added.');
                $('.container-message').removeClass('hidden');
                $('.container-message').removeClass('animated fadeOut');
                $('.container-message').addClass('animated fadeInUp');
                $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $('.container-message').removeClass('animated fadeInUp');
                    $('.container-message').addClass('animated fadeOut');
                });
            }

            UserRoleCount = parseInt($('.user-role-count').text(), 10);
            UserRoleCount = UserRoleCount + 1;
            $('.user-role-count').text(UserRoleCount);
            $('.user-role-count2').text(UserRoleCount);

            // to clear values on fields
            $('#userrole').val('');


        }
    });
});


// {{--AJAX Function to Delete User--}}
var UserCount = 0;

// {{--Delete Data from Modal--}}
$(document).on('click', '.delete-user-role-modal', function() {
    $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Delete User Role");
    $('.deleteUserRole').show();
    $('.id').text($(this).data('id'));
    $('.user-role').text($(this).data('rolename'));
    $('.rs-form-error').addClass('rs-hidden');
    $('#user-role-action-btn-modal').addClass('delete_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('edit_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('edit2_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('add_user_role_action_modal');
    $('#rolename').val($(this).data('rolename'));
    $('.rs-form').hide();
    $('.user_role_action_modal').text("Yes, Delete");
    $('#user_role_modal').modal('show');
});


$('.user-role-modal-footer').on('click', '.delete_user_role_action_modal', function() {

    $.ajax({
        type: 'POST',
        url: '/deleteUserRole',
        data: {
            '_token': $('input[name=_token]').val(),
            'id': $('.id').text()
        },
        success: function(data) {
            $('#showUsers').find('.item' + $('.id').text()).remove();
            $('#user_role_modal').modal('hide');
            $('.container-message .rs-msg').text('User Role successfully Deleted.');
            $('.container-message').removeClass('hidden');
            $('.container-message').removeClass('animated fadeOut');
            $('.container-message').addClass('animated fadeInUp');
            $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.container-message').removeClass('animated fadeInUp');
                $('.container-message').addClass('animated fadeOut');
            });

            UserRoleCount = parseInt($('.user-role-count').text(), 10);
            UserRoleCount = UserRoleCount - 1;
            $('.user-role-count').text(UserRoleCount);
            $('.user-role-count2').text(UserRoleCount);

        }
    });
});


// {{--AJAX Function to Edit User--}}

// {{--Edit Data from Modal--}}
$(document).on('click', '.edit2-user-role-modal', function() {
    $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Edit User Role");
    $('.deleteUserRole').hide();
    $('.rs-form').show();
    $('.user_role_action_modal').text("Save Changes");
    $('.rs-form-error').addClass('rs-hidden');
    $('#user-role-action-btn-modal').addClass('edit2_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('edit_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('add_user_role_action_modal');
    $('#user-role-action-btn-modal').removeClass('delete_user_role_action_modal');

});


$('.user-role-modal-footer').on('click', '.edit2_user_role_action_modal', function() {

    $.ajax({
        type: 'POST',
        url: '/editUserRole',
        data: {
            '_token': $('input[name=_token]').val(),
            'id': $('.id').text(),
            'roleName': $('#rolename').val(),
            'numOfUsers': 'test',
            'userRoles': 'test'
        },
        success: function (data) {
            if ((data.errors)) {
                $('.errorRoleName').text('');

                $('.errorRoleName').removeClass('rs-hidden').text(data.errors.roleName);

            } else {
                $('.item' + data.id).replaceWith("" +
                    "<tr class='item" + data.id + "'>" +
                    "<td class='rs-table-select'>" +
                    "<input type='checkbox' name='userRole-select'>" +
                    "</td>" +
                    "<td>" + data.roleName + "</td>" +
                    "<td>test</td>" +
                    "<td>test</td>" +
                    "<td class='rs-table-action'>" +
                    "<a class='edit-user-role-modal' data-id='" + data.id + "' data-rolename='" + data.roleName + "' data-numofusers='" + data.numOfUsers + "' data-userroles='" + data.userRoles + "'>" +
                    "<span class='glyphicon glyphicon-edit'></span>" +
                    "</a> " +
                    "<a class='delete-user-role-modal' data-id='" + data.id + "' data-rolename='" + data.roleName + "' data-numofusers='" + data.numOfUsers + "' data-userroles='" + data.userRoles + "'>" +
                    "<span class='glyphicon glyphicon-trash'></span>" +
                    "</a> " +
                    "</td>" +
                    "</tr>");

                $('#user_role_modal').modal('hide');
                $('.container-message .rs-msg').text('User Role successfully Updated.');
                $('.container-message').removeClass('hidden');
                $('.container-message').removeClass('animated fadeOut');
                $('.container-message').addClass('animated fadeInUp');
                $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $('.container-message').removeClass('animated fadeInUp');
                    $('.container-message').addClass('animated fadeOut');
                });

                // to clear values on fields
                $('#rolename').val('');

                $('.errorRoleName').text('');
            }
        }
    });
});

