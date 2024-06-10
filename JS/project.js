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
    // jQuery code to set up event listeners and other functionality

    // Sticky navbar on scroll script
    $(window).scroll(function () {
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }

      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });

    // Scroll-up button show/hide script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      $("html").css("scrollBehavior", "auto");
    });

    // Smooth scroll on Menu Items click
    $(".navbar .menu li a").click(function () {
      $("html").css("scrollBehavior", "smooth");
    });

    // Toggle Navbar
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  });
});
