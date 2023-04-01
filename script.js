let timer = document.querySelector('p');

function getMin(minToSec) {
    let sec = 60;
    let seconds = sec * minToSec;
        setInterval(function () {
            sec -= 1;
            timer.innerText = minToSec * 1 + ":" + sec;
            if(sec == 0){
                minToSec -= 1;
                sec = 60;
            }
        }, 1000);

}
// getMin(1)