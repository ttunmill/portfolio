$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        loop:true,
        dots:false,
        center:true,
        margin:50,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsiveClass:true, 
        responsive:{ 
            0:{ items:2 }, 
            768:{ items:4 }, 
            1024:{ items:6 } 
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