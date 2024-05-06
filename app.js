document.addEventListener('DOMContentLoaded', function () {
    var numberElement = document.getElementById("number");
    var startButton = document.getElementById("start_btn");
    var stopButton = document.getElementById("stop_btn");
    var userInput = document.getElementById("user_input");
    var resultElement = document.getElementById("result");

    var runningNumber = 0;
    var interval;

    function start() {
        if (userInput.value) {
            interval = setInterval(function () {
                if (runningNumber >= 1000) {
                    clearInterval(interval);
                    runningNumber = 0;
                    numberElement.innerText = runningNumber;
                    resultElement.innerText = "You are late";
                    startButton.disabled = false;
                } else {
                    runningNumber++;
                    numberElement.innerText = runningNumber;
                }
            }, 300);
            startButton.disabled = true;
        } else {
            alert("Please enter a number.");
        }
    }

    function stop() {
        clearInterval(interval);
        if (userInput.value == runningNumber) {
            resultElement.innerText = "You Win";
        } else {
            resultElement.innerText = "You Lose";
        }
        runningNumber = 0;
        numberElement.innerText = 0;
        startButton.disabled = false;
    }

    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
});
