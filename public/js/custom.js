
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


// TOOLTIP
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('.rs-submenu-header-buttons #search').hover(function () {
        $('.rs-tooltip-search').removeClass('hidden');
    }, function () {
        $('.rs-tooltip-search').addClass('hidden');
    });

    $('.rs-submenu-header-buttons #search').click(function () {
        $('.rs-table-search').removeClass('fadeOutRight');
        $('.rs-table-search').removeClass('fadeInRight');
        $('.rs-table-search').addClass('fadeInRight');
        $('.rs-table-search').removeClass('hidden');
        $('.table-search').focus();
    });

    $('.table-search').focusout(function () {

        if (!$('.table-search').val().length > 0) {
            $('.rs-table-search').addClass('hidden');
        }
    });

    $('.rs-submenu-header-buttons #add').hover(function () {
        $('.rs-tooltip-add').removeClass('hidden');
    }, function () {
        $('.rs-tooltip-add').addClass('hidden');
    });

    $('.rs-submenu-header-buttons #delete').hover(function () {
        $('.rs-tooltip-delete').removeClass('hidden');
    }, function () {
        $('.rs-tooltip-delete').addClass('hidden');
    });

    $('.rs-submenu-header-buttons #filter').hover(function () {
        $('.rs-tooltip-filter').removeClass('hidden');
    }, function () {
        $('.rs-tooltip-filter').addClass('hidden');
    });

    $('.rs-submenu-header-buttons #bookmark').hover(function () {
        $('.rs-tooltip-bookmark').removeClass('hidden');
    }, function () {
        $('.rs-tooltip-bookmark').addClass('hidden');
    });

});

