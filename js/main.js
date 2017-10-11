$(document).ready(function(){
    $("#container").fadeIn(2000).css("display","flex");
});

function right () {
    $(".block .slides img:nth-child(5)").on('click', function () {
        $(".block .slides").fadeOut(300,function () {
            $(".block .slides img:nth-child(1)").appendTo($(".block .slides"));
            $(".block .slides").fadeIn(300,right());
        })
            console.log(1);
});
};
right();
