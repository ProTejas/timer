let timer = document.querySelector('p');

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
getMin(prompt("Enter munites"))