////////////////////////HEADER STYLE////////////////////////
let header = document.getElementById('header')
window.addEventListener('scroll', () => {
    if(window.scrollY >= 100){
        header.style.background = '#fff'
    } else {
        header.style.background = 'transparent'
    }
})

////////////////////////Typping Text////////////////////////
function typingEffect(elementId, speed, delay) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    element.innerText = ''; // Limpa o texto original
    element.classList.remove('blink-caret'); // Remove a classe do cursor piscante para reiniciar o efeito

    let index = 0;
    function type() {
        if (index < text.length) {
            const char = text.charAt(index);
            // Adiciona o caractere atual, preservando espaços e outros caracteres
            element.innerHTML += char;
            index++;
            setTimeout(type, speed);
        } else {
            // Adiciona a classe do cursor piscante após o texto ser digitado
            element.classList.add('blink-caret');
            // Reinicia o efeito após um atraso
            setTimeout(() => typingEffect(elementId, speed, delay), delay);
        }
    }

    type();
}
typingEffect('typedText', 200, 2000);

////////////////////////CARROSSEL////////////////////////
document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    let index = 0;
    const intervalTime = 3000; // Tempo em milissegundos para trocar o slide automaticamente
    let autoSlide;

    function showSlide(n) {
        if (n >= totalSlides) {
            index = 0;
        } else if (n < 0) {
            index = totalSlides - 1;
        } else {
            index = n;
        }

        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    function startAutoSlide() {
        autoSlide = setInterval(() => {
            showSlide(index + 1);
        }, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlide);
    }

    nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index + 1);
        startAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        showSlide(index - 1);
        startAutoSlide();
    });

    startAutoSlide(); // Inicia o slideshow automático
});


////////////////////////SCROLL REVEAL////////////////////////
// Inicialize o ScrollReveal
ScrollReveal().reveal('.header-title', { 
    duration: 1500, 
    origin: 'top', 
    distance: '50px', 
    opacity: 0,
    delay: 200,
});

ScrollReveal().reveal('.navbar', { 
    duration: 1500, 
    origin: 'top', 
    distance: '50px', 
    opacity: 0,
    delay: 400,
});

ScrollReveal().reveal('#person', { 
    duration: 1500, 
    origin: 'left', 
    distance: '100px', 
    opacity: 0,
    reset: true,
});

ScrollReveal().reveal('.person-content', { 
    duration: 1500, 
    origin: 'right', 
    distance: '100px', 
    opacity: 0, 
    reset: true,
});

ScrollReveal().reveal('.person-background', { 
    duration: 1500, 
    origin: 'bottom', 
    distance: '100px', 
    opacity: 0,
    reset: true,
});

ScrollReveal().reveal('#about', { 
    duration: 1500, 
    origin: 'left', 
    distance: '100px', 
    opacity: 0,
    reset: true,
});

ScrollReveal().reveal('.box-about', { 
    duration: 1500, 
    origin: 'right', 
    distance: '100px', 
    opacity: 0,
    reset: true,
});

ScrollReveal().reveal('.skills-box', { 
    duration: 1500, 
    origin: 'bottom', 
    distance: '100px', 
    opacity: 0,
    interval: 200, // Adiciona um intervalo entre cada box
    reset: true,
});

ScrollReveal().reveal('#projects', { 
    duration: 1500, 
    origin: 'top', 
    distance: '100px', 
    opacity: 0,
    reset: true,
});

ScrollReveal().reveal('.projects-title', { 
    duration: 1500, 
    origin: 'bottom', 
    distance: '50px', 
    opacity: 0,
    reset: true,
});

////////////////////////SWIPER////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    loop: true, // Habilita o loop infinito
    autoplay: {
        delay: 4000, // Troca automática a cada 3 segundos
        disableOnInteraction: false, // Continua após interação do usuário
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  });
