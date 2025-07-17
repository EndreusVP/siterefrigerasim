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