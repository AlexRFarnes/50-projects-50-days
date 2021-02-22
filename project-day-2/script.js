const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


let currentActive = 1;


function increaseCurrent() {
    currentActive++;
    // Enable prev once next is clicked
    prev.removeAttribute('disabled');

    // Keep the currentActive between the limits
   if(currentActive >= circles.length) {
    currentActive = circles.length;
    // Also disabled next
    next.disabled = true;
   }
   update();

   
}

function decreaseCurrent() {
    currentActive--;
    // Enable next once prev is clicked
    next.removeAttribute('disabled');

    // Keep the currentActive between the limits
   if(currentActive <= 1) {
    currentActive = 1;
    // Also disabled prev
    prev.disabled = true;
   }
   update();
}

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    // Remove one from both because there are only 3 line segements to fill, because there are 4 points
    progress.style.width = `${(actives.length -1) / (circles.length - 1) * 100}%`;
}

prev.addEventListener('click', decreaseCurrent);

next.addEventListener('click', increaseCurrent);