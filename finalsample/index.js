document.addEventListener("DOMContentLoaded", function () {
    var images = [
      'img/SEED爆発.jpg',
      'img/キラクス.jpg',
      'img/アスカガ.jpg'
    ];

    var currentIndex = 0;

    function changeBackground() {
      document.body.style.backgroundImage = 'url(' + images[currentIndex] + ')';
      currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();

    setInterval(changeBackground, 5000);
  });