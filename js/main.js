// const scrollToTop = document.getElementById("scroll-to-top");
// scrollToTop.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

$(document).ready(function () {
  $(".main-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       dots: false,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       dots: false,
    //     },
    //   },
    // ],
  });

  $(document).ready(function () {
    $(".slider").slick({
      infinite: false,
      slidesToShow: 1.1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      prevArrow: $(".prev-arrow"),
      nextArrow: $(".next-arrow"),
      // centerMode: true,
      // variableWidth: true,
      // rtl: false,
    });
  });
});
