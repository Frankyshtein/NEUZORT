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
var steps = 0;
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
