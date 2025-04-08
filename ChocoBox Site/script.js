document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carrossel img");
    let currentIndex = 0;

    function showNextImage() {
        // Remove a classe "active" da imagem atual
        images[currentIndex].classList.remove("active");

        // Incrementa o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;

        // Adiciona a classe "active" à próxima imagem
        images[currentIndex].classList.add("active");
    }

    // Define o intervalo para alternar as imagens a cada 3 segundos
    setInterval(showNextImage, 3000);

    // Inicializa a primeira imagem como ativa
    images[currentIndex].classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carrossel-paises img");
    let currentIndex = 0;

    function showNextImage() {
        // Remove a classe "active" da imagem atual
        images[currentIndex].classList.remove("active");

        // Incrementa o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;

        // Adiciona a classe "active" à próxima imagem
        images[currentIndex].classList.add("active");
    }

    // Define o intervalo para alternar as imagens a cada 3 segundos
    setInterval(showNextImage, 3000);

    // Inicializa a primeira imagem como ativa
    images[currentIndex].classList.add("active");
});


//* nao vai ahhh**//