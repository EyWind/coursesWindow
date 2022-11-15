import numInptValidate from "./numInptValidate";
import closeModalWindows from "./closeModalWindows";

const forms = (calcState) => {

   const form = document.querySelectorAll('form'),
         inputs = document.querySelectorAll('input');
         
   numInptValidate('input[name="user_phone"]');

   const msgs = {
      loading: 'Loading...',
      success: 'Thanks! soon we will contact you!',
      failure: 'Something went wrong :('
   };

   const postData = async (url, data) => {
      document.querySelector('.status').textContent = msgs.loading;

      let res = await fetch(url, {
         method: "POST",
         body: data
      });

      return await res.text();
   }

   form.forEach(formItem => {
      formItem.addEventListener('submit', e => {
         e.preventDefault();

         let statusMsg = document.createElement('div');
         statusMsg.classList.add('status');
         formItem.appendChild(statusMsg);

         const formData = new FormData(formItem);
         if (formItem.getAttribute("data-type") === 'calc_end') {
            for (let key in calcState) {
               formData.append(key, calcState[key]);
            }
         }

         postData('assets/server.php', formData)
            .then(data => {
               console.log(data);
               statusMsg.textContent = msgs.success;
            })
            .catch(() => statusMsg.textContent = msgs.failure)
            .finally(() => {
               inputs.forEach(e => e.value = '');
               for (let key in calcState) delete calcState[key];
               setTimeout(() => {
                  statusMsg.remove();
                  closeModalWindows();
               }, 5000);
            });
      })
   });
   
};

export default forms;