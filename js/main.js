$(document).ready(function () {
    $("#container").fadeIn(2000).css("display", "flex");
});

// slider magic
//    |
//   \|/
var slides = $(".block .slider .slides img");
var middlePoint = slides.length / 2 | 0;
slides.slice(0, slides.length - 1).clone().appendTo($(".block .slider .slides"));
slides.slice(1, slides.length).clone().prependTo($(".block .slider .slides"));
slides = $(".block .slider .slides img");
middlePoint = Math.round(slides.length / 2);
var steps = 0;
//function slide() {
//    console.log(middlePoint);
//    var steps = middlePoint - ($(this).index() + 1);
////    console.log(steps);
//    middlePoint = ($(this).index()+1);
//    if (steps > 0) {
////        if ($(this).hasClass("leftEdge")) {
////            $(".block .slides").css("left", (-100-16.11)+"%");
////        }
//        switch($(this).index()){
//            case 0 :
//                $(".block .slides").css("left", "-"+116.11+"%");
//                middlePoint = 8;
//                break;
//            case 1 :
//                $(".block .slides").css("left", "-"+132.22+"%");
//                middlePoint = 9;
//                debugger;
//                break;
//            case 2 :
//                $(".block .slides").css("left", "-"+148.33+"%");
//                middlePoint = 10;
//                break;
//        }
//        $(".block .slides").animate({
//            left: "+=" + (16.11 * steps) + "%"
//        }, 400);
//    } else {
//        if ($(this).hasClass("rightEdge")) {
//            $(".block .slides").css("left", (-100+16.11)+"%");
//        }
//        $(".block .slides").animate({
//            left: "+=" + (16.11 * steps) + "%"
//        }, 400, );
//    }
//}
function slideLeft() {
    $(".block .controlls .left").off();
    if(steps == 6){
        $(".block .slides").css("left", (-100-16.11)+"%");
        steps = -1;
    }
    $(".block .slides").animate({left:"+=16.11%"},function(){$(".block .controlls .left").on('click', slideLeft);});
    steps+=1;
    console.log(steps);
}
function slideRight() {
    $(".block .controlls .right").off();
    if(steps == -6){
        $(".block .slides").css("left", (-100+16.11)+"%");
        steps = 1;
    }
    $(".block .slides").animate({left:"-=16.11%"},function(){$(".block .controlls .right").on('click', slideRight);});
    steps-=1;
    console.log(steps);
}
$(".block .controlls .left").on('click', slideLeft);
$(".block .controlls .right").on('click', slideRight);

// /|\
//  |
// slider magic
