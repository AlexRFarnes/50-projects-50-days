const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fc8d6f07486c3d979e99a9da8bdb4a45&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fc8d6f07486c3d979e99a9da8bdb4a45&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search'); // input element

// Get initial movies
getMovies(API_URL);

// Get movies data function
async function getMovies(url) {
    const response  = await fetch(url);
    const data  = await response.json();

    showMovies(data.results);
}

// Function to display movies
function showMovies(movies) {
    main.innerHTML = '';
    movies.forEach(movie => {
        // Object destructuring
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
                    <img src="${IMG_PATH + poster_path}" alt="" >
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <span class="${vote_average < 4.9 ? 'red' : vote_average < 7.5 ? 'orange' : 'green'}">${vote_average}</span>
                    </div>
                    <div class="overview">
                        <h3>Overview</h3>
                        ${overview}
                    </div>`
        main.appendChild(movieEl);
    })
}

// Search functionality
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    console.log(SEARCH_API + searchTerm);

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm);
        
        search.value = '';
    } else {
        window.location.reload();
    }
})






