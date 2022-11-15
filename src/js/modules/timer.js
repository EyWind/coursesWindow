const timer = (selector, deadLine) => {

   const calcTimeRemaining = endPoint => {
      const total = Date.parse(endPoint) - Date.parse(new Date()),
            days = parseInt(total / (1000 * 60 * 60 * 24)),
            hours = parseInt((total / (1000 * 60 * 60)) % 24),
            minutes = parseInt((total / (1000 * 60)) % 60),
            seconds = parseInt((total / 1000) % 60);

      return {total, days, hours, minutes, seconds}
   }

   const addZero = num => {
      return (num >= 0 && num < 10) ? '0' + num : num;
   }

   const setTime = (slctr, ePoint) => {

      const timer = document.querySelector(slctr),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTime, 1000);

      updateTime();

      function updateTime () {
         const t = calcTimeRemaining(ePoint);

         days.innerHTML = addZero(t.days);
         hours.innerHTML = addZero(t.hours);
         minutes.innerHTML = addZero(t.minutes);
         seconds.innerHTML = addZero(t.seconds);

         if (t.total <= 0) {

            days.innerHTML = '00';
            hours.innerHTML = '00';
            minutes.innerHTML = '00';
            seconds.innerHTML = '00';
            
            clearInterval(timeInterval);
         } 
      }
   }
   
   setTime(selector, deadLine);
};

export default timer;