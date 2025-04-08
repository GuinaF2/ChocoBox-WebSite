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
    const container = document.querySelector(".container_gastronomia");
    const images = document.querySelectorAll(".container_gastronomia img");
    let index = 0;

    function moveCarousel() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        const offset = -index * container.clientWidth;
        container.style.transform = `translateX(${offset}px)`;
    }

    setInterval(moveCarousel, 3000); // Troca de imagem a cada 3 segundos
});



document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carrossel1 img");
    let currentIndex = 0;

    function showNextImage() {
        // Remove a classe "active" da imagem atual
        images[currentIndex].classList.remove("active");

        // Incrementa o índice para a próxima imagem
        currentIndex = (currentIndex + 1) % images.length;

        // Adiciona a classe "active" à próxima imagem
        images[currentIndex].classList.add("active");
    }

    // Inicializa a primeira imagem como ativa
    images[currentIndex].classList.add("active");

    // Define o intervalo para alternar as imagens a cada 3 segundos
    setInterval(showNextImage, 3000);
});


//*carrossel1 *//
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const images = document.querySelectorAll(".container img");
    let index = 0;

    function moveCarousel() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        const offset = -index * 100; // Move 100% para cada imagem
        container.style.transform = `translateX(${offset}%)`;
    }

    setInterval(moveCarousel, 3000); // Troca de imagem a cada 3 segundos
});