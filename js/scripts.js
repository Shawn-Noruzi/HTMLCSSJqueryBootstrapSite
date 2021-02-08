$(document).ready(function ($) {
  Pace.on("done", function () {
    $(".pre_loader").css("display", "none");
  });

  $(".hero_title").each(function (i) {
    var $current_element = $(this);
    setTimeout(function () {
      $current_element.addClass("reveal");
    }, i * 100);
  });

  $("#rotating-text").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "bounceIn",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 3000,
    complete: function () {
      // Called after the entrance animation is executed.
    },
  });

  $(".owl-carousel").owlCarousel({
      items: 1,
      loop:true,
      margin:0,
      autoplay:true,
      autplayTimeout:3000,
      autoplayHoverPause:false,
      animateOut:'fadeOut'
  });
});
