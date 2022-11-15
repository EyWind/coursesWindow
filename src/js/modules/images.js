const images = () => {

   const imgPopup = document.createElement('div'),
         workSection = document.querySelector('.works'),
         bigImg = document.createElement('img');

   imgPopup.classList.add('popup');
   workSection.append(imgPopup);

   imgPopup.style.cssText = `
      justify-content: center;
      align-items: center;
      display: none;
   `;

   bigImg.style.cssText = `
      max-width: 80%;
      height: auto;
      object-fit: contain;
   `;

   imgPopup.append(bigImg);

   workSection.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;

      if (target && target.classList.contains('preview')) {
         imgPopup.style.display = 'flex';
         const path = target.parentNode.getAttribute('href');
         bigImg.setAttribute('src', path);
         document.body.style.overflow = 'hidden';
      }

      if (target && target.matches('div.popup')) {
         imgPopup.style.display = 'none';
         document.body.style.overflow = '';
      }
   });
   
}

export default images;