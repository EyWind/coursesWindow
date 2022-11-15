import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeCalcState from './modules/changeCalcState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
   "use strict";

   let calcState = {};
   
   const now = new Date();
   let deadLine = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 12}`;

   changeCalcState(calcState);
   modals();
   tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
   tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
   tabs('.balcon_icons', '.balcon_icons_img','.big_img > img', 'do_image_more', 'inline-block');
   forms(calcState);
   timer('#timer', deadLine);
   images();

});