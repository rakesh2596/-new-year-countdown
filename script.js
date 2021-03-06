const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime; // gives milliseconds

  // console.log(diff);  

  const d = Math.floor(diff / 1000 / 60 / 60 / 24); // date
  // diff/1000 gives seconds until new year / 60 gives minutes /60 gives hours
  // console.log(d); 
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;   // past hours
  //console.log(h);
  const m = Math.floor(diff / 1000 / 60) % 60;  // minutes passed
  // console.log(m);
  const s = Math.floor(diff / 1000) % 60;  // seconds passed
  // console.log(s);

  // Adding values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';  // in css we displayed it none and adding it here after the page loads
  }, 1000);

// Run every second
setInterval(updateCountdown, 1000);
