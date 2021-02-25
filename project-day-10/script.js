const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);


// Async / await 
async function generateJoke() {
    // To obtain a json file from this API the request must include in the header a key named "Accept" with a value of "application/json" 
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com/', config)
    const data = await response.json();
    joke.innerHTML = data.joke;
}

// Promises with then
// function generateJoke() {
//     // To obtain a json file from this API the request must include in the header a key named "Accept" with a value of "application/json" 
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', config)
//         .then(response => response.json())
//         .then(data => {
//             joke.innerHTML = data.joke;
//         })
// }
