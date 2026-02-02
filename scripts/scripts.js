let swiperReviews;

try {
  if (swiperReviews) {
    swiperReviews.destroy();
  }
  swiperReviews = new Swiper('.reviews__swiper', {
    spaceBetween: 30,
    slidesPerView: 'auto',
    pagination: {
      el: '.reviews__pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 30
      }
    }
  });
} catch (e) {
  console.log(e.message);
}
