const clock = document.getElementById('clock');
const btnChange = document.querySelector('button');

function getClockTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours >= 12) {
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (date.getHours() > 12) {
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} <span>PM</span>`;
  } else {
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} <span>AM</span>`;
  }
}

window.addEventListener('load', getClockTime);

setInterval(getClockTime, 1000);
