$(window).load(function() {


  /*-------------------------------------------
    Title
    -------------------------------------------*/

  // Notes...

  skrollr.init({
    forceHeight: false,
  easing: {
    vibrate: function(p) {
               return Math.sin(p * 10 * Math.PI);
             }
  }

  });


});
