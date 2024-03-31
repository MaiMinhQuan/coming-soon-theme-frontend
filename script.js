const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

let secValue = 60;
let minValue = 60;
let hourValue = 2;
let dayValue = 9;

const timeFunction = setInterval(() => {
  secValue--;
  if (secValue == 0) {
    minValue--;
    secValue = 60;
  }

  if (minValue == 0) {
    hourValue--;
    minValue = 60;
  }

  if (hourValue == 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue == 0) {
    clearInterval();
  }
  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //100ms = 1s
