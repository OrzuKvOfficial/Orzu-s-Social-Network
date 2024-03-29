function ochishNarsalar() {
    // Bu funksiya sizning asosiy narsalarni ochish loyihangizni amalga oshiradi
    // Masalan:
    document.getElementById("asosiy-narsalar").style.display = "block";
}

document.getElementById("kirishButton").addEventListener('click', function() {
    var parol = document.getElementById("parolInput").value;

    // Agar parol to'g'ri bo'lsa, asosiy narsalarni ochish funktsiyasini chaqiring
    if (parol === "Orzu") { // <-- Parolni o'zgartiring
        ochishNarsalar();
        document.getElementById("parolInput").value = ''; // Parolni kiritgandan so'ng inputni tozalaymiz
    } else {
        // Aks holda, foydalanuvchiga kirishni rad etish xabari chiqariladi
        alert("Parol noto'g'ri. Kirishga ruxsat bermaymiz!");
        document.getElementById("parolInput").value = ''; // Parol xatoligi uchun inputni tozalaymiz
    }
});