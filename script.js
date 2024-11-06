let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".banner");
    currentIndex = (currentIndex + step + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const slides = document.querySelectorAll(".banner");
    const offset = -currentIndex * 100;
    document.querySelector(".carrosel-banners").style.transform = `translateX(${offset}%)`;

    // Atualiza os indicadores
    const indicators = document.querySelectorAll(".linha");
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
}

// Inicializa o estado do carrossel
updateCarousel();