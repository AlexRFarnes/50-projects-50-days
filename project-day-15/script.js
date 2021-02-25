const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const c = parseInt(counter.innerText); // Current value displayed

        const increment = target / 100; // Arbitrary increment value

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 50); // Call recursively updateCounter every 50ms
        } else  {
            counter.innerText = target;
        }
    }

    updateCounter();
})