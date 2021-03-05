const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

let clickTime = 0;

loveMe.addEventListener('click', e => {
    if (clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

function createHeart(e) {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');

    const x = e.clientX;
    const y = e.clientY;
    const offsetTop = e.target.offsetTop;
    const offsetLeft = e.target.offsetLeft;

    heart.style.left = (x - offsetLeft) + 'px';
    heart.style.top = (y - offsetTop) + 'px';

    loveMe.appendChild(heart);

    setTimeout(() => heart.remove(), 600);
}