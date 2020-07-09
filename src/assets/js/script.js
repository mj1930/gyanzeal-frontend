// Preloader
window.onload = function(){
    document.querySelector('.dom-loader').style.display = 'none';
};

// Swap Text
var textSwapper = ['Learners', 'Scholars', 'Beginners', 'Trainee', 'Students'];
var count = 1;

setInterval( function(){
    $('.swap').fadeOut(function(){
        $(this).text(textSwapper[count]).fadeIn();
    });
    count++;
    if(count == textSwapper.length){
        count = 0;
    }
}, 1800 );
// Drop Down Submenu
$('.dropdown-menu').on('click', function(){
    e.stopPropagation();

    // if ($(window).width() < 992) {
    //     $('.dropdown-menu a').on('click', function(){
    //         e.preventDefault();
    //         if($(this).next('.submenu').length){
    //             $(this).next('.submenu').toggle();
    //         }

    //         // $('.dropdown').on('hide.bs.dropdown', function () {
    //         //     $(this).find('.submenu').hide();
    //         // });
    //     });
    // }
});


$(document).ready(function(){
    $('.left-btn').on('click', function(){
        $('.left-btn').removeClass('primary-color-dark text-white');
        $('.left-btn').addClass('bg-white');
        $(this).addClass('primary-color-dark text-white');
        $(this).removeClass('bg-white');

        var id = $(this).attr('id');
        if(!$('.default-view').hasClass('d-none')){
            $('.default-view').addClass('d-none');
        }

        $('.right-element').addClass('d-none');
        $('.' + id).removeClass('d-none');
    });


    $('.enroll-new-course').on('click', function(){
        $('#ec').click();
    });

    $('#prog').on('click', function(){
        $('.schedule').addClass('d-none');
        $('.progess').removeClass('d-none');
    })

    $('#sch').on('click', function(){
        $('.progess').addClass('d-none');
        $('.schedule').removeClass('d-none');
    })
});
