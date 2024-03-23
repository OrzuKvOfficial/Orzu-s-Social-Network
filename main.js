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

 // Dropdown toggler click event handler
 var dropdownTogglers = document.querySelectorAll('.dropdown-toggle');
 dropdownTogglers.forEach(function (dropdownToggler) {
     dropdownToggler.addEventListener('click', function () {
         var dropdownMenu = this.nextElementSibling;
         if (!dropdownMenu.classList.contains('show')) {
             closeAllDropdowns();
         }
         dropdownMenu.classList.toggle('show');
     });
 });

 // Close all dropdown menus
 function closeAllDropdowns() {
     var dropdownMenus = document.querySelectorAll('.dropdown-menu');
     dropdownMenus.forEach(function (dropdownMenu) {
         dropdownMenu.classList.remove('show');
     });
 }

 // Close dropdown when clicking outside
 document.addEventListener('click', function (event) {
     if (!event.target.matches('.dropdown-toggle')) {
         closeAllDropdowns();
     }
 });

 // JavaScript
document.addEventListener("DOMContentLoaded", function() {
  var loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  var spinner = document.createElement('div');
  spinner.className = 'spinner';
  loadingOverlay.appendChild(spinner);
  document.body.appendChild(loadingOverlay);
  window.onload = function() {
      loadingOverlay.style.display = 'none';
  }
});









