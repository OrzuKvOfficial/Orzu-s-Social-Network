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

function appendToDisplay(value) {
   document.getElementById('display').value += value;
}

function clearDisplay() {
   document.getElementById('display').value = '';
}

function calculate() {
   let result = eval(document.getElementById('display').value);
   document.getElementById('display').value = result;
}
