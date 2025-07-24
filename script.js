function openHeart() {
  const container = document.querySelector('.container');
  container.classList.toggle('open');

  const audio = document.getElementById('birthdaySong');

  // Intentar reproducir el audio
  audio.play().then(() => {
    console.log("Audio reproducido con éxito");
  }).catch((error) => {
    console.warn("🎵 El navegador bloqueó el audio, mostrando botón manual.");
    document.getElementById('playButton').style.display = 'block';
  });

  // Lanzar confeti
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
}

function playAudioManually() {
  const audio = document.getElementById('birthdaySong');
  audio.play().then(() => {
    document.getElementById('playButton').style.display = 'none';
  });
}
