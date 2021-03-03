const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameEl = document.getElementById('name');
const dateEl = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_txt = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
    header.innerHTML = '<img src="https://source.unsplash.com/random/1400" alt="" />';
    title.innerHTML = 'A beautiful random picture';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quos?'

    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="" />';
    nameEl.innerHTML = 'Louis Lane';
    dateEl.innerHTML = 'Mar 03, 2021';

    animated_bgs.forEach(bg => {
        bg.classList.remove('animated-bg');
    })

    animated_bg_txt.forEach(bg => {
        bg.classList.remove('animated-bg-text');
    })
}