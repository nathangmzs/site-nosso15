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
      timer.innerText = `${meses} mês(es), ${dias} dia(s), ${horas}h ${minutos}m ${segundos}s`;
    }
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
});

