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
    // Efecto de confetti al abrir
    createConfetti();
    setTimeout(function() {
        letter.classList.add('show');
    }, 700);
});

// Función para cerrar la carta
function closeLetter() {
    letter.classList.remove('show');
    setTimeout(function() {
        envelope.classList.remove('open');
    }, 500);
}

// Sistema de partículas flotantes
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.speed = 0.5 + Math.random() * 1.5;
        this.size = 2 + Math.random() * 3;
        this.opacity = 0.3 + Math.random() * 0.5;
        
        // Diferentes símbolos románticos
        const symbols = ['❤', '💕', '💖', '💗', '💓', '💝', '✨', '⭐', '🌸', '🌹'];
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        
        this.swing = Math.random() * 2 * Math.PI;
        this.swingSpeed = 0.01 + Math.random() * 0.02;
        this.swingAmount = 30 + Math.random() * 50;
    }

    update() {
        this.y -= this.speed;
        this.swing += this.swingSpeed;
        this.x += Math.sin(this.swing) * 0.5;

        if (this.y < -20) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size * 8}px Arial`;
        ctx.fillText(this.symbol, this.x, this.y);
        ctx.restore();
    }
}

// Crear partículas
const particles = [];
for (let i = 0; i < 30; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animateParticles);
}

animateParticles();

// Efecto confetti al abrir la carta
function createConfetti() {
    const colors = ['#ff6b6b', '#ff8787', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff', '#ff6348'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '999';
            
            document.body.appendChild(confetti);
            
            const angle = (Math.PI * 2 * i) / confettiCount;
            const velocity = 5 + Math.random() * 10;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let x = 0, y = 0;
            let opacity = 1;
            let rotation = 0;
            
            const animation = setInterval(() => {
                x += vx;
                y += vy + 2;
                opacity -= 0.02;
                rotation += 10;
                
                confetti.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
                confetti.style.opacity = opacity;
                
                if (opacity <= 0) {
                    clearInterval(animation);
                    confetti.remove();
                }
            }, 20);
        }, i * 10);
    }
}
