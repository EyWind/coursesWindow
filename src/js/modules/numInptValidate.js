const numInptValidate = (selector) => {
   const inputs = document.querySelectorAll(selector);
   
   inputs.forEach(e => e.addEventListener('input', () => e.value = e.value.replace(/\D/, '')));
}

export default numInptValidate;