const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', e => {
    filterData(e.target.value);
})

async function getData() {
    const response = await fetch('https://randomuser.me/api?results=50');

    const { results } = await response.json();

    // Clear the results
    console.log(results[0])
    result.innerHTML = '';

    results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.classList.add('user-card');
        li.innerHTML = `
            <img class="user-img"
            src="${user.picture.large}"
            alt="${user.name.first} ${user.name.last}"
            />
            <div class="user-info">
                <h3 class="user-name">${user.name.first} ${user.name.last}</h3>
                <p class="user-location">${user.location.city}, ${user.location.country}</p>
            </div>
        `
        result.appendChild(li)
        
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
       if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
           item.classList.remove('hide');
       } else {
           item.classList.add('hide');
       }
    })
}
