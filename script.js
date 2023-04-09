const canvas = document.getElementById('harfCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const harfler = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
const harfDizisi = harfler.split('');

const fontSize = 16;
const sutunlar = canvas.width / fontSize;

const harfY = [];

for (let i = 0; i < sutunlar; i++) {
    harfY[i] = Math.random() * (canvas.height / fontSize);
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00FF00';
    ctx.font = fontSize + 'px arial';

    for (let i = 0; i < harfY.length; i++) {
        const text = harfDizisi[Math.floor(Math.random() * harfDizisi.length)];
        const x = i * fontSize;
        const y = harfY[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y >= canvas.height) {
            harfY[i] = 0;
        } else {
            harfY[i]++;
        }
    }
}

setInterval(draw, 50);