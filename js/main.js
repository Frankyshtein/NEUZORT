$(document).ready(function () {
    $("#container").fadeIn(2000).css("display", "flex");
});

function right() {
    $(".block .slides img:nth-child(5)").on('click', function () {
        $(".block .slides img:nth-child(4)").css("box-shadow", "2px 2px 4px rgba( 0, 0, 0, 0.5 )");
        for (i = 0; i < 1; i++) {
            switch (i) {
                case 0:
                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
                        marginLeft: "-28.5%"
                    }, 100,function(){$(".block .slides img:nth-child(1)").appendTo(".block .slides");});
                    console.log(i);
                    break;
                case 1:
                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
                        marginLeft: "-28.5%"
                    }, 100);
                    console.log(i);
                    break;
                case 2:
                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
                        marginLeft: "-28.5%"
                    }, 100);
                    console.log(i);
                    break;
                case 3:
                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
                        marginLeft: "-28.5%",
                        marginBottom: "-4%"
                    }, 100);
                    console.log(i);
                    break;
                case 4:
                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
                        marginLeft: "-28.5%",
                        marginBottom:"0"
                    }, 100).css("box-shadow", "none");
                    console.log(i);
                    break;
                case 5:
                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
                        marginLeft: "-28.5%"
                    }, 100);
                    console.log(i);
                    break;
                case 6:
                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
                        marginLeft: "-28.5%"
                    }, 100);
                    console.log(i);
                    break;
            }
        }
//        $(".block .slides img:nth-child(1)").appendTo(".block .slides");
        $(".block .slides img").animate({marginLeft:"0"},1);
    });
};
right();
