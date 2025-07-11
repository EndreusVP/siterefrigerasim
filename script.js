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

