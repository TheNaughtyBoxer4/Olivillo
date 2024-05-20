function countdown() {
    const targetDate = new Date('2024-07-04T00:00:00');
    const now = new Date();

    const totalSeconds = (targetDate - now) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById('days').innerHTML = `${days} días`;
    document.getElementById('hours').innerHTML = `${hours} horas`;
    document.getElementById('minutes').innerHTML = `${minutes} minutos`;
    document.getElementById('seconds').innerHTML = `${seconds} segundos`;
}

function updateCountdown() {
    countdown();
    setInterval(countdown, 1000);
}

updateCountdown();