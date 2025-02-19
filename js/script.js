// パララックス
document.addEventListener('scroll', () => {
    const image = document.querySelector('.parallax-image');
    const scrollPosition = window.scrollY;
    const parallaxSpeed = 0.01; // スクロールの速さを調整

    if (image) {
        image.style.transform = `translateY(${scrollPosition * parallaxSpeed}px)`;
    }
});

// topへ戻るボタン
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

// disabled(無効化)
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".form-button");

    submitButton.addEventListener("click", function () {
        submitButton.disabled = true;
    });
});

// モーダル
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

// モーダルを開く
openModalBtn.addEventListener("click", (event) => {
  event.preventDefault(); // href="#" のデフォルト動作を無効化
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // 背景スクロールを無効化
});

// モーダルを閉じる
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = ""; // スクロールを元に戻す
});

// モーダルの外側をクリックしたら閉じる
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = ""; // スクロールを元に戻す
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // デフォルトのジャンプ動作を無効化

        const targetId = this.getAttribute('href').substring(1); // #を除いたIDを取得
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // 対象要素の位置までスクロール
                behavior: 'smooth' // スムーズにスクロール
            });
        }
    });
});
