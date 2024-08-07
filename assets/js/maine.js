(function () {
  "use strict";

  document
    .querySelector("#navbarSideCollapse")
    .addEventListener("click", function () {
      document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
})();

$(function () {
  const template = {
    win: $(window),
    navbar: $(".nav-bar"),
  };

  $(document).ready(function () {
    "use strict";
    template.win.on("scroll", function () {
      var navBarOne = $(".bg-gray"),
        navBarMenu = $(".nav-menu-bar");
      if (template.win.scrollTop() > 50) {
        navBarOne.css("display", "none");
        navBarMenu.css("position", "fixed");
      } else {
        navBarOne.css("display", "block");
        navBarMenu.css("position", "relative");
      }
    });
    /*========== Start Scroll For Navigation Menu ==========*/

    //// COLLAPSED MENU CLOSE ON CLICK
    template.navbar.on("click", ".navbar-collapse", function (e) {
      if ($(e.target).is(".navsLink a, .dropdown-menu .dropdown-item")) {
        $(this).collapse("hide");
      }
    });
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
