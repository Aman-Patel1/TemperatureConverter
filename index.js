const celciusE1 = document.getElementById("Celcius")
const FahrenheitE1 = document.getElementById("Fahrenheit")
const kelvinE1 = document.getElementById("Kelvin")

function computeTemp(event) {
   //Add + to avoid String Problem
   const currentValue = +event.target.value;

   switch (event.target.name) {
      case "Celcius":
         kelvinE1.value = (currentValue + 273.15).toFixed(2);
         FahrenheitE1.value = (currentValue * 1.8 + 32).toFixed(2);
         break;
      case "Fahrenheit":
         celciusE1.value = ((currentValue - 32) / 1.8).toFixed(2);
         kelvinE1.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
         break;
      case "Kelvin":
         celciusE1.value = (currentValue - 273.15).toFixed(2);
         FahrenheitE1.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
         break;

      default:
         break;

   }





}