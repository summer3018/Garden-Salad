
document.addEventListener('scroll', () => {
    const image = document.querySelector('.parallax-image');
    const scrollPosition = window.scrollY;
    const parallaxSpeed = 0.01; // スクロールの速さを調整

    if (image) {
        image.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const pageTopBtn = document.querySelector(".page-top__btn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            pageTopBtn.style.opacity = "1";  // 表示
            pageTopBtn.style.pointerEvents = "auto";
        } else {
            pageTopBtn.style.opacity = "0";  // 非表示
            pageTopBtn.style.pointerEvents = "none";
        }
    });

    pageTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" }); // スムーズにトップへスクロール
    });
});
