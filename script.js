let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

function updateDisplay() {
  display.textContent = 
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function runTimer() {
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
}

startBtn.onclick = () => {
  if (!running) {
    timer = setInterval(runTimer, 1000);
    running = true;
  }
};

pauseBtn.onclick = () => {
  clearInterval(timer);
  running = false;
};

resetBtn.onclick = () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
  running = false;
};

lapBtn.onclick = () => {
  const li = document.createElement("li");
  li.textContent = `Lap - ${display.textContent}`;
  laps.appendChild(li);
};
