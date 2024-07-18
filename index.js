let countdown;
let startTime;
let elapsedTime = 0; // Elapsed time in milliseconds
const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay(milliseconds) {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const remainderMilliseconds = milliseconds % 1000;
    const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(remainderMilliseconds).padStart(3, '0')}`;
    countdownDisplay.textContent = display;
}

function startCountdown() {
    startTime = Date.now() - elapsedTime;
    countdown = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay(elapsedTime);
    }, 10); // Update every 10 milliseconds for smoother display
}

function stopCountdown() {
    clearInterval(countdown);
}

function resetCountdown() {
    clearInterval(countdown);
    elapsedTime = 0;
    updateDisplay(elapsedTime);
}

startButton.addEventListener('click', startCountdown);
stopButton.addEventListener('click', stopCountdown);
resetButton.addEventListener('click', resetCountdown);

// Initialize the display
updateDisplay(elapsedTime);
