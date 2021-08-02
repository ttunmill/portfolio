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
            // 0:{ items:1 }, 
            // 768:{ items:2 }, 
            // 1200:{ items:4 } 
        }
        
    });
});