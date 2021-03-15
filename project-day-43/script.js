const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const btn = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'satisfied';



ratingsContainer.addEventListener('click', (event) => {
    if(event.target.parentNode.classList.contains('rating')) {
        removeActive();
        event.target.parentNode.classList.add('active');
        selectedRating = event.target.nextElementSibling.innerText;
    }
})

btn.addEventListener('click', () => {
    panel.innerHTML = 
        `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong><br/>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `
})

function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}