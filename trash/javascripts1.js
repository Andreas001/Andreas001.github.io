(function($) {
    "use strict";

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 71)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });

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

    $(function (){
        $("#page-about").load("aboutme.html");
    });

    $(function (){
        $("#page-projects").load("projects.html");
    });

    $(function (){
        $("#page-cv").load("cv.html");
    });

    // $(function(){
    //     $("#work").click(function(){
    //         $.ajax({
    //             type: "get",
    //             url: "work.html",
    //             data: "",
    //             dataType: "html",
    //             beforeSend: function() {
    //                 $("#page").html("");
    //             },
    //             success: function (response) {
    //                 $("#page").html(response);
    //             }
    //         });
    //     });

    //     $("#about").click(function(){
    //         $.ajax({
    //             type: "get",
    //             url: "aboutme.html",
    //             data: "",
    //             dataType: "html",
    //             beforeSend: function() {
    //                 $("#page").html("");
    //             },
    //             success: function (response) {
    //                 $("#page").html(response);
    //             }
    //         });
    //     });

    //     $("#cv").click(function(){
    //         $.ajax({
    //             type: "get",
    //             url: "cv.html",
    //             data: "",
    //             dataType: "html",
    //             beforeSend: function() {
    //                 $("#page").html("");
    //             },
    //             success: function (response) {
    //                 $("#page").html(response);
    //             }
    //         });
    //     });
    // });
})(jQuery);