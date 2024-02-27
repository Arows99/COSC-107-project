const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const deadline = new Date();
deadline.setDate(deadline.getDate() + 10);

let lastSecondsLeft = -1;

const updateTimer = () => {
    const now = new Date();
    const distance = deadline - now;

    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    if (secondsLeft !== lastSecondsLeft) {
        days.textContent = daysLeft;
        hours.textContent = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
        minutes.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
        seconds.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
        lastSecondsLeft = secondsLeft;
    }
};

setInterval(updateTimer, 1000);