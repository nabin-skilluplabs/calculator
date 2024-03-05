(() => {
   let screenValue = "";
   function getButtonValue(event) {
      const screenElement = document.querySelector('input');
      const digit = event.target.textContent;

      if(digit === "=") {
         const calculatedValue = eval(screenValue);
         screenElement.value = calculatedValue;
      }
      else {
         
         screenValue = screenValue + digit;
         screenElement.value = screenValue;
      }
   }


   const buttons = document.querySelectorAll("button");
   buttons.forEach((button) => {
      button.addEventListener('click', getButtonValue);
   });
})();
