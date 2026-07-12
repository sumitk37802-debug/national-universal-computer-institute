let slideIndex = 0;
const slides = document.querySelectorAll(".slides");

function showSlides() {
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
    }

    setTimeout(showSlides, 3000);
}

showSlides();