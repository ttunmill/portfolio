$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        center:true,
        responsiveClass:true, 
        responsive:{ 
            0:{ items:1 }, 
            600:{ items:2 }, 
            1000:{ items:4 } 
        }
        
    });
    var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
});