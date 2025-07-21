const entrada = document.getElementById("entrada");
const texto = "Conserto e Manutenção de Refrigeração com Qualidade e Rapidez";
let index = 0;

const inserirTexto = () => {
    if(index < texto.length) {
        entrada.textContent += texto.charAt(index);
        index++;
        setTimeout(inserirTexto, 30);
    }
}

inserirTexto();

const enviarMensagem = () => {
  let mensagem = document.getElementById("mensagem").value.trim();

  if (!mensagem) {
    alert("Por favor, digite uma mensagem antes de enviar.");
    return;
  }

  const emailDestino = "endreus.valerio007@gmail.com";
  const assunto = "Orçamento";
  const corpo = encodeURIComponent(mensagem);

  window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${corpo}`;
}

/*tsParticles.load("particulas", {
    fullScreen: {enable: false},
     particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.7, random: true },
      size: { value: 3, random: true },
      move: {
        enable: true,
        direction: "bottom",
        speed: 1,
        straight: false
      }
    },
    background: {
      color: "transparent"
    }
});*/