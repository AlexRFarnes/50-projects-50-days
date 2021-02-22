const panels = document.querySelectorAll('.panel');


function displayPanel(e) {
    // If the current active class is clicked then do nothing
    if(e.target.classList.contains('active')) {
        return ;
    };
    // Call the function to remove the active class from the panel
    removeActive();
    // Add the active class to the clicked panel
    e.target.classList.add('active');
}

function removeActive() {
    // Loop through all the panels to remove the active class from the one active
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

panels.forEach(panel => {
    panel.addEventListener('click', displayPanel);
})