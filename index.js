let score = 0;
let timeLeft = 20;
let timerId;

const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const clickButton = document.getElementById('clickButton');

clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
});

function startGame() {
    timerId = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time left: ${timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(timerId);
            clickButton.disabled = true;
            alert(`Game over! Your score is ${score}`);
        }
    }, 1000);
}

startGame();



const clickSound = new Audio('images/sound.mp4');
clickButton.addEventListener('click', () => {
    clickSound.play();
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    checkLevelUp();
});
''

function showLevelUpAnimation() {
    const levelUpMessage = document.createElement('div');
    levelUpMessage.textContent = `Level ${level} Up!`;
    levelUpMessage.className = 'level-up';
    document.body.appendChild(levelUpMessage);

    setTimeout(() => {
        levelUpMessage.remove();
    }, 2000);
}

function checkLevelUp() {
    const scoreThreshold = level * 20;
    if (score >= scoreThreshold) {
        level++;
        levelDisplay.textContent = `Level: ${level}`;
        showLevelUpAnimation();
        clearInterval(timerId);
        startGame();
    }
}
function callMyYTPage() {
    window.open("https://www.youtube.com/channel/UCG1bx5RQ0rj-z69_FEl7VKg");
  }


  document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.getElementById('background').style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});

function createParticles(e) {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${e.clientX}px`;
        particle.style.top = `${e.clientY}px`;
        particlesContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
    setTimeout(() => particlesContainer.remove(), 1000);
}

document.getElementById('subscribeButton').addEventListener('click', createParticles);

function showUIElement(element) {
    element.classList.add('show');
    element.classList.remove('hide');
}

function hideUIElement(element) {
    element.classList.add('hide');
    element.classList.remove('show');
}

