// {{--SCRIPTS--}}

// {{--Menu Toggle Script--}}

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


// {{--AJAX Function to Edit User--}}
var UserId = '';

// {{--Edit Data from Modal--}}
$(document).on('click', '.edit-user-modal', function() {
    $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Edit User");
    $('.deleteUser').hide();
    $('.rs-form').show();
    $('.user_action_modal').text("Save Changes");
    $('.rs-form-error').addClass('rs-hidden');
    $('#user-action-btn-modal').addClass('edit_user_action_modal');
    $('#user-action-btn-modal').removeClass('edit2_user_action_modal');
    $('#user-action-btn-modal').removeClass('add_user_action_modal');
    $('#user-action-btn-modal').removeClass('delete_user_action_modal');
    $('#lastname').val($(this).data('lastname'));
    $('#firstname').val($(this).data('firstname'));
    $('#userrole').text($(this).data('userrole'));
    $('#email').val($(this).data('email'));
    $('#password').val($(this).data('password'));
    $('#status').text($(this).data('status'));
    $('#user_modal').modal('show');

    UserId = $(this).data('id');
});


$('.user-modal-footer').on('click', '.edit_user_action_modal', function() {

    $.ajax({
        type: 'POST',
        url: '/editUser',
        data: {
            '_token': $('input[name=_token]').val(),
            'id': UserId,
            'lastName': $('#lastname').val(),
            'firstName': $('#firstname').val(),
            'userRole': $('#userrole').text(),
            'email': $('#email').val(),
            'password': $('#password').val(),
            'status': $('#status').text()
        },
        success: function (data) {
            if ((data.errors)) {
                $('.errorLastName').text('');
                $('.errorFirstName').text('');
                $('.errorEmail').text('');
                $('.errorPassword').text('');

                $('.errorLastName').removeClass('rs-hidden').text(data.errors.lastName);
                $('.errorFirstName').removeClass('rs-hidden').text(data.errors.firstName);
                $('.errorEmail').removeClass('rs-hidden').text(data.errors.email);
                $('.errorPassword').removeClass('rs-hidden').text(data.errors.password);

            } else {
                $('.item' + data.id).replaceWith("" +
                    "<tr class='item" + data.id + "'>" +
                    "<td class='rs-table-select'>" +
                    "<input type='checkbox' name='chkSelect' id=''>" +
                    "</td>" +
                    "<td>" + data.email + "</td>" +
                    "<td>" + data.firstName + " " + data.lastName + "</td>" +
                    "<td>" + data.userRole + "</td>" +
                    "<td>" + data.status + "</td>" +
                    "<td class='rs-table-action'>" +
                    "<a class='edit-user-modal' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "'>" +
                    "<span class='glyphicon glyphicon-edit'></span>" +
                    "</a> " +
                    "<a class='delete-user-modal' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "'>" +
                    "<span class='glyphicon glyphicon-trash'></span>" +
                    "</a>" +
                    "</td>" +
                    "</tr>");

                $('#user_modal').modal('hide');
                $('.container-message .rs-msg').text('User successfully Updated.');
                $('.container-message').removeClass('hidden');
                $('.container-message').removeClass('animated fadeOut');
                $('.container-message').addClass('animated fadeInUp');
                $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $('.container-message').removeClass('animated fadeInUp');
                    $('.container-message').addClass('animated fadeOut');
                });

                // to clear values on fields
                $('#lastname').val('');
                $('#firstname').val('');
                $('#userrole').text('Employee');
                $('#email').val('');
                $('#password').val('');
                $('#status').text('Enabled');

                $('.errorLastName').text('');
                $('.errorFirstName').text('');
                $('.errorEmail').text('');
                $('.errorPassword').text('');
            }
        }
    });
});


// {{--AJAX Function to Add User--}}
var UserCount = 0;

// {{--Add Data from Modal--}}
$(document).on('click', '.add-user-modal', function() {
    // to clear values on fields
    $('#lastname').val('');
    $('#firstname').val('');
    $('#userrole').text('Employee');
    $('#email').val('');
    $('#password').val('');
    $('#status').text('Enabled');
    $('.rs-form-error').addClass('rs-hidden');

    $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Add User");
    $('.deleteUser').hide();
    $('.rs-form').show();
    $('#user-action-btn-modal').addClass('add_user_action_modal');
    $('#user-action-btn-modal').removeClass('edit_user_action_modal');
    $('#user-action-btn-modal').removeClass('edit2_user_action_modal');
    $('#user-action-btn-modal').removeClass('delete_user_action_modal');
    $('.user_action_modal').text("Add User");
    $('#user_modal').modal('show');

});


$('.user-modal-footer').on('click', '.add_user_action_modal', function() {

    $.ajax({
        type: 'POST',
        url: '/addUser',
        data: {
            '_token': $('input[name=_token]').val(),
            'lastName': $('#lastname').val(),
            'firstName': $('#firstname').val(),
            'userRole': $('#userrole').text(),
            'email': $('#email').val(),
            'password': $('#password').val(),
            'status': $('#status').text()
        },
        success: function (data) {
            if ((data.errors)) {
                $('.errorLastName').text('');
                $('.errorFirstName').text('');
                $('.errorEmail').text('');
                $('.errorPassword').text('');

                $('.errorLastName').removeClass('rs-hidden').text(data.errors.lastName);
                $('.errorFirstName').removeClass('rs-hidden').text(data.errors.firstName);
                $('.errorEmail').removeClass('rs-hidden').text(data.errors.email);
                $('.errorPassword').removeClass('rs-hidden').text(data.errors.password);

            } else {
                $('.error').remove();
                $('#showUsers').append("" +
                    "<tr class='item" + data.id + "'>" +
                    "<td class='rs-table-select'>" +
                    "<input type='checkbox' name='chkSelect' id=''>" +
                    "</td>" +
                    "<td>" + data.email + "</td>" +
                    "<td>" + data.firstName + " " + data.lastName + "</td>" +
                    "<td>" + data.userRole + "</td>" +
                    "<td>" + data.status + "</td>" +
                    "<td class='rs-table-action'>" +
                    "<a class='edit-user-modal' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "'>" +
                    "<span class='glyphicon glyphicon-edit'></span>" +
                    "</a> " +
                    "<a class='delete-user-modal' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "'>" +
                    "<span class='glyphicon glyphicon-trash'></span>" +
                    "</a>" +
                    "</td>" +
                    "</tr>");

                $('#user_modal').modal('hide');
                $('.container-message .rs-msg').text('User successfully Added.');
                $('.container-message').removeClass('hidden');
                $('.container-message').removeClass('animated fadeOut');
                $('.container-message').addClass('animated fadeInUp');
                $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $('.container-message').removeClass('animated fadeInUp');
                    $('.container-message').addClass('animated fadeOut');
                });
            }

            UserCount = parseInt($('.user-count').text(), 10);
            UserCount = UserCount + 1;
            $('.user-count').text(UserCount);
            $('.user-count2').text(UserCount);

            // to clear values on fields
            $('#lastname').val('');
            $('#firstname').val('');
            $('#email').val('');
            $('#password').val('');
            $('#userrole').text('Employee');
            $('#status').text('Enabled');


        }
    });
});


// {{--AJAX Function to Delete User--}}
var UserCount = 0;

// {{--Delete Data from Modal--}}
$(document).on('click', '.delete-user-modal', function() {
    $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Delete User");
    $('.deleteUser').show();
    $('.id').text($(this).data('id'));
    $('.user-email').text($(this).data('email'));
    $('.rs-form-error').addClass('rs-hidden');
    $('#user-action-btn-modal').addClass('delete_user_action_modal');
    $('#user-action-btn-modal').removeClass('edit_user_action_modal');
    $('#user-action-btn-modal').removeClass('edit2_user_action_modal');
    $('#user-action-btn-modal').removeClass('add_user_action_modal');
    $('#lastname').val($(this).data('lastname'));
    $('#firstname').val($(this).data('firstname'));
    $('#userrole').text($(this).data('userrole'));
    $('#email').val($(this).data('email'));
    $('#password').val($(this).data('password'));
    $('#status').text($(this).data('status'));
    $('.rs-form').hide();
    $('.user_action_modal').text("Yes, Delete");
    $('#user_modal').modal('show');
});


$('.user-modal-footer').on('click', '.delete_user_action_modal', function() {

    $.ajax({
        type: 'POST',
        url: '/deleteUser',
        data: {
            '_token': $('input[name=_token]').val(),
            'id': $('.id').text()
        },
        success: function(data) {
            $('#showUsers').find('.item' + $('.id').text()).remove();
            $('#user_modal').modal('hide');
            $('.container-message .rs-msg').text('User successfully Deleted.');
            $('.container-message').removeClass('hidden');
            $('.container-message').removeClass('animated fadeOut');
            $('.container-message').addClass('animated fadeInUp');
            $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.container-message').removeClass('animated fadeInUp');
                $('.container-message').addClass('animated fadeOut');
            });

            UserCount = parseInt($('.user-count').text(), 10);
            UserCount = UserCount - 1;
            $('.user-count').text(UserCount);
            $('.user-count2').text(UserCount);
        }
    });
});


// {{--AJAX Function to Edit User--}}

// {{--Edit Data from Modal--}}
$(document).on('click', '.edit2-user-modal', function() {
    $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Edit User");
    $('.deleteUser').hide();
    $('.rs-form').show();
    $('.user_action_modal').text("Save Changes");
    $('.rs-form-error').addClass('rs-hidden');
    $('#user-action-btn-modal').addClass('edit2_user_action_modal');
    $('#user-action-btn-modal').removeClass('edit_user_action_modal');
    $('#user-action-btn-modal').removeClass('add_user_action_modal');
    $('#user-action-btn-modal').removeClass('delete_user_action_modal');

});


$('.user-modal-footer').on('click', '.edit2_user_action_modal', function() {

    $.ajax({
        type: 'POST',
        url: '/editUser',
        data: {
            '_token': $('input[name=_token]').val(),
            'id': $('.id').text(),
            'lastName': $('#lastname').val(),
            'firstName': $('#firstname').val(),
            'userRole': $('#userrole').text(),
            'email': $('#email').val(),
            'password': $('#password').val(),
            'status': $('#status').text()
        },
        success: function (data) {
            if ((data.errors)) {
                $('.errorLastName').text('');
                $('.errorFirstName').text('');
                $('.errorEmail').text('');
                $('.errorPassword').text('');

                $('.errorLastName').removeClass('rs-hidden').text(data.errors.lastName);
                $('.errorFirstName').removeClass('rs-hidden').text(data.errors.firstName);
                $('.errorEmail').removeClass('rs-hidden').text(data.errors.email);
                $('.errorPassword').removeClass('rs-hidden').text(data.errors.password);

            } else {
                $('.item' + data.id).replaceWith("" +
                    "<tr class='item" + data.id + "'>" +
                    "<td class='rs-table-select'>" +
                    "<input type='checkbox' name='chkSelect' id=''>" +
                    "</td>" +
                    "<td>" + data.email + "</td>" +
                    "<td>" + data.firstName + " " + data.lastName + "</td>" +
                    "<td>" + data.userRole + "</td>" +
                    "<td>" + data.status + "</td>" +
                    "<td class='rs-table-action'>" +
                    "<a class='edit-user-modal' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "'>" +
                    "<span class='glyphicon glyphicon-edit'></span>" +
                    "</a> " +
                    "<a class='delete-user-modal' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "'>" +
                    "<span class='glyphicon glyphicon-trash'></span>" +
                    "</a>" +
                    "</td>" +
                    "</tr>");

                $('#user_modal').modal('hide');
                $('.container-message .rs-msg').text('User successfully Updated.');
                $('.container-message').removeClass('hidden');
                $('.container-message').removeClass('animated fadeOut');
                $('.container-message').addClass('animated fadeInUp');
                $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $('.container-message').removeClass('animated fadeInUp');
                    $('.container-message').addClass('animated fadeOut');
                });

                // to clear values on fields
                $('#lastname').val('');
                $('#firstname').val('');
                $('#userrole').text('Employee');
                $('#email').val('');
                $('#password').val('');
                $('#status').text('Enabled');

                $('.errorLastName').text('');
                $('.errorFirstName').text('');
                $('.errorEmail').text('');
                $('.errorPassword').text('');
            }
        }
    });
});

