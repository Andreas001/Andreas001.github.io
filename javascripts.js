// Collapse Navbar
var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
    } else {
        $("#mainNav").removeClass("navbar-shrink");
    }
};
navbarCollapse();
$(window).scroll(navbarCollapse);

// Load work.html first
$(function (){
    $("#page").load("aboutme.html");
});

$(function(){
    $("#work").click(function(){
        $.ajax({
            type: "get",
            url: "work.html",
            data: "",
            dataType: "html",
            beforeSend: function() {
                $("#page").html("");
            },
            success: function (response) {
                $("#page").html(response);
            }
        });
    });

    $("#about").click(function(){
        $.ajax({
            type: "get",
            url: "aboutme.html",
            data: "",
            dataType: "html",
            beforeSend: function() {
                $("#page").html("");
            },
            success: function (response) {
                $("#page").html(response);
            }
        });
    });

    $("#cv").click(function(){
        $.ajax({
            type: "get",
            url: "cv.html",
            data: "",
            dataType: "html",
            beforeSend: function() {
                $("#page").html("");
            },
            success: function (response) {
                $("#page").html(response);
            }
        });
    });
});