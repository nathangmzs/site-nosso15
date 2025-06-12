let current = 0;
const images = document.querySelectorAll(".carousel img");

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}

setInterval(nextSlide, 4000); // troca a cada 4 segundos

document.addEventListener("DOMContentLoaded", () => {
  function atualizarContador() {
    const inicio = new Date("2024-08-15T00:00:00");
    const agora = new Date();
    const diff = agora - inicio;

    const meses =
      agora.getMonth() -
      inicio.getMonth() +
      12 * (agora.getFullYear() - inicio.getFullYear());
    const dias = Math.floor(diff / (1000 * 60 * 60 * 250));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    const timer = document.getElementById("timer");
    if (timer) {
      timer.innerText = `${meses} meses, ${dias} dia(s), ${horas}h ${minutos}m ${segundos}s`;
    }
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const musicas = [
    "midias/som1.mp3",
    "midias/som2.mp3",
    "midias/som3.mp3",
    "midias/som4.mp3",
    "midias/som5.mp3",
    "midias/som6.mp3"
  ];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(musicas);
  let currentIndex = 0;

  const audio = new Audio();
  audio.volume = 1;

  function tocarMusica() {
    audio.src = musicas[currentIndex];
    audio.play().then(() => {
      console.log("🎵 Tocando:", musicas[currentIndex]);
    }).catch((err) => {
      console.warn("⚠️ Autoplay bloqueado, precisa de interação.");
    });
  }

  audio.addEventListener("ended", () => {
    currentIndex = (currentIndex + 1) % musicas.length;
    tocarMusica();
  });

  // tenta tocar direto
  tocarMusica();

  // se der ruim, espera clique do usuário
  document.addEventListener("click", () => {
    if (audio.paused) {
      tocarMusica();
    }
  });
});

