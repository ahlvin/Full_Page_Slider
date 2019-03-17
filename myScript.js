console.log("JS file");
const slides = document.querySelectorAll(".slider-container .slide");
const eraser = document.querySelector(".eraser");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const intervalTime = 5000;
const eraseActiveTime = 700;
let sliderInterval;

// next slide
const nextSlide = () => {
  eraser.classList.add("active");
  setTimeout(() => {
    const active = document.querySelector(".slide.active");
    active.classList.toggle("active");
    if (active.nextElementSibling) {
      active.nextElementSibling.classList.toggle("active");
    } else {
      slides[0].classList.toggle("active");
    }
    setTimeout(() => {
      eraser.classList.remove("active");
    }, 200);
  }, eraseActiveTime);
};

// previousSlide
const previousSlide = () => {
  eraser.classList.add("active");
  setTimeout(() => {
    const active = document.querySelector(".slide.active");
    active.classList.toggle("active");
    if (active.previousElementSibling) {
      active.previousElementSibling.classList.toggle("active");
    } else {
      slides[slides.length - 1].classList.toggle("active");
    }
    setTimeout(() => {
      eraser.classList.remove("active");
    }, 200);
  }, eraseActiveTime);
};

// next button event
next.addEventListener("click", () => {
  // console.log("next");
  nextSlide();
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, intervalTime);
});

// previous Button Event
previous.addEventListener("click", () => {
  // console.log("next");
  previousSlide();
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, intervalTime);
});

sliderInterval = setInterval(nextSlide, intervalTime);

// setTimeout(nextSlide, 500);
