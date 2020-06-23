// variable containers
const hourHand = document.querySelector('#hour');
const minHand = document.querySelector('#minute');
const secHand = document.querySelector('#second');
const digitalClock = document.querySelector('.digital-clock');

// get date
const date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

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

const runDigitalClock = () => {
  let digitalDate = new Date();
  let digitalHr = digitalDate.getHours();
  let digitalMin = digitalDate.getMinutes();
  // console.log(digitalMin.toString().length);
  if (digitalMin.toString().length === 1) {
    digitalMin = `0${digitalMin}`;
  }
  digitalClock.innerHTML = `${digitalHr}:${digitalMin} <span class="sydney">in Sydney</span>`;
};

const app = () => {
  // run function every second (1000ms)
  setInterval(runDigitalClock, 1000);
  setInterval(runClock, 1000);
  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
};

app();
