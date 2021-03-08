const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

runAnimation();

function resetDOM() {
    counter.classList.remove('hide');
    final.classList.remove('show');

    nums.forEach(num => {
        num.classList.value = '';
    })

    nums[0].classList.add('in');
}

function runAnimation() {
    nums.forEach((num, idx) => {
        const lastIdx = nums.length - 1;

        num.addEventListener('animationend', (event) => {
            if(event.animationName === 'goIn' && idx !== lastIdx) {
                num.classList.remove('in');
                num.classList.add('out');
            } else if(event.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide');
                final.classList.add('show');
            }
        })
    })
}

replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
})


