
// Dropdown - Show Function in table
$(document).ready(function () {
    $('#show10').click(function () {
        $('#showDropdown').html('10 <span class="caret"></span>');
    });

    $('#show25').click(function () {
        $('#showDropdown').html('25 <span class="caret"></span>');
    });

    $('#show50').click(function () {
        $('#showDropdown').html('50 <span class="caret"></span>');
    });

    $('#show100').click(function () {
        $('#showDropdown').html('100 <span class="caret"></span>');
    });

    $('#showAll').click(function () {
        $('#showDropdown').html('All <span class="caret"></span>');
    });
});



$(document).ready(function () {
    $('#statusEnable').click(function () {
        $('#status').text('Enabled');
    });
    $('#statusDisable').click(function () {
        $('#status').text('Disabled');
    });
});

