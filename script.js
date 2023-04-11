/* let timer = document.querySelector('p');

function getMin(minToSec) {
    minToSec -= 1;
    let sec = 60;
    setInterval(function () {
        sec -= 1;
        timer.innerText = minToSec * 1 + ":" + sec;
        let secLength = sec.toString().split("").length;
        let minLength = minToSec.toString().split("").length;
        if (minLength == 1 && secLength == 1) {
            timer.innerText = "0" + minToSec * 1 + ":" + "0" + sec;
        }
        if (minLength != 1 && secLength != 1) {
            timer.innerText = minToSec * 1 + ":" + sec;
        }
        if (minLength == 1 && secLength != 1) {
            timer.innerText = "0" + minToSec * 1 + ":" + sec;
        }
        if (minLength != 1 && secLength == 1) {
            timer.innerText = minToSec * 1 + ":" + "0" + sec;
        }
        if (sec == 0) {
            minToSec -= 1;
            sec = 60;
        }
    }, 1000);
}
getMin(prompt("Enter munites")) */

function startTimer(minutes) {
    minutes--; // subtract 1 to start at the correct number of minutes
    let seconds = 60;
  
    setInterval(() => {
      seconds--;
  
      if (seconds < 0) {
        minutes--;
        seconds = 59;
      }
  
      const displayMinutes = minutes.toString().padStart(2, '0');
      const displaySeconds = seconds.toString().padStart(2, '0');
      timer.innerText = `${displayMinutes}:${displaySeconds}`;
  
      if (minutes === 0 && seconds === 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  const timer = document.querySelector('p');
  const minutes = parseInt(prompt("Enter minutes"));
  startTimer(minutes);
  