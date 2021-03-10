const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', () => {
    const blur = 20;
    const passwordLength = password.value.length * 2;

    background.style.filter = `blur(${blur - passwordLength}px)`

})
