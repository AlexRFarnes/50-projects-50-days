const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
    button.addEventListener('click', rippleEffect)
})

function rippleEffect(e) {
    const x = e.clientX; // Where the click occurs horizontally relative to the viewport
    const y = e.clientY; // Where the click occurs vertically relative to the viewport
    const buttonLeft = e.target.offsetLeft; // Get left position of button relative to the viewport [e.target.offsetLeft = e.target.getBoundingClientRect().left]
    const buttonTop = e.target.offsetTop; // Get top position of button relative to the viewport [e.target.offsetTop = e.target.getBoundingClientRect().top]

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = y - buttonTop + 'px';
    circle.style.left = x - buttonLeft + 'px';

    this.appendChild(circle);

    setTimeout(() => {
        circle.remove(); // this.removeChild(circle) works the same
    }, 700)

}