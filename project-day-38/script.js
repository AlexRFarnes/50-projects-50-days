const contentImgs = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('li');

listItems.forEach((item, idx) => item.addEventListener('click', () => {
    
    // listItems.forEach(item => item.classList.remove('active'));
    hideAllItems();
    item.classList.add('active');
    // contentImgs.forEach(img => img.classList.remove('show'));
    hideAllImgs()
    contentImgs[idx].classList.add('show');
})
)

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'));

}

function hideAllImgs() {
    contentImgs.forEach(img => img.classList.remove('show'));
}