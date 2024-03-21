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






// Sayfa yüklenir yüklenmez çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
   // Belirli bir süre boyunca kullanıcı etkileşimi olmadığında blok ekranı gösterme
   var inactivityTimeout = setTimeout(showBlockScreen, 10000); // 10 saniye
 
   // Herhangi bir klavye veya fare etkileşimi olduğunda zamanlayıcıyı sıfırla
   document.addEventListener('mousemove', resetTimer);
   document.addEventListener('keypress', resetTimer);
 
   // Kapatma butonu işlevselliği
   document.getElementById('closeButton').addEventListener('click', function() {
     hideBlockScreen();
   });
 
   // Blok ekranını gösterme fonksiyonu
   function showBlockScreen() {
     var blockScreen = document.getElementById('blockScreen');
     blockScreen.style.display = 'flex'; // Blok ekranı görünür yapılır
   }
 
   // Blok ekranını gizleme fonksiyonu
   function hideBlockScreen() {
     var blockScreen = document.getElementById('blockScreen');
     blockScreen.style.display = 'none'; // Blok ekranı gizlenir
   }
 
   // Kullanıcı etkileşimi olduğunda zamanlayıcıyı sıfırla
   function resetTimer() {
     clearTimeout(inactivityTimeout);
     inactivityTimeout = setTimeout(showBlockScreen, 10000); // 10 saniye
   }
 });