const dino = document.querySelector('.dino');
let isJumping = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isJumping) {
        isJumping = true;
        dino.classList.add('jumpingDino');
    }
});

dino.addEventListener('animationend', () => {
    isJumping = false;
    dino.classList.remove('jumpingDino');
});

const cactus = document.querySelector('.cactus');
let gameOver = false;

setInterval(() => {
    if (gameOver) return;

    const dinoBottom = dino.getBoundingClientRect().bottom;
    const cactusRight = cactus.getBoundingClientRect().right;
    const cactusLeft = cactus.getBoundingClientRect().left;

    if (dinoBottom <= 0 && cactusLeft >= 0) {
        gameOver = true;
        alert('game-over');
    }
}, 10);


