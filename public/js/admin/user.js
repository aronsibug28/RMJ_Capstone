// {{--SCRIPTS--}}

// {{--Menu Toggle Script--}}

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});


var UserId = '';
var lastName = '';
var firstName = '';
var userRole = '';
var email = '';
var password = '';
var status = '';


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
    $('#user-action-btn-modal').removeClass('delete2_user_action_modal');
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

                $('.errorLastName').text('.');
                $('.errorFirstName').text('.');
                $('.errorPassword').text('.');
                $('.errorEmail').text('.');

                if ((data.errors.lastName)) {
                    $('.errorLastName').removeClass('rs-hidden').text(data.errors.lastName);
                }
                if ((data.errors.firstName)) {
                    $('.errorFirstName').removeClass('rs-hidden').text(data.errors.firstName);
                }
                if ((data.errors.email)) {
                    $('.errorEmail').removeClass('rs-hidden').text(data.errors.email);
                }
                if ((data.errors.password)) {
                    $('.errorPassword').removeClass('rs-hidden').text(data.errors.password);
                }

            } else {

                if ($('.rs-showing-total').text() == 'No records found.') {
                    $('.rs-showing-total').html("Showing 1 to <span class='user-count'>0</span> of <span class='user-count2'>0</span> system users.");
                }

                $('.error').remove();
                $('#showUsers').append("" +
                    "<tr class='item" + data.id + "'>" +
                    "<td class='rs-table-select'>" +
                    "<input type='checkbox' name='user-select[]' id='checkbox" + data.id + "' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "' value='" + data.id + "'>" +
                    "<label title='Select User' for='checkbox" + data.id + "'></label>" +
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
                $('.rs-msg-check .rs-check .check').removeClass('hidden');
                $('.rs-msg-check .rs-check .warning').addClass('hidden');
                $('.container-message').removeClass('hidden');
                $('.container-message').removeClass('animated fadeOut');
                $('.container-message').addClass('animated fadeInUp');
                $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $('.container-message').removeClass('animated fadeInUp');
                    $('.container-message').addClass('animated fadeOut');
                });

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
        }
    });
});





// {{--AJAX Function to Edit User--}}

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
    $('#user-action-btn-modal').removeClass('delete2_user_action_modal');
    $('#user_modal').modal('show');

    $('#lastname').val($(this).data('lastname'));
    $('#firstname').val($(this).data('firstname'));
    $('#userrole').text($(this).data('userrole'));
    $('#email').val($(this).data('email'));
    $('#password').val($(this).data('password'));
    $('#status').text($(this).data('status'));

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

                $('.errorLastName').text('.');
                $('.errorFirstName').text('.');
                $('.errorEmail').text('.');
                $('.errorPassword').text('.');

                if ((data.errors.lastName)) {
                    $('.errorLastName').removeClass('rs-hidden').text(data.errors.lastName);
                }
                if ((data.errors.firstName)) {
                    $('.errorFirstName').removeClass('rs-hidden').text(data.errors.firstName);
                }
                if ((data.errors.email)) {
                    $('.errorEmail').removeClass('rs-hidden').text(data.errors.email);
                }
                if ((data.errors.password)) {
                    $('.errorPassword').removeClass('rs-hidden').text(data.errors.password);
                }

            } else {
                $('.item' + data.id).replaceWith("" +
                    "<tr class='item" + data.id + "'>" +
                    "<td class='rs-table-select'>" +
                    "<input type='checkbox' name='user-select[]' id='checkbox" + data.id + "' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "' value='" + data.id + "'>" +
                    "<label title='Select User' for='checkbox" + data.id + "'></label>" +
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

                if (data.lastName != lastName || data.firstName != firstName || data.email != email || data.password != password || data.userRole != userRole || data.status != status) {
                    $('.container-message .rs-msg').text('User successfully Updated.');
                    $('.rs-msg-check .rs-check .check').removeClass('hidden');
                    $('.rs-msg-check .rs-check .warning').addClass('hidden');
                    $('.container-message').removeClass('hidden');
                    $('.container-message').removeClass('animated fadeOut');
                    $('.container-message').addClass('animated fadeInUp');
                    $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $('.container-message').removeClass('animated fadeInUp');
                        $('.container-message').addClass('animated fadeOut');
                    });
                }

                // to clear values on fields
                $('#lastname').val('');
                $('#firstname').val('');
                $('#userrole').text('Employee');
                $('#email').val('');
                $('#password').val('');
                $('#status').text('Enabled');

                $('.errorLastName').text('.');
                $('.errorFirstName').text('.');
                $('.errorEmail').text('.');
                $('.errorPassword').text('.');
            }
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
    $('#user-action-btn-modal').removeClass('delete2_user_action_modal');
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

                $('.errorLastName').text('.');
                $('.errorFirstName').text('.');
                $('.errorEmail').text('.');
                $('.errorPassword').text('.');

                if ((data.errors.lastName)) {
                    $('.errorLastName').removeClass('rs-hidden').text(data.errors.lastName);
                }
                if ((data.errors.firstName)) {
                    $('.errorFirstName').removeClass('rs-hidden').text(data.errors.firstName);
                }
                if ((data.errors.email)) {
                    $('.errorEmail').removeClass('rs-hidden').text(data.errors.email);
                }
                if ((data.errors.password)) {
                    $('.errorPassword').removeClass('rs-hidden').text(data.errors.password);
                }

            } else {
                $('.item' + data.id).replaceWith("" +
                    "<tr class='item" + data.id + "'>" +
                    "<td class='rs-table-select'>" +
                    "<input type='checkbox' name='user-select[]' id='checkbox" + data.id + "' data-id='" + data.id + "' data-email='" + data.email + "' data-lastname='" + data.lastName + "' data-firstname='" + data.firstName + "' data-userrole='" + data.userRole + "' data-password='" + data.password + "' data-status='" + data.status + "' value='" + data.id + "'>" +
                    "<label title='Select User' for='checkbox" + data.id + "'></label>" +
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

                if (data.lastName != lastName || data.firstName != firstName || data.email != email || data.password != password || data.userRole != userRole || data.status != status) {
                    $('.container-message .rs-msg').text('User successfully Updated.');
                    $('.rs-msg-check .rs-check .check').removeClass('hidden');
                    $('.rs-msg-check .rs-check .warning').addClass('hidden');
                    $('.container-message').removeClass('hidden');
                    $('.container-message').removeClass('animated fadeOut');
                    $('.container-message').addClass('animated fadeInUp');
                    $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                        $('.container-message').removeClass('animated fadeInUp');
                        $('.container-message').addClass('animated fadeOut');
                    });
                }

                // to clear values on fields
                $('#lastname').val('');
                $('#firstname').val('');
                $('#userrole').text('Employee');
                $('#email').val('');
                $('#password').val('');
                $('#status').text('Enabled');

                $('.errorLastName').text('.');
                $('.errorFirstName').text('.');
                $('.errorEmail').text('.');
                $('.errorPassword').text('.');
            }
        }
    });
});




// Select All Users
$('#user-select-all').click(function(e){
    var table = $(e.target).closest('table');
    $('td input:checkbox',table).prop('checked',this.checked);
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
    $('#user-action-btn-modal').removeClass('delete2_user_action_modal');
    $('#lastname').val($(this).data('lastname'));
    $('#firstname').val($(this).data('firstname'));
    $('#userrole').text($(this).data('userrole'));
    $('#email').val($(this).data('email'));
    $('#password').val($(this).data('password'));
    $('#status').text($(this).data('status'));
    $('.rs-form').hide();
    $('.user_action_modal').text("Yes, Delete");
    $('#user_modal').modal('show');

    lastName = $('#lastname').val();
    firstName = $('#firstname').val();
    email = $('#email').val();
    password = $('#password').val();
    status = $('#status').text();
    userRole = $('#userrole').text();
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
            $('.rs-msg-check .rs-check .check').removeClass('hidden');
            $('.rs-msg-check .rs-check .warning').addClass('hidden');
            $('.container-message').removeClass('hidden');
            $('.container-message').removeClass('animated fadeOut');
            $('.container-message').addClass('animated fadeInUp');
            $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.container-message').removeClass('animated fadeInUp');
                $('.container-message').addClass('animated fadeOut');
            });

            UserCount = parseInt($('.user-count').text(), 10);
            UserCount = UserCount - 1;

            if (UserCount <= 0) {
                $('.rs-showing-total').text('No records found.');
            }

            $('.user-count').text(UserCount);
            $('.user-count2').text(UserCount);
        }
    });
});





// Multiple Delete Users
// {{--Delete Data from Modal--}}
$(document).on('click', '#delete', function() {
    var idCount = 0, i = 0;
    var id = $('input:checked').map(function(){
        return $(this).val();
    }).get();

    idCount = id.length;

    if($('tbody tr td input').is(':checked')) {
        $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Delete User");
        $('.deleteUser').show();
        $('.id').text($('#checkbox' + id ).data('id'));
        $('.user-email').text($('#checkbox' + id ).data('email'));
        $('.rs-form-error').addClass('rs-hidden');
        $('#user-action-btn-modal').addClass('delete2_user_action_modal');
        $('#user-action-btn-modal').removeClass('delete_user_action_modal');
        $('#user-action-btn-modal').removeClass('edit_user_action_modal');
        $('#user-action-btn-modal').removeClass('edit2_user_action_modal');
        $('#user-action-btn-modal').removeClass('add_user_action_modal');
        $('#email').val($('#checkbox' + id ).data('email'));
        $('#lastname').val($('#checkbox' + id ).data('lastname'));
        $('#firstname').val($('#checkbox' + id ).data('firstname'));
        $('#userrole').text($('#checkbox' + id ).data('userrole'));
        $('#password').val($('#checkbox' + id ).data('password'));
        $('#status').text($('#checkbox' + id ).data('status'));

        lastName = $('#lastname').val();
        firstName = $('#firstname').val();
        email = $('#email').val();
        password = $('#password').val();
        status = $('#status').text();
        userRole = $('#userrole').text();

        $('.rs-navbar-brand').text(lastName + ' $ ' + id + ' $ ' + firstName);

        $('.delete-msg').html("Are you sure you want to delete <a class='edit2-user-modal'>" + $('#email').val() + "'s</a> account?");
        $('.user_action_modal').text("Yes, Delete");
        $('.rs-form').hide();
        $('#user_modal').modal('show');

        if (idCount > 1) {
            $('.modal-title').html("<span class='glyphicon glyphicon-user'></span> Delete Users");
            $('.delete-msg').text('You are deleting more than 1 user, do you want to continue?');
            $('.user_action_modal').text("Yes, Continue");
        }


    } else {
        $('.container-message .rs-msg').text('Please select user to delete');
        $('.rs-msg-check .rs-check .warning').removeClass('hidden');
        $('.rs-msg-check .rs-check .check').addClass('hidden');
        $('.container-message').css('background-color', 'rgba(255, 0, 6, 0.86)');
        $('.container-message').removeClass('hidden');
        $('.container-message').removeClass('animated fadeOut');
        $('.container-message').addClass('animated fadeInUp');
        $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.container-message').removeClass('animated fadeInUp');
            $('.container-message').addClass('animated fadeOut');
        });
    }
});


$('.user-modal-footer').on('click', '.delete2_user_action_modal', function() {

    var idCount = 0, i = 0;
    var id = $('input:checked').map(function(){
        return $(this).val();
    }).get();

    idCount = id.length;

    $.ajax({
        type: 'POST',
        url: '/deleteUsers',
        data: {
            '_token': $('input[name=_token]').val(),
            id : id
        },
        success: function(data) {

            UserCount = parseInt($('.user-count').text(), 10);

            for (i=0; i<idCount; i++) {
                $('#showUsers').find('.item' + id[i]).remove();
                UserCount = UserCount - 1;

                if (UserCount <= 0) {
                    $('.rs-showing-total').text('No records found.');
                }
            }

            $('#user_modal').modal('hide');
            $('.container-message .rs-msg').text('User(s) successfully Deleted.');
            $('.rs-msg-check .rs-check .check').removeClass('hidden');
            $('.rs-msg-check .rs-check .warning').addClass('hidden');
            $('.container-message').css('background-color', 'rgba(8, 126, 0, 0.86)');
            $('.container-message').removeClass('hidden');
            $('.container-message').removeClass('animated fadeOut');
            $('.container-message').addClass('animated fadeInUp');
            $('.container-message').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.container-message').removeClass('animated fadeInUp');
                $('.container-message').addClass('animated fadeOut');
            });

            $('.user-count').text(UserCount);
            $('.user-count2').text(UserCount);

        }
    });

});



// Search User
function removeHighlighting(highlightedElements){
    highlightedElements.each(function(){
        var element = $(this);
        element.replaceWith(element.html());
    })
}

function addHighlighting(element, textToHighlight){
    var text = element.text();
    var highlightedText = '<em class="highlight">' + textToHighlight + '</em>';
    var newText = text.replace(textToHighlight, highlightedText);

    element.html(newText);
}
//
// $(".table-search").on("keyup", function() {
//     var value = $(this).val();
//
//     removeHighlighting($("table tbody tr em"));
//
//     $("table tbody tr").each(function(index) {
//         $row = $(this);
//
//         var $tdElement = $row.find("td:nth-child(2)");
//         var id = $tdElement.text();
//         var matchedIndex = id.indexOf(value);
//
//         if (matchedIndex != 0) {
//             $row.hide();
//         }
//         else {
//             addHighlighting($tdElement, value);
//             $row.show();
//         }
//     });
// });


$(".table-search").keyup(function () {
    var value = this.value.toLowerCase().trim();
    var userCount = 0;

    $("table tbody tr").each(function (index) {
        $(this).find("td").each(function () {
            var id = $(this).text().toLowerCase().trim();
            var not_found = (id.indexOf(value) == -1);
            $(this).closest('tr').toggle(!not_found);

            if(!not_found) {
                userCount = userCount + 1;
            }

            return not_found;
        });

    });
    $('.rs-showing .user-count').text(userCount);
    $('.rs-showing .user-count2').text(userCount);
    $('.rs-pagination').removeClass('hidden');

    if (userCount == 0) {
        $('.rs-showing-total').text('No Records found.');
        $('.rs-showing').css('padding-bottom','10px');
        $('.rs-pagination').addClass('hidden');
    } else {
        $('.rs-showing-total').text('Showing 1 to ' + userCount + ' of ' + userCount + ' system users.');
    }
});