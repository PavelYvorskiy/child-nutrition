const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
  },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    slidesPerView: 2,
    // centeredSlides: true,
    autoHeight: true,
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 40
      },
    }
  });