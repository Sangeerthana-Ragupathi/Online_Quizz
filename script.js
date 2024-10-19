document.addEventListener("DOMContentLoaded", function() {
    startGame();
});

function startGame() {
    const weight1 = Math.floor(Math.random() * 50) + 1;
    const length1 = Math.floor(Math.random() * 10) + 1;
    const weight2 = Math.floor(Math.random() * 50) + 1;

    document.getElementById('weight1').value = weight1;
    document.getElementById('length1').value = length1;
    document.getElementById('weight2').value = weight2;
    document.getElementById('length2').value = '';

    document.getElementById('result').textContent = '';
    document.getElementById('nextTask').style.display = 'none';
}

function checkAnswer() {
    const weight1 = parseFloat(document.getElementById('weight1').value);
    const length1 = parseFloat(document.getElementById('length1').value);
    const weight2 = parseFloat(document.getElementById('weight2').value);
    const length2 = parseFloat(document.getElementById('length2').value);

    const correctLength2 = (weight1 * length1) / weight2;

    const resultElement = document.getElementById('result');
    if (Math.abs(length2 - correctLength2) < 0.1) {
        resultElement.textContent = 'Correct! L2 is ' + correctLength2.toFixed(2) + '.';
        resultElement.style.color = 'green';
        setTimeout(showNextTaskMessage, 1000); // Show the next task message after 1 second
    } else {
        resultElement.textContent = 'Incorrect. Try again!';
        resultElement.style.color = 'red';
    }
}

function showNextTaskMessage() {
    const nextTaskElement = document.getElementById('nextTask');
    nextTaskElement.style.display = 'block';
    nextTaskElement.style.opacity = 1;

    setTimeout(() => {
        nextTaskElement.style.transition = 'opacity 2s';
        nextTaskElement.style.opacity = 0;
        setTimeout(startGame, 2000); // Move to the next task after 2 seconds
    }, 1000);
}
