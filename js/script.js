
document.addEventListener('scroll', () => {
    const image = document.querySelector('.parallax-image');
    const scrollPosition = window.scrollY;
    const parallaxSpeed = 0.01; // スクロールの速さを調整

    if (image) {
        image.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
    }
});

