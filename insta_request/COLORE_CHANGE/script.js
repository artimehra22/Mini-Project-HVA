let colorChangeInterval;

function startColorChange() {
    colorChangeInterval = setInterval(changeBackgroundColor, 1000);
    toggleButtons(true);
}

function stopColorChange() {
    clearInterval(colorChangeInterval);
    toggleButtons(false);
}

function changeBackgroundColor() {
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleButtons(isStartEnabled) {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    startButton.disabled = isStartEnabled;
    stopButton.disabled = !isStartEnabled;
}
