const API_URL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form  = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
    try {
        const { data } = await axios(API_URL + username); // Object destructuring
        createUserCard(data)
        getRepos(username)
        
    } catch(e) {
        if(e.response.status === 404) {
            createErrorCard('Sorry :( No profile with that username.')
        }
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(API_URL + username + '/repos?sort=created'); // Object destructuring
        addReposToCard(data)
        
    } catch(e) {
            createErrorCard('Sorry :( We had some trouble retrieving the repos.')
    }
}

function createUserCard(user) {
    const cardHTML = `
    <div class="card">
        <div>
            <img
                src="${user.avatar_url}"
                alt="${user.name}"
                class="avatar"
            />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>
                ${user.bio}
            </p>

            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos">
                
            </div>
        </div>
    </div>
    `
    main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `
    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');
    repos
        .slice(0, 10)
        .forEach(repo => {
            const repoEl = document.createElement('a');
            repoEl.classList.add('repo');
            repoEl.href = repo.html_url;
            repoEl.target = '_blank';
            repoEl.innerText = repo.name;

            reposEl.appendChild(repoEl);
        })
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = search.value;

    if(user) { // Check user is not empty
        getUser(user)
        search.value= ''; //Clean the search bar
    }
})