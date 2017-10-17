$(document).ready(function () {
    $("#container").fadeIn(2000).css("display", "flex");
});
// first atempt

////$(".block .slides img:nth-child(1)").clone().appendTo(".block .slides").css("margin-right","-14.3%");
//function right() {
//    $(".block .slides img:nth-child(5)").on('click', function () {
//        $(".block .slides img:nth-child(4)").css("box-shadow", "2px 2px 4px rgba( 0, 0, 0, 0.5 )");
//        for (i = 0; i < 2; i++) {
//            switch (i) {
//                case 0:
//                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
//                        marginLeft: "-14.3%"
//                    }, 100);
//                    console.log(i);
//                    break;
//                case 1:
//                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
//                        marginLeft: "-28.5%"
//                    }, 1000);
//                    console.log(i);
//                    break;
//                case 2:
//                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
//                        marginLeft: "-28.5%"
//                    }, 1000);
//                    console.log(i);
//                    break;
//                case 3:
//                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
//                        marginLeft: "-28.5%",
//                        marginBottom: "-4%"
//                    }, 1000);
//                    console.log(i);
//                    break;
//                case 4:
//                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
//                        marginLeft: "-28.5%",
//                        marginBottom:"0"
//                    }, 1000).css("box-shadow", "none");
//                    console.log(i);
//                    break;
//                case 5:
//                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
//                        marginLeft: "-28.5%"
//                    }, 1000);
//                    console.log(i);
//                    break;
//                case 6:
//                    $(".block .slides img:nth-child(" + (i + 1) + ")").animate({
//                        marginLeft: "-28.5%"
//                    }, 1000);
//                    console.log(i);
//                    break;
//            }
//        }
////        $(".block .slides img:nth-child(1)").appendTo(".block .slides");
////        $(".block .slides img").animate({marginLeft:"0"},1000);
//    });
//};
//right();


//var a = $(".block .slides img");
////$(".block .slides img").on('click',function(){console.log($(this).index())})
//
//function slideLeft() {
//    var b = $(this).index() - (a.length/2 | 0);
//    for(i=0;i<b;i++){
//        for(j=0;j<a.length;j++){
//
//        }
//    }
//}
//
//$(".block .slides img").on('click',slideLeft);

function slideLeft() {
    $(".block .slides img:nth-child(6)").on('click',function(){
        $(".block .slides img:nth-child(4)").animate({opacity:"0"},400);
        $(".block .slides img:nth-child(6)").animate({opacity:"0"},400,function(){
            $(".block .slides img:nth-child(6)").clone().insertAfter($(".block .slides img:nth-child(4)"));
            $(".block .slides img:nth-child(7)").replaceWith($(".block .slides img:nth-child(4)"));
            $(".block .slides img:nth-child(6)").animate({opacity:"1"},400);
            $(".block .slides img:nth-child(4)").animate({opacity:"1    "},400);
            slideLeft();
        });

    })
}
slideLeft();
