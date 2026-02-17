// Fecha de inicio de la relación: 17 de febrero de 2023
const startDate = new Date('2023-02-17T00:00:00');

// Función para actualizar el contador
function updateCountdown() {
    const now = new Date();
    const difference = now - startDate;

    // Calcular días, horas, minutos y segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Actualizar el DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Actualizar el contador cada segundo
updateCountdown();
setInterval(updateCountdown, 1000);

// Funcionalidad del sobre
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('click', function() {
    envelope.classList.add('open');
    setTimeout(function() {
        letter.classList.add('show');
    }, 600);
});

// Función para cerrar la carta
function closeLetter() {
    letter.classList.remove('show');
    setTimeout(function() {
        envelope.classList.remove('open');
    }, 500);
}

// Añadir corazones flotantes (opcional, decorativo)
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '-50px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.opacity = '0.6';
    heart.style.zIndex = '0';
    heart.style.pointerEvents = 'none';
    heart.style.transition = 'all 4s ease-in-out';
    
    document.body.appendChild(heart);
    
    setTimeout(function() {
        heart.style.bottom = '110vh';
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(function() {
        heart.remove();
    }, 4100);
}

// Crear corazones flotantes cada 3 segundos
setInterval(createFloatingHeart, 3000);

// Crear algunos corazones al cargar la página
for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingHeart, i * 600);
}
