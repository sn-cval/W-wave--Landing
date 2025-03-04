window.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.section-about__form');
  const inputName = form.querySelector('input[name=name]');
  const errorName = form.querySelector('.section-about__error');
  const smoothLinks = document.querySelectorAll("a[href^='#']");

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const validateInput = () => {

    if (inputName.value.match(/[\d\%\\\[\]]+/gi)) {
      inputName.classList.add('section-about__input--error')
      errorName.style.display = "block"
    }
  }

  resizableSwiper(
    '(max-width: 570px)',
    '.swiper',
    {
      slidesPerView: 'auto',
      spaceBetween: 23,
    }
  );

  inputName.addEventListener('focus', () => {
    inputName.classList.remove('section-about__input--error')
    errorName.style.display = "none"
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
  })

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  };
});
