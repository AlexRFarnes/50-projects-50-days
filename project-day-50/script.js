const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const messageEl = document.getElementById('message');

let seconds = 0;
let score  = 0;
let selectedInsect = {};

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src'); // === img.src
        const alt = img.getAttribute('alt'); // === img.alt
        selectedInsect = {
            src,
            alt
        }
        screens[1].classList.add('up');
        setTimeout(createInsect, 1000);
        startGame();
    })
})

function increaseTime() {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    timeEl.innerText = `Time: ${min}:${sec}`;
    seconds++;
}

function startGame() {
    setInterval(increaseTime, 1000);
}

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = y + 'px';
    insect.style.left = x + 'px';
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`;
    
    insect.addEventListener('click', catchInsect);

    gameContainer.appendChild(insect);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.floor(Math.random() * width - 200) + 100;
    const y = Math.floor(Math.random() * height - 200) + 100;

    return { x, y}
}

function increaseScore() {
    score++;
    if(score > 19) {
        messageEl.classList.add('visible');
    }
    scoreEl.innerText = `Score: ${score}`
}

function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
    addInsects();
}

function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}