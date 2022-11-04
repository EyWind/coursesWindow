const forms = () => {

   const form = document.querySelectorAll('form'),
         inputs = document.querySelectorAll('input'),
         phoneInpts = document.querySelectorAll('input[name="user_phone"]');

   phoneInpts.forEach(e => e.addEventListener('input', () => e.value = e.value.replace(/\D/, '')));

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

         postData('assets/server.php', formData)
            .then(data => {
               console.log(data);
               statusMsg.textContent = msgs.success;
            })
            .catch(() => statusMsg.textContent = msgs.failure)
            .finally(() => {
               inputs.forEach(e => e.value = '');
               setTimeout(() => statusMsg.remove(), 5000);
            });
      })
   });
   
};

export default forms;