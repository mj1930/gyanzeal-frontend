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