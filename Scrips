function openHeart() {
  const container = document.querySelector('.container');
  container.classList.toggle('open');

  // Reproducir música
  const audio = document.getElementById('birthdaySong');
  audio.play().catch((e) => {
    console.log("Autoplay bloqueado, el usuario debe interactuar primero.");
  });

  // Lanzar confeti
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
}
