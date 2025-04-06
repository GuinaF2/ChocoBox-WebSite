// Seleciona o container que contém as imagens
const imgsContainer = document.getElementById("img");
// Seleciona todas as imagens dentro do container
const imgs = document.querySelectorAll("#img img");

// Índice que controla qual imagem está sendo exibida
let idx = 0;

// Função que move o carrossel para a próxima imagem
function carrossel() {
    const imgWidth = imgs[0].clientWidth; // Calcula a largura de uma imagem dinamicamente
    idx++; // Incrementa o índice para ir para a próxima imagem
    if (idx >= imgs.length) {
        idx = 0; // Reinicia o índice quando atingir o final
    }
    // Move o container para a esquerda com base no índice e na largura da imagem
    imgsContainer.style.transform = `translateX(${-idx * imgWidth}px)`;
    imgsContainer.style.transition = "transform 0.5s ease-in-out"; // Adiciona uma transição suave
}

// Inicia o carrossel automaticamente após o carregamento da página
window.addEventListener("load", () => {
    setInterval(carrossel, 2000); // Troca de imagem a cada 2 segundos
});