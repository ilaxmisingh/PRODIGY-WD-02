let stopwatchInterval;
let seconds = 0, minutes = 0, hours = 0;

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateDisplay, 1000);
    }
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function resetStopwatch() {
    stopStopwatch();
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDisplay() {
    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const displayElement = document.getElementById('display');
    displayElement.innerText = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
