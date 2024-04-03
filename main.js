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

$(document).ready(function () {
  updateTime();

  setInterval(updateTime, 1000);
});

function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString = hours + ":" + minutes + ":" + seconds;

  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var dateString = day + "/" + month + "/" + year;

  $('.time').text(timeString);
  $('.date').text(dateString);
}



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
document.addEventListener("DOMContentLoaded", function () {
  var loadingOverlay = document.createElement('div');
  loadingOverlay.className = 'loading-overlay';
  var spinner = document.createElement('div');
  spinner.className = 'spinner';
  loadingOverlay.appendChild(spinner);
  document.body.appendChild(loadingOverlay);
  window.onload = function () {
    loadingOverlay.style.display = 'none';
  }
});




let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    alert('Invalid input!');
  }
}
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.fillStyle = 'red';
context.fillRect(10, 10, 50, 50); // yuqoridagi kordinatalar o'zgaradi


// Odamlar to'plami
var odamlar = [
  {ism: "Ali", familiya: "Valiyev", yosh: 25, jins: "erkak", manzil: "Toshkent"},
  {ism: "Dilorom", familiya: "Aliyeva", yosh: 30, jins: "ayol", manzil: "Buxoro"},
  {ism: "Sardor", familiya: "Xasanov", yosh: 28, jins: "erkak", manzil: "Namangan"}
  // Qo'shimcha odamlar kiritish mumkin
];

// Yosh bo'yicha ajratish funksiyasi
function yoshBoyichaAjratish(odamlar) {
  return odamlar.sort(function(a, b) {
      return a.yosh - b.yosh; // Yosh bo'yicha tartiblash
  });
}

// Jins bo'yicha ajratish funksiyasi
function jinsBoyichaAjratish(odamlar) {
  return odamlar.sort(function(a, b) {
      if (a.jins < b.jins) return -1; // Erkaklar oldin
      if (a.jins > b.jins) return 1; // Ayollar keyin
      return 0;
  });
}

// Ism bo'yicha ajratish funksiyasi
function ismBoyichaAjratish(odamlar) {
  return odamlar.sort(function(a, b) {
      if (a.ism < b.ism) return -1; // Ism bo'yicha alfavit tartibida
      if (a.ism > b.ism) return 1;
      return 0;
  });
}

// Familiya bo'yicha ajratish funksiyasi
function familiyaBoyichaAjratish(odamlar) {
  return odamlar.sort(function(a, b) {
      if (a.familiya < b.familiya) return -1; // Familiya bo'yicha alfavit tartibida
      if (a.familiya > b.familiya) return 1;
      return 0;
  });
}

// Manzil bo'yicha ajratish funksiyasi
function manzilBoyichaAjratish(odamlar) {
  return odamlar.sort(function(a, b) {
      if (a.manzil < b.manzil) return -1; // Manzil bo'yicha alfavit tartibida
      if (a.manzil > b.manzil) return 1;
      return 0;
  });
}

// Test qilish
console.log("Yosh bo'yicha ajratilgan odamlar:");
console.log(yoshBoyichaAjratish(odamlar));

console.log("Jins bo'yicha ajratilgan odamlar:");
console.log(jinsBoyichaAjratish(odamlar));

console.log("Ism bo'yicha ajratilgan odamlar:");
console.log(ismBoyichaAjratish(odamlar));

console.log("Familiya bo'yicha ajratilgan odamlar:");
console.log(familiyaBoyichaAjratish(odamlar));

console.log("Manzil bo'yicha ajratilgan odamlar:");
console.log(manzilBoyichaAjratish(odamlar));

try {
  // Sinashni istagan kodni joylashingiz mumkin
  // Misol uchun:
  console.log("Kodni sinash boshlandi.");
  undefinedFunction(); // Bu funktsiya mavjud emas, shuning uchun xatolik yuz beradi
  console.log("Bu qatorga hech qanday muvaffaqiyatli keldi.");
} catch (error) {
  // Xatolik yuz berishini tekshirish
  console.error("Xatolik yuz berdi:", error.message);
} finally {
  // Har doim ishga tushishi kerak bo'lgan kod qismi
  console.log("Sinash tugallandi.");
}

// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('container');

  // Containerning o‘rta nuqtasini topish
  var containerRect = container.getBoundingClientRect();
  var centerPointX = containerRect.left + container.offsetWidth / 2;
  var centerPointY = containerRect.top + container.offsetHeight / 2;

  // Sichqoncha kursoridan o‘rta nuqta masofasini topish
  document.addEventListener('mousemove', function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var distanceX = mouseX - centerPointX;
    var distanceY = mouseY - centerPointY;

    // Yangi ergashuvchi nuqta koordinatalari
    var newX = centerPointX + distanceX;
    var newY = centerPointY + distanceY;

    // Yangi ergashuvchi nuqtani joylash
    container.style.left = newX + 'px';
    container.style.top = newY + 'px';
  });
});
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault(); // Boshqa sahifaga o'tishni to'xtatamiz
  
  // Foydalanuvchi kiritgan ma'lumotlarni olish
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  
  // Konsolga chiqaramiz
  console.log("Ism: " + username + ", Email: " + email);
  
  // Yoki, ma'lumotlarni yuborish uchun serverga so'rov yuborishingiz mumkin
});

document.getElementById("ekran").innerHTML = ""; // Ekranni tozalash

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculate() {
  var result = document.getElementById('result').value;
  try {
      document.getElementById('result').value = eval(result);
  } catch (error) {
      document.getElementById('result').value = 'Error';
  }
}
var element = document.getElementById("animatedElement");
    var position = 0;
    var speed = 2; // Hızı belirliyoruz

    function moveElement() {
        // Elementin pozisyonunu güncelliyoruz
        position += speed;
        // Eğer elementin pozisyonu ekranın sağ kenarına ulaştıysa başa döndürüyoruz
        if (position > window.innerWidth) {
            position = -100; // Ekranın sol kenarından başlasın
        }
        // Elementin yeni pozisyonunu ayarlıyoruz
        element.style.left = position + "px";
        // Her 10 milisaniyede bir hareketi güncelliyoruz
        setTimeout(moveElement, 10);
    }

    // Animasyonu başlatıyoruz
    moveElement();


  // JavaScript ile animasyonu gerçekleştiriyoruz
  var element = document.getElementById("animatedElement");
  var positionX = 0;
  var positionY = 0;
  var speedX = 2; // X eksenindeki hız
  var speedY = 1; // Y eksenindeki hız

  function moveElement() {
      // Elementin pozisyonunu güncelliyoruz
      positionX += speedX;
      positionY += speedY;

      // Eğer elementin pozisyonu ekranın kenarlarına ulaştıysa yönünü değiştiriyoruz
      if (positionX >= window.innerWidth - 100 || positionX <= 0) {
          speedX = -speedX;
      }
      if (positionY >= window.innerHeight - 100 || positionY <= 0) {
          speedY = -speedY;
      }

      // Elementin yeni pozisyonunu ayarlıyoruz
      element.style.left = positionX + "px";
      element.style.top = positionY + "px";

      // Rastgele bir renk oluşturuyoruz
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      // Elementin rengini güncelliyoruz
      element.style.backgroundColor = randomColor;

      // Her 10 milisaniyede bir hareketi güncelliyoruz
      requestAnimationFrame(moveElement);
  }

  moveElement();

  const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://');

  const text = await page.evaluate(() => {
    return document.body.innerText;
  });
  console.log(text);
  await browser.close();
})();


