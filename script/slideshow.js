const imgs = document.querySelectorAll(".prjctbg");

var swiper = new Swiper(".swiper-container-home", {

  spaceBetween: 1,
  slidesPerView: 1,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,

  on: {
    slideChangeTransitionStart: function () {
      // Get the current slide index
      var slideIndex = this.realIndex;
       // console.log(slideIndex);
      imgs.forEach((img) => {
        const index = img.getAttribute("data-index");
        if (index == slideIndex) {
          img.classList.add("activeBG");
        } else {
          img.classList.remove("activeBG");
        }
      });
      gsap.fromTo(
        ".activeBG",
        1,
        {
          autoAlpha: 0,
          scale: 1.2,
        },
        {
          autoAlpha: 1,
          scale: 1,
        }
      );
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
  },
});


// Dodajemo event listener za tastaturu
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 37) {
    // leva strelica
    swiper.slidePrev();
  } else if (event.keyCode === 39) {
    // desna strelica
    swiper.slideNext();
  }
});