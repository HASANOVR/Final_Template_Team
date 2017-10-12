new WOW().init();
$(document).ready(function () {

    // Home page



    // Contant page




    // About page
    // Accordion elements
    $("#accordion h3").next().hide();
    $("#accordion .active").next().show();
    $("#accordion .active").css("border-bottom", "1px solid #25d25e");
    $("#accordion h3").click(function () {
        if ($(this).next().is(':visible')) {
            $(this).next().hide("slow");
            $(this).css("border-bottom", "1px solid #DDDDDD");
            $(this).removeClass("minus");
            $(this).addClass("plus");
        }
        else {
            $("#accordion h3").next().hide("slow");
            $("#accordion h3").css("border-bottom", "1px solid #DDDDDD");
            $("#accordion h3").removeClass("minus");
            $(this).next().show("slow");
            $(this).css("border-bottom", "1px solid #25d25e");
            $(this).addClass("minus");
        }
    });

    //Counter element

    //Team members

    $("#teamMembers .mouseInOut").mouseover(function () {
        $(this).find("#cover").addClass("cover"),
            $(this).find("#info_first").css("display", "block")
    });
    $("#teamMembers .mouseInOut").mouseout(function () {
        $(this).find("#cover").removeClass("cover"),
            $(this).find("#info_first").css("display", "none")
    });

    $("#teamMembers .mouseInOut").mouseover(function () {
        $(this).find("#cover").addClass("cover"),
            $(this).find("#info_first").css("display", "block")
    });


    // Services page


});














//Counter element

var countStart = 0;
function count_er() {
    countStart = countStart + 0.1;
    var n = countStart.toFixed(2);
    $('#countt').text(n);

}

var top1 = $("#counter").position().top;
function top2() {
    var top2In = $(window).scrollTop();
    return top2In;
}
setInterval("top2()", 1);


function setInt() {
    if (top1 <= (top2() + 650)) {
        var inter = setInterval("count_er()", 1000);
    }
    else {
        clearInterval(inter);
    }
}
// var interVal = setInterval("setInt()", 1);

// if (countStart >= 25) {
//     console.log(countStart);
//     clearInterval(inter);
// }