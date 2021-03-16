const container = document.getElementById('container');
const unsplashURL = 'https://source.unsplash.com/random/';

const rows = 10;

for(let i = 0; i < rows * 4; i++) {
    const img = document.createElement('img');
    img.src = `${unsplashURL}${gerRandomSize()}`;
    container.appendChild(img);
}


function gerRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`
}

function getRandomNum() {
    return Math.floor(Math.random() * 20) + 300;
}