// UI Elements
const stopwatch = document.getElementById('stopwatch');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const moonIcon = document.getElementById('dark_theme');
const sunIcon = document.getElementById('light_theme');

// Event Listeners
startBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
moonIcon.addEventListener('click', darkTheme);
sunIcon.addEventListener('click', lightTheme);

// Variables
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

// Functions
function startStopwatch() {
  startBtn.textContent = 'Resume';

  let startInterval = setInterval(interval, 10);

  stopBtn.addEventListener('click', function () {
    clearInterval(startInterval);
  });
}

function resetStopwatch() {
  startBtn.textContent = 'Start';

  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  stopwatch.textContent = '00:00:00';
}

function interval() {
  milliseconds++;

  if (milliseconds >= 100) {
    seconds++;
    milliseconds = 0;
  }

  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }

  if (milliseconds < 10 && seconds < 10 && minutes < 10) {
    stopwatch.textContent = `0${minutes}:0${seconds}:0${milliseconds}`;
  } else if (seconds < 10 && minutes < 10) {
    stopwatch.textContent = `0${minutes}:0${seconds}:${milliseconds}`;
  } else if (milliseconds < 10 && minutes < 10) {
    stopwatch.textContent = `0${minutes}:${seconds}:0${milliseconds}`;
  } else if (milliseconds < 10 && seconds < 10) {
    stopwatch.textContent = `${minutes}:0${seconds}:0${milliseconds}`;
  } else if (milliseconds < 10) {
    stopwatch.textContent = `${minutes}:0${seconds}:0${milliseconds}`;
  } else if (seconds < 10) {
    stopwatch.textContent = `${minutes}:0${seconds}:${milliseconds}`;
  } else if (minutes < 10) {
    stopwatch.textContent = `0${minutes}:${seconds}:${milliseconds}`;
  } else {
    stopwatch.textContent = `${minutes}:${seconds}:${milliseconds}`;
  }
}

function lightTheme() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';

  moonIcon.innerHTML = `<i class="far fa-moon"></i>`;
  sunIcon.innerHTML = `<i class="fas fa-sun"></i>`;
}

function darkTheme() {
  document.body.style.backgroundColor = '#111';
  document.body.style.color = 'white';

  moonIcon.innerHTML = `<i class="fas fa-moon"></i>`;
  sunIcon.innerHTML = `<i class="far fa-sun"></i>`;
}
