import numInptValidate from "./numInptValidate";

const changeCalcState = (state) => {
   const windowForm = document.querySelectorAll('.balcon_icons_img'),
         windowWidth = document.querySelectorAll('#width'),
         windowHeight = document.querySelectorAll('#height'),
         windowType = document.querySelectorAll('#view_type'),
         windowProfile = document.querySelectorAll('.checkbox');

   numInptValidate('#width');
   numInptValidate('#height');
   
   const bindAction = (elem, event, prop) => {
      elem.forEach((el, i) => {
         el.addEventListener(event, () => {
            switch(el.nodeName) {
               case 'SPAN': 
                  state[prop] = i;
                  break;
               case 'INPUT': 
                  if (el.getAttribute('type') === 'checkbox') { 
                     elem.forEach((e, j) => e.checked = i === j);
                     state[prop] = el.nextElementSibling.id;
                  } else {
                     state[prop] = el.value;
                  }
                  break;
               case 'SELECT':
                  state[prop] = el.value;
                  break;
            }
            console.log(state);
         });
      });
   }

   bindAction(windowForm, 'click', 'form');
   bindAction(windowWidth, 'input', 'width');
   bindAction(windowHeight, 'input', 'height');
   bindAction(windowType, 'change', 'type');
   bindAction(windowProfile, 'change', 'profile');
   
};

export default changeCalcState;