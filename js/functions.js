// Browser detection for when you get desparate.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

(function($) {

  $(document).ready(function () {


    /*-------------------------------------------
      Smooth Scrolling
      -------------------------------------------*/

    // Miscellaneous calls to make scrolling smooth.


    $(function(){

      $(".mission a, .comments-link").bind("click", function (event) {

        event.preventDefault ? event.preventDefault() : event.returnValue = false;

        var target = $(this).attr("href");

        $("html, body").stop().animate({

          scrollLeft: $(target).offset().left,
          scrollTop: $(target).offset().top

        }, 600, function() {

          $("body").addClass("fixed");

        });

      });

    });


    /*-------------------------------------------
      Welcome Message
      -------------------------------------------*/

    // This sets the height for the mission statement on the home page.


    $("#welcome").css({"height":(($(window).height()))+"px"});


    /*-------------------------------------------
      Nav Toggle
      -------------------------------------------*/

    // Notes...


    $("nav").find(".toggle").click(function(event) {

      $("nav").toggleClass("active");

    });

    $("nav").find("a").click(function(event) {

      $("nav").removeClass("active");

    });


    /*-------------------------------------------
      Project Toggle
      -------------------------------------------*/

    // Notes...


    $(".project").find(".toggle").click(function(event) {

      $(this).parent().toggleClass("active");

    });


    /*-------------------------------------------
      Comments Toggle
      -------------------------------------------*/

    // Notes...


    $(".comments-wrap").hide();

    $("#comments-list").find(".toggle").click(function() {

      $(this).toggleClass("active");

      $(".comments-wrap").slideToggle("fast");

    });


  });

  $(window).load(function() {


    /*-------------------------------------------
      Project Slides
      -------------------------------------------*/

    // Notes...

    /* $(".flexslider").flexslider({

       animation: "slide",
       slideshow: false,
       controlNav: false,
       touch: false

       }); */


  });

  $(window).resize(function() {


    /*-------------------------------------------
      Welcome Message
      -------------------------------------------*/

    // If the browser height changes, this will work on matching it.


    $("#welcome").css({"height":(($(window).height()))+"px"});


  });

})(window.jQuery);
