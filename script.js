
const abrirCarta = document.getElementById("abrirCarta");
const fecharCarta = document.getElementById("fecharCarta");
const modal = document.getElementById("modal");
const areaCoracoes = document.getElementById("coracoes");

function abrirMensagem() {
    modal.classList.add("aberto");
    modal.setAttribute("aria-hidden", "false");
    fecharCarta.focus();
    criarCoracoes(18);
}

function fecharMensagem() {
    modal.classList.remove("aberto");
    modal.setAttribute("aria-hidden", "true");
    abrirCarta.focus();
}

abrirCarta.addEventListener("click", abrirMensagem);
fecharCarta.addEventListener("click", fecharMensagem);

modal.addEventListener("click", function(evento) {
    if (evento.target === modal) {
        fecharMensagem();
    }
});

document.addEventListener("keydown", function(evento) {
    if (evento.key === "Escape" && modal.classList.contains("aberto")) {
        fecharMensagem();
    }
});

function criarCoracoes(quantidade = 1) {
    const emojis = ["💗", "💕", "💖", "💘", "🌸", "✨"];

    for (let i = 0; i < quantidade; i++) {
        const coracao = document.createElement("span");

        coracao.classList.add("coracao");
        coracao.textContent =
            emojis[Math.floor(Math.random() * emojis.length)];

        coracao.style.left = Math.random() * 100 + "%";
        coracao.style.fontSize = (16 + Math.random() * 22) + "px";
        coracao.style.animationDuration = (4 + Math.random() * 4) + "s";
        coracao.style.animationDelay = (Math.random() * 0.8) + "s";

        areaCoracoes.appendChild(coracao);

        coracao.addEventListener("animationend", function() {
            coracao.remove();
        });
    }
}

// Coraçõezinhos aparecem durante a visita.
setInterval(() => {
    if (!document.hidden) {
        criarCoracoes(2);
    }
}, 1200);
