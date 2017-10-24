$(document).ready(function () {
    $("#container").fadeIn(2000).css("display", "flex");
});

// slider magic
//    |
//   \|/
var slides = $(".block .slider .slides img");
var middlePoint = slides.length / 2 | 0;
slides.slice(0, middlePoint).clone().appendTo($(".block .slider .slides"));
slides.slice(middlePoint + 1, slides.length).clone().prependTo($(".block .slider .slides"));
slides = $(".block .slider .slides img");
middlePoint = slides.length / 2 | 0;
$(".block .slides img:nth("+middlePoint+")").clone().appendTo($(".block .slider .slides"));
$(".block .slides img:nth("+middlePoint+")").clone().prependTo($(".block .slider .slides"));
slides = $(".block .slider .slides img");
middlePoint = slides.length / 2 | 0;
console.log(middlePoint);
$(".block .slides img:nth-child(" + (middlePoint + 1) + ")").css("box-shadow", "none");

function slide() {
    slides = $(".block .slider .slides img");
    middlePoint = Math.round(slides.length / 2);
    var steps = middlePoint - $(this).index()-1;
    console.log(steps);
    if (steps > 0) {
        $(".block .slides").animate({
            left: (-50+15.84 * steps) + "%"
        }, 400,function(){
            slides.slice(slides.length-steps,slides.length).prependTo($(".block .slider .slides"));
            $(".block .slides").css("left","-50%");
        });
        console.log(slides.slice(slides.length-steps,slides.length));
    }else {
        $(".block .slides").animate({left: (-50+15.84 * steps) + "%"}, 400,function(){
            slides.slice(0,-steps).appendTo($(".block .slider .slides"));
            $(".block .slides").css("left","-50%");
        });
    }
//    $(".block .slides img:nth-child(" + middlePoint + ")").css("box-shadow", "none");
}
$(".block .slider .slides img").on('click', slide);

// /|\
//  |
// slider magic
