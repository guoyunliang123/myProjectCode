$(function(){
    //用左右来控制幻灯片
    $(".prev-slide").on('click', function(){
        $('#slideshow').carousel('prev');
    });
    $(".next-slide").on('click', function(){
        $('#slideshow').carousel('next');
    });

    //用暂停或者开始来控制幻灯片
    var play = false;
    $(".play-and-stop").click(
        function(){
            if(!play){
                $("#slideshow").carousel("cycle");
                $(this).children("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
            }else{
                $("#slideshow").carousel("pause");
                $(this).children("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
            }
            play = !play;
        }
    );

    
    //用键盘上的左右按钮控制幻灯片
    $(document).on("keydown", function(e){
        console.log(e.which);
        switch(e.which){
            case 37:
                $('#slideshow').carousel('prev');
                break;
            case 39:
                $('#slideshow').carousel('next');
        }
    });

});