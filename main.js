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






// Blok ekranı gösterme fonksiyonu
function showBlockScreen() {
   var blockScreen = document.getElementById('blockScreen');
   blockScreen.style.display = 'flex'; // Blok ekranı görünür yapılır
 }
 
 // Blok ekranını gizleme fonksiyonu
 function hideBlockScreen() {
   var blockScreen = document.getElementById('blockScreen');
   blockScreen.style.display = 'none'; // Blok ekranı gizlenir
 }
 
 // Test amaçlı 3 saniye sonra blok ekranı göster
 setTimeout(showBlockScreen, 3000);
 