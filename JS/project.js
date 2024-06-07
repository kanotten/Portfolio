// loading of JavaScript libraries
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}

// Load jQuery dynamically
loadScript("https://code.jquery.com/jquery-3.5.1.min.js", function () {
  // jQuery loaded, now execute your code
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
  });
});
