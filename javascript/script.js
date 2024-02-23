const daysEl = document.querySelector('.time-section:nth-child(1) .time');
const hoursEl = document.querySelector('.time-section:nth-child(2) .time');
const minutesEl = document.querySelector('.time-section:nth-child(3) .time');
const secondsEl = document.querySelector('.time-section:nth-child(4) .time');

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 1 ${nextYear} 00:00:00`);

function countdown() {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
   
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    daysEl.innerHTML = days < 10 ? '0' + days : days;
    hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;

    const elements = [daysEl, hoursEl, minutesEl, secondsEl];
    elements.forEach(el => {
      if (Math.random() < 0.03) {
        el.style.opacity = 0.5 + Math.random() * 0.3; // Varying opacity
      } else {
        el.style.opacity = 1;
      }
    });

}

// Initial call 
countdown();

// Update every second
setInterval(countdown, 1000);
