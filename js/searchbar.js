$(document).ready(function () {
    var pageNum = 1;

    $("#search").click(function () {
        $("#result").html("");

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: $("#query").val(), page: pageNum},
            headers: {Authorization: "KakaoAK 6586979b229ca222b573cc00bad1d21c"} // ########부분에 본인의 REST API 키를 넣어주세요.

        })
        .done(function (msg) {
            console.log(msg);
            for (var i = 0; i < 10; i++){
                $("#result").append("<div class='books'>"
                + "<h2><a href='"+ msg.documents[i].url +"'>" + msg.documents[i].title + "</a></h2>"
                + "<strong>저자:</strong> " + msg.documents[i].authors + "<br>"
                + "<strong>출판사:</strong> " + msg.documents[i].publisher + "<br>"
                + "<img src='" + msg.documents[i].thumbnail + "'/><br>" 
                + "</div>");
            }
        });
    })

    $(window).scroll(function(){  

        if ( Math.ceil($(window).scrollTop()) + $(window).height() >= $(document).height() ){
            pageNum++;


            $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query: $("#query").val(),  page: pageNum},
                headers: {Authorization: "KakaoAK 6586979b229ca222b573cc00bad1d21c"} // ########부분에 본인의 REST API 키를 넣어주세요.

            })
            .done(function (msg) {
                console.log(msg);
                for (var i = 0; i < 10; i++){
                    $("#result").append("<div class='books'>"
                    + "<h2><a href='"+ msg.documents[i].url +"'>" + msg.documents[i].title + "</a></h2>"
                    + "<strong>저자:</strong> " + msg.documents[i].authors + "<br>"
                    + "<strong>출판사:</strong> " + msg.documents[i].publisher + "<br>"
                    + "<img src='" + msg.documents[i].thumbnail + "'/><br>" 
                    + "</div>");
    
                }
            });

            
        }
    })

    $("#query").keydown(function(keyNum) {
        if(keyNum.keyCode == 13) {
            $("#search").click()
        }
    });
});