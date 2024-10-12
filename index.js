document.getElementById('btnYes').addEventListener('click', function() {
    document.body.style.backgroundColor = '#9e2d4a';
    const message = document.getElementById('message');
    const container = document.querySelector('.container');
    while (container.firstChild) {
        if (container.firstChild !== message) {
            container.removeChild(container.firstChild);
        } else {
            break;
        }
    }
    message.innerHTML = 'MUY FELIZ CUMPLE!<br>Te quiero mucho, Belén ❤️';
    message.classList.remove('hidden');
    message.classList.add('show');

    createStreamers();

    confetti({
        particleCount: 300,
        spread: 100,
        origin: { x: 0.5, y: 0.5 }
    });

    confetti({
        particleCount: 300,
        spread: 120,
        origin: { x: 0.2, y: 0.6 }
    });

    confetti({
        particleCount: 300,
        spread: 120,
        origin: { x: 0.8, y: 0.6 }
    });
});

document.getElementById('btnNo').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.innerHTML = 'Mentira! Tocá el otro botón 😑';
    message.classList.remove('hidden');
    message.classList.add('show');
});

function createStreamers() {
    const streamerCount = 10;
    for (let i = 0; i < streamerCount; i++) {
        const streamer = document.createElement('div');
        streamer.classList.add('streamer');
        streamer.style.left = `${Math.random() * 100}vw`;
        streamer.style.bottom = `${Math.random() * 50 + 50}vh`;

        streamer.style.animationDuration = `${Math.random() * 1 + 1}s`;

        document.body.appendChild(streamer);

        streamer.addEventListener('animationend', () => {
            streamer.remove();
        });
    }
}