$(function(){
    $(".nav_menu li").click(function(){
        $('ul:first',this).show();
    }, function(){
        $('ul:first',this).hide();
    });
    $(".nav_menu>li:has(ul)>a").each( function() {
        $(this).html( $(this).html()+' &or;' );
    });
    $(".nav_menu ul li:has(ul)")
        .find("a:first")
        .append("<p style='float:right;margin:-3px'>&#9656;</p>");
});