function openHeart() {
  const container = document.querySelector('.container');
  container.classList.toggle('open');

  // Reproducir audio si no está sonando
  const audio = document.getElementById('birthdaySong');

  if (audio.paused) {
    audio.play().catch((error) => {
      console.warn("🎵 El navegador bloqueó el audio. Intenta hacer clic de nuevo o permitir sonido.");
    });
  }

  // Lanzar confeti
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
}
