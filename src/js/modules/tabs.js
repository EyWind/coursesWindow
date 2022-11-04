const tabs = (headerSelector, tabsSelector, contentSelector, activeClas) => {

   const header = document.querySelector(headerSelector),
         tabs = document.querySelectorAll(tabsSelector),
         content = document.querySelectorAll(contentSelector);

   const hideContent = () => {
      content.forEach(e => e.style.display = 'none');
      tabs.forEach(e => e.classList.remove(activeClas));
   }

   const showContent = (i = 0) => {
      content[i].style.display = 'block';
      tabs[i].classList.add(activeClas);
   }

   hideContent();
   showContent();

   header.addEventListener('click', e => {
      const target = e.target;
            // tabSelector = tabsSelector.replace(/\./,''); // in case we use traget classList, we need to remove '.' and
            
      // if (target && (target.classList.contains(tabSelector) || target.parentNode.classList.contains(tabSelector))) {
      if (target && target.closest(tabsSelector)) {
         tabs.forEach((e, i) => {
            if (e == target || e == target.parentNode) {
               hideContent();
               showContent(i);
            }
         });
      }
   });
   
}

export default tabs;