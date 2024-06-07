$(document).ready(function () {
  $(window).scroll(function () {
    // Sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // Scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // Slides up
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // Removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // Scroll on Menu Items click
    $("html").css("scrollBehavior", "smooth");
  });

  // Toggle Navbar
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // Typing Text Animation
  var typed = new Typed(".typing", {
    strings: ["Fullstack Developer", "Frontend developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Fullstack Developer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  // Redirect to project detail pages
  $(".card").click(function () {
    var projectName = $(this).find(".text").text().trim().toLowerCase();
    if (projectName === "science center") {
      window.location.href = "science.html";
    } else if (projectName === "fighting game") {
      window.location.href = "fight.html";
    } else {
      window.location.href = projectName + ".html";
    }
  });
});
