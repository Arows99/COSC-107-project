const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const deadline = new Date('2024-03-08T11:30:00');

const updateTimer = () => {
    const now = new Date();
    const distance = deadline - now;

    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = daysLeft;
    hours.textContent = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
    minutes.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
    seconds.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
};

setInterval(updateTimer, 1000);
