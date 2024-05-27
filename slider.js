document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const offset = -currentIndex * 100;
        slidesContainer.style.transform = `translateX(${offset}%)`;
    }

    // Cambia de slide cada 4 segundos
    setInterval(showNextSlide, 4000);
});