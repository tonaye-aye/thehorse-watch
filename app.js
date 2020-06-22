// variable containers
const hourHand = document.querySelector("#hour");
const minHand = document.querySelector("#minute");
const secHand = document.querySelector("#second");

// get date
const date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
// log date
console.log(`Hour: ${hr} Minute: ${min} Second: ${sec}`);

// set degrees initially
let hourPosition = hr * (360 / 12) + (min * (360 / 60)) / 12;
let minPosition = min * (360 / 60) + (sec * (360 / 60)) / 60;
let secPosition = sec * (360 / 60);

const runClock = () => {
  //adjust position every second to stop glitching error
  hourPosition = hourPosition + 3 / 360;
  minPosotion = minPosition + 6 / 60;
  secPosition = secPosition + 6;

  // transform the hands
  hourHand.style.transform = `rotate(${hourPosition}deg)`;
  minHand.style.transform = `rotate(${minPosition}deg)`;
  secHand.style.transform = `rotate(${secPosition}deg)`;
};

const app = () => {
  // run function every second (1000ms)
  setInterval(runClock, 1000);
};

app();
