window.onload = function () {

   //? меню бургер

   const menuButton = document.querySelector('.header__menu-button');
   const headerList = document.querySelector('.header__list');
   const body = document.body;

   menuButton.addEventListener('click', function() {
      if(!menuButton.classList.contains('_active')) {
         menuButton.classList.toggle('_active');
         headerList.classList.toggle('_active');
         body.classList.toggle('_lock');
      } else {
         menuButton.classList.remove('_active');
         headerList.classList.remove('_active');
         body.classList.remove('_lock');
      }
   });

   // ?scroll page

   const buttonsScroll = document.querySelectorAll('#button-scroll[data-goto]');
   const headerHeight = document.querySelector('.header').offsetHeight;
   if(buttonsScroll.length > 0) {
      buttonsScroll.forEach(buttonScroll => {
         buttonScroll.addEventListener("click", onButtonClick);
      });

      function onButtonClick(e) {
         const buttonScroll = e.target;
         if (buttonScroll.dataset.goto && document.querySelector(buttonScroll.dataset.goto)) {
            const gotoBlock = document.querySelector(buttonScroll.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - headerHeight;
            menuButton.classList.remove('_active');
            headerList.classList.remove('_active');
            body.classList.remove('_lock');

            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            });
            e.preventDefault();
         }
      }
   }


   // ?swiper

   const swiper = new Swiper('.swiper-screen', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      
      autoplay: {
         delay: 4000,
         stopOnLastSlide: false,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
      },

      navigation: {
        prevEl: '.swiper-screen__button-prev',
        nextEl: '.swiper-screen__button-next',
      },
    });

    // ?popup
   const openModalButton = document.querySelectorAll('.open-modal');
   const closeModal = document.querySelector('.modal__exit');
   const modal = document.querySelector('.modal');
   let modalContentPlaceholder = modal.querySelector('.modal__content');

   openModalButton.forEach(i => {
      i.addEventListener('click', () => {
         let modalTitle = i.getAttribute('data-popup-title');
         let modalContent = i.getAttribute('data-popup-content');
            modalContentPlaceholder.textContent = modalContent;
            document.querySelector('.modal__title').textContent = modalTitle;
            modal.classList.add('_active');
      });
   });
   closeModal.addEventListener('click', () => {
      modal.classList.remove('_active');
   });

   const openModalRegister = document.querySelectorAll('.item-events__button');

   openModalRegister.forEach(i => {
      i.addEventListener('click', () => {
         document.querySelector('.modal-register').classList.add('_active');
      });
   });

   document.querySelector('.register-exit').addEventListener('click', () => {
      document.querySelector('.modal-register').classList.remove('_active');
   });
}