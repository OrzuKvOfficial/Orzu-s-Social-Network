$(document).ready(function () {
   $('#welcomeText').css('opacity', '1');
   $('#welcomeText').css('transform', 'translateY(0)');
});

function animateCards() {
   $('.card').each(function (index) {
       $(this).css('transition-delay', index * 200 + 'ms');
       $(this).addClass('show');
   });
}

animateCards();

$(window).scroll(function () {
   var viewportWidth = $(window).width();
   if (viewportWidth <= 576) {
       animateCards();
   }
});


// Toggle black and white mode
document.getElementById('bwModeToggle').addEventListener('click', function () {
   document.body.classList.toggle('bw-mode');
});









function createCalendar(month, year) {
  const calendar = document.getElementById('calendar');
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  let html = `<h2>${monthNames[month]} ${year}</h2><div class="month">`;
  for (let i = 0; i < 7; i++) {
    html += '<div>' + ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][i] + '</div>';
  }
  html += '</div><div class="days">';

  for (let i = 0; i < firstDay; i++) {
    html += '<div class="day"></div>';
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const today = (new Date().getFullYear() === year && new Date().getMonth() === month && i === new Date().getDate()) ? ' today' : '';
    html += `<div class="day${today}">${i}</div>`;
  }
  html += '</div>';
  calendar.innerHTML = html;
}

const now = new Date();
createCalendar(now.getMonth(), now.getFullYear());
