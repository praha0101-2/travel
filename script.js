// Шукаємо кнопку за її ID
const btn = document.getElementById('secretBtn');

// Додаємо подію при натисканні (кліку)
if (btn) {
    btn.addEventListener('click', function() {
        alert('Головний секрет: завжди бери з собою зручне взуття та заряджений павербанк!');
        
        // Змінюємо текст кнопки після натискання
        btn.innerText = "Секрет відкрито!";
        btn.style.backgroundColor = "#e74c3c"; // Змінюємо колір на червоний
    });
}