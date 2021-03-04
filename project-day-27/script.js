const toasts = document.getElementById('toasts');
const button = document.getElementById('button');

const messages = [
    'Hello world',
    'Keep on coding',
    'Don\'t give up',
    'You got this'
]

button.addEventListener('click', createNotification);

function createNotification() {
    const toast = document.createElement('div');

    toast.innerText = getRandomMessage();
    toast.classList.add('toast');
    toasts.appendChild(toast);

    setTimeout(() => toast.remove(), 2000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}