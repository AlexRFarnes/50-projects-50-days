const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const imgList = document.querySelectorAll('img');

let idx = 0;

let intervalId = setInterval(run, 2000);

function run() {
    idx++;
    slideImg();
}

function slideImg() {
    if(idx > imgList.length - 1) {
        idx = 0;
    } else if(idx < 0) {
        idx = imgList.length - 1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
}


function resetInterval() {
    clearInterval(intervalId)
    intervalId = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++;
    slideImg();
    resetInterval();
})

leftBtn.addEventListener('click', () => {
    idx--;
    slideImg();
    resetInterval();
})