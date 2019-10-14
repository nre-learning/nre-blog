const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.burger-nav');
  const body = document.querySelector('body');

  burger.addEventListener('click', () => {
      nav.classList.toggle('active'); // open menu
      body.classList.toggle('overflow-hidden'); // freeze scrolling
      burger.classList.toggle('cross'); // toggle between burger and "X" icon
    });
};

navSlide();