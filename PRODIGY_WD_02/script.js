let [milisecond, second, minute, hours] = [0, 0, 0, 0];

let timerRef = document.querySelector("#result");

let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int != null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milisecond, second, minute, hours] = [0, 0, 0, 0];
  document.getElementById("hour").innerHTML = "00:";
  document.getElementById("minute").innerHTML = "00:";
  document.getElementById("second").innerHTML = "00:";
  document.getElementById("milisecond").innerHTML = "00";
});

function displayTimer() {
  milisecond += 10;
  if (milisecond == 1000) {
    milisecond = 0;
    second++;
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minute < 10 ? "0" + minute : minute;
  let s = second < 10 ? "0" + second : second;
  let ms =
    milisecond < 10
      ? "00" + milisecond
      : milisecond < 100
      ? "0" + milisecond
      : milisecond;

  document.getElementById("hour").innerHTML = `${h}:`;
  document.getElementById("minute").innerHTML = `${m}:`;
  document.getElementById("second").innerHTML = `${s}:`;
  document.getElementById("milisecond").innerHTML = `${ms}`;
}
