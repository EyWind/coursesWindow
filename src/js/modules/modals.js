import closeModalWindows from "./closeModalWindows";

const modals = () => {

   const bindModals = (triggerSelector, modalSelector, closeSelector, closeOverlay = true) => {

      const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

      closeModalWindows();
            
      trigger.forEach(e => {
         e.addEventListener('click', (e) => {
            if (e.target) e.preventDefault();
            closeModalWindows();
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
         });
      });
      
      close.addEventListener('click', () => {      
         closeModalWindows();
         modal.style.display = 'none';
         document.body.style.overflow = '';
      });

      modal.addEventListener('click', (e) => {
         if (e.target === modal && closeOverlay) {
            closeModalWindows();
            modal.style.display = 'none';
            document.body.style.overflow = '';
         }
      });

   }

   const timeredModal = (selector, time) => { 
      setTimeout(() => {
         document.querySelector(selector).style.display = 'block';
         document.body.style.overflow = 'hidden';
      }, time);
   };
      
   bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
   bindModals('.phone_link', '.popup', '.popup .popup_close');
   bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
   bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
   bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
   // timeredModal('.popup', 60000);
      
};

export default modals;