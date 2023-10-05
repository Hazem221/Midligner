$(document).ready(function () {
  $(".main-slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: $(".main-prev-arrow"),
    nextArrow: $(".main-next-arrow"),
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
    });
  });
});

function playVideo(videoId) {
  var thumbnail = document.querySelector("img");
  var video = document.querySelector("#" + videoId);

  if (thumbnail && video) {
    thumbnail.style.display = "none";
    video.style.display = "block";
    video.play();
  }
}
