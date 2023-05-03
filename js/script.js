// jQuery

/*--------preloader--------*/

$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(400).fadeOut("slow");
});

/*--------Team Section--------*/
$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-angle-left" style="color: #750000; font-size: 20px; padding-right: 10px;"></i>',
      '<i class="fa-solid fa-angle-right" style="color: #750000; font-size: 20px; padding-left: 10px;"></i>',
    ],
  });
});

// Responsive Tabs

$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

// Portfolio
$(window).on("load", function () {
  // Initialize Isotope
  $("#isotope-container").isotope({});

  // Filter items on button click
  $("#isotope-filters").on("click", "button", function () {
    // get filet value
    var filtervalue = $(this).attr("data-filter");

    // filter portfolio items
    $("#isotope-container").isotope({
      filter: filtervalue,
    });

    // active button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

// Magnifier

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// Stats

$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

// Clients

$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa-solid fa-angle-left" style="color: #750000; font-size: 20px; padding-right: 10px;"></i>',
      '<i class="fa-solid fa-angle-right" style="color: #750000; font-size: 20px; padding-left: 10px;"></i>',
    ],
  });
});

// Navigation

$(function () {
  // Show/hide nav on page load
  showHideNav();

  $(window).scroll(function () {
    // Show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show White Nav
      $("nav").addClass("white-nav-top");
      // Show dark logo
      $(".navbar-brand img").attr("src", "images/logo/logo_black.png");
      // Show back to top button
      $("#back-to-top").fadeIn();
    } else {
      // Hide White Nav
      $("nav").removeClass("white-nav-top");
      // Show light logo
      $(".navbar-brand img").attr("src", "images/logo/logo_white.png");
      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

/* =========================================
              Mobile Menu
============================================ */
$(function () {
  // Show mobile nav
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
    $("#mobile-nav").css("height", "0%");
  });
});
