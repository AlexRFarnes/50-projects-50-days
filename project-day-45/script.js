const openBtn = document.querySelector('.btn--open');
const closeBtn = document.querySelector('.btn--close');
const nav = document.querySelectorAll('.nav');


openBtn.addEventListener('click', () => {
    nav.forEach((navEl, idx) => {
        navEl.classList.add('visible');
    })
})

closeBtn.addEventListener('click', () => {
    nav.forEach((navEl, idx) => {
        navEl.classList.remove('visible')
    })
})