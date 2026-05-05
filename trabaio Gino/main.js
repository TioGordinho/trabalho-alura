const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");

const tempos = [
    new Date("2026-06-30T00:00:00"),
    new Date("2026-06-30T00:00:00"),
    new Date("2026-06-30T00:00:00"),
    new Date("2026-06-30T00:00:00")
];

function atualizarContadores() {
    const agora = new Date();

    for (let i = 0; i < contadores.length; i++) {
        const diferenca = tempos[i] - agora;

        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        const numeros = contadores[i].querySelectorAll(".contador-numero");

        numeros[0].textContent = dias;
        numeros[1].textContent = horas;
        numeros[2].textContent = minutos;
        numeros[3].textContent = segundos;
    }
}

atualizarContadores();
setInterval(atualizarContadores, 1000);