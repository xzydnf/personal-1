$(document).ready(function () {
  // Navbar Shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  //Carousel
  $(".skill-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  //Screenshot
  $(".screenshot-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $.scrollIt({
    topOffset: -50,
  });

  $(".nav-toogle").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

function nav() {
  const navToggler = document.querySelector(".js-nav-toggler");
  const nav = document.querySelector(".js-nav");
  const togglerNav = () => {
    navToggler.classList.toggle("active");
    nav.classList.toggle("open");
  };

  navToggler.addEventListener("click", togglerNav);
}
nav();
