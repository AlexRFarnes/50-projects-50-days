const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const sizeDisplay = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

let size = 10;
let color = 'steelblue';
let x;
let y;
let isPressed = false;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
})

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(sx, sy, ex, ey) {
    ctx.beginPath();
    ctx.lineJoin = 'round'
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()
}

function updateSizeDisplay() {
    sizeDisplay.innerText = size;
}

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
})

decreaseBtn.addEventListener('click', () => {
    if (size <= 2) {
        return;
    }

    size -= 2;
    updateSizeDisplay();
})

increaseBtn.addEventListener('click', () => {
    if (size >= 30) {
        return;
    }

    size += 2;
    updateSizeDisplay()
})

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})