$(document).ready(function() {
    var timer;
    $(".topMenu").mouseenter(function() {
        timer = setTimeout(function() {
            $(".dep02").not(":animated")
            .slideDown(500)
        }, 300);
    })
    $(".dep01").mouseleave(function() {
        clearTimeout(timer);
        $(".dep02")
        .slideUp(500)
    });
});


// $(document).on('mouseover', '.topMenu span', function () {
//     $('.dept02').slideDown(200);
// });
// $(document).on('mouseover', 'div', function () {
//     if (!$(this).hasClass('topMenu')) {
//         $('.dept02').slideUp(200);
//     }
// });