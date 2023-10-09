document.addEventListener("DOMContentLoaded", function() {
  // Simulacija vremena učitavanja - postavite vreme na 3000ms (3 sekunde) ili više po potrebi
  setTimeout(function() {
    var loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.classList.add("hidden");
  }, 2000); // 3000ms = 3 sekunde
});
