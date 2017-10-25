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
$(".block .slides img:first-child").addClass("leftEdge");
$(".block .slides img:last-child").addClass("rightEdge");
slides = $(".block .slider .slides img");
middlePoint = Math.round(slides.length / 2);

function slide() {
    var steps = middlePoint - ($(this).index() + 1);
    console.log($(this).index());
    console.log(($(".slider").css("width").slice(0, -2) / 2 - $(".slides").css("width").slice(0, -2) / 2) + "px");

    if (steps > 0) {
        if ($(this).hasClass("leftEdge")) {
            $(".block .slides").css("left", ($(".slider").css("width").slice(0, -2) / 2 - $(".slides").css("width").slice(0, -2) / 2 - 14.496) + "px");
        }
        $(".block .slides").animate({
            left: "+=" + (14.496 * steps) + "%"
        }, 400);
        middlePoint = $(this).index() + 1;
    } else {
        $(".block .slides").animate({
            left: "+=" + (14.496 * steps) + "%"
        }, 400, );
        middlePoint = $(this).index() + 1;
    }
}
$(".block .slider .slides img").on('click', slide);

// /|\
//  |
// slider magic
