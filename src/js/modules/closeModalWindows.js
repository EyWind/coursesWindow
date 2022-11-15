const closeModalWindows = () => {
   const modalWindows = document.querySelectorAll('[data-modal]');
   modalWindows.forEach(e => e.style.display = 'none');
};

export default closeModalWindows;