const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn  = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let hours = 0;
let minutes = 0;
let seconds = 0;

let intervalId = null; 

function pad(n) {
  return n.toString().padStart(2, '0');
}

function formatTime(h, m, s) {
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent =
    String(hours).padStart(2,'0') + ':' +
    String(minutes).padStart(2,'0') + ':' +
    String(seconds).padStart(2,'0');
}

function startTimer() {
  // Guard: if already running, do nothing
  if (intervalId !== null) return;

  // Start interval
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  if (intervalId === null) return;  // not running
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();   // ensure stopped
  hours = minutes = seconds = 0;
  updateDisplay();
}




