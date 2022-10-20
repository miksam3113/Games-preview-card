const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slide.classList.add("active");
  });
}

$(document).ready(function () {
  let sliderPosition = 0;
  const sliderContainer = $(".slider-container");
  const sliderTrack = $(".slider-track");
  const sliderItem = $(".slider-item");
  const sliderItemWidth = sliderItem.width();
  const sliderContainerWidth = sliderContainer.width();
  const sliderTrackWidth =
    sliderItem.length * sliderItemWidth - sliderContainerWidth;
  const sliderButtonPrev = $(".arrow-left");
  const sliderButtonNext = $(".arrow-right");
  sliderButtonPrev.on("click", function () {
    sliderPosition += sliderItemWidth;
    if (sliderPosition > 0) {
      sliderPosition = 0;
    }
    sliderTrack.css("transform", `translateX(${sliderPosition}px`);
    sliderButtons();
  });
  sliderButtonNext.on("click", function () {
    sliderPosition -= sliderItemWidth;
    if (sliderPosition < -sliderTrackWidth) {
      sliderPosition = -sliderTrackWidth;
    }
    sliderTrack.css("transform", `translateX(${sliderPosition}px`);
    sliderButtons();
  });
  const sliderButtons = () => {
    if (sliderPosition === 0) {
      sliderButtonPrev.hide();
    } else {
      sliderButtonPrev.show();
    }
    if (sliderPosition === -sliderTrackWidth) {
      sliderButtonNext.hide();
    } else {
      sliderButtonNext.show();
    }
  };
  sliderButtons();
});

$(document).ready(function () {
  $('a[href^="#"], *[data-href^="#"]').on("click", function (e) {
    e.preventDefault();
    var t = 500;
    var d = $(this).attr("data-href")
      ? $(this).attr("data-href")
      : $(this).attr("href");
    $("html,body")
      .stop()
      .animate({ scrollTop: $(d).offset().top - 75 }, t);
  });
});
