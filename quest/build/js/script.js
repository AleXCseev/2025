var landingFunctions = {
  init: function () {
    this.initLibraries();
  },

  initLibraries: function () {
    $('[href*="#"]').on("click", function (e) {
      var fixedOffset = 0;

      $("html, body")
        .stop()
        .animate({ scrollTop: $(this.hash).offset().top + fixedOffset }, 1000);
      e.preventDefault();
    });

    AOS.init({
      disable: function () {
        if ($(window).width() <= 1080) {
          return true;
        }
        return false;
      },
      once: true,
      duration: 1000,
      offset: 0,
    });

    $(window).resize(function () {
      AOS.refresh();
    });

    $("[data-fancybox]").fancybox({
      loop: true,
      infobar: false,
      animationEffect: false,
      backFocus: false,
      hash: false,
    });
  },
};

$(document).ready(function () {
  landingFunctions.init();
});
