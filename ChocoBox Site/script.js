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

//*Script *//

// Dados das comidas
const foods = [{
        id: 1,
        name: "Pizza Margherita",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        country: "Itália",
        flag: "https://flagcdn.com/w80/it.png",
        price: "€12-20"
    },
    {
        id: 2,
        name: "Sushi",
        image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        country: "Japão",
        flag: "https://flagcdn.com/w80/jp.png",
        price: "¥2000-5000"
    },
    {
        id: 3,
        name: "Feijoada",
        image: "https://images.unsplash.com/photo-1633944097796-3f2a0c0a5a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        country: "Brasil",
        flag: "https://flagcdn.com/w80/br.png",
        price: "R$25-50"
    },
    {
        id: 4,
        name: "Hambúrguer",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        country: "Estados Unidos",
        flag: "https://flagcdn.com/w80/us.png",
        price: "$8-15"
    },
    {
        id: 5,
        name: "Pad Thai",
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        country: "Tailândia",
        flag: "https://flagcdn.com/w80/th.png",
        price: "฿50-120"
    },
    {
        id: 6,
        name: "Paella",
        image: "https://images.unsplash.com/photo-1617196035154-1e2b6ef1a683?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        country: "Espanha",
        flag: "https://flagcdn.com/w80/es.png",
        price: "€15-30"
    },
    {
        id: 7,
        name: "Pho",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        country: "Vietnã",
        flag: "https://flagcdn.com/w80/vn.png",
        price: "₫40,000-80,000"
    },
    {
        id: 8,
        name: "Moussaka",
        image: "https://images.unsplash.com/photo-1633945274309-2c16cf8787b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        country: "Grécia",
        flag: "https://flagcdn.com/w80/gr.png",
        price: "€10-18"
    }
];

// Elementos do DOM
const foodContainer = document.getElementById('food-container');
const searchInput = document.getElementById('search-input');

// Objeto para armazenar as avaliações
const ratings = {};

// Inicializar avaliações
foods.forEach(food => {
    ratings[food.id] = 0;
});

// Função para renderizar as comidas
function renderFoods(foodsToRender) {
    foodContainer.innerHTML = '';

    if (foodsToRender.length === 0) {
        foodContainer.innerHTML = '<div class="no-results">Nenhuma comida encontrada. Tente outro termo de busca.</div>';
        return;
    }

    foodsToRender.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';

        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}" class="food-image">
            <div class="food-info">
                <div class="food-header">
                    <h3 class="food-name">${food.name}</h3>
                    <div class="food-origin">
                        <img src="${food.flag}" alt="${food.country}" class="flag">
                        <span class="country-name">${food.country}</span>
                    </div>
                </div>
                <div class="food-price">Preço médio: ${food.price}</div>
                <div class="rating" data-food-id="${food.id}">
                    <i class="fas fa-star star" data-rating="1"></i>
                    <i class="fas fa-star star" data-rating="2"></i>
                    <i class="fas fa-star star" data-rating="3"></i>
                    <i class="fas fa-star star" data-rating="4"></i>
                    <i class="fas fa-star star" data-rating="5"></i>
                </div>
            </div>
        `;

        foodContainer.appendChild(foodCard);
    });

    // Adicionar event listeners para as estrelas
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
            const foodId = parseInt(this.parentElement.getAttribute('data-food-id'));
            const ratingValue = parseInt(this.getAttribute('data-rating'));

            // Atualizar a avaliação
            ratings[foodId] = ratingValue;

            // Atualizar a exibição das estrelas
            const stars = this.parentElement.querySelectorAll('.star');
            stars.forEach((s, index) => {
                if (index < ratingValue) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            console.log(`Avaliação salva: Comida ${foodId} - ${ratingValue} estrelas`);
            // Aqui você poderia salvar no localStorage ou enviar para um servidor
        });
    });
}

// Função para filtrar comidas
function filterFoods(searchTerm) {
    const filtered = foods.filter(food =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        food.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderFoods(filtered);
}

// Event listener para a busca
searchInput.addEventListener('input', function() {
    filterFoods(this.value);
});

// Renderizar todas as comidas inicialmente
renderFoods(foods);


//Script De Entrada do Formulario

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('orcamentoForm');
    const modal = document.getElementById('confirmationModal');
    const closeModal = document.querySelector('.close');
    const confirmBtn = document.getElementById('confirmBtn');
    const resetBtn = document.getElementById('resetBtn');
    const telefoneInput = document.getElementById('telefone');

    // Máscara para telefone
    telefoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 11) {
            value = value.substring(0, 11);
        }

        if (value.length > 0) {
            value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
        }

        e.target.value = value;
    });

    // Validação em tempo real
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                validateField(this);
            }
        });
    });

    // Função de validação de campo
    function validateField(field) {
        const errorElement = document.getElementById(`${field.id}-error`);

        if (field.required && !field.value.trim()) {
            showError(field, errorElement, 'Este campo é obrigatório');
            return false;
        }

        if (field.type === 'email' && !isValidEmail(field.value)) {
            showError(field, errorElement, 'Por favor, insira um email válido');
            return false;
        }

        if (field.id === 'telefone' && !isValidPhone(field.value)) {
            showError(field, errorElement, 'Por favor, insira um telefone válido');
            return false;
        }

        if ((field.id === 'dataIda' || field.id === 'dataVolta') && !isValidDate(field)) {
            showError(field, errorElement, 'Por favor, insira uma data válida');
            return false;
        }

        if (field.id === 'dataVolta' && !isValidReturnDate()) {
            showError(field, errorElement, 'A data de volta deve ser após a data de ida');
            return false;
        }

        showSuccess(field, errorElement);
        return true;
    }

    // Funções auxiliares de validação
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        const digits = phone.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 11;
    }

    function isValidDate(dateField) {
        if (!dateField.value) return false;

        const date = new Date(dateField.value);
        const minDate = new Date(dateField.min);
        const maxDate = new Date(dateField.max);

        return date >= minDate && date <= maxDate;
    }

    function isValidReturnDate() {
        const dataIda = document.getElementById('dataIda');
        const dataVolta = document.getElementById('dataVolta');

        if (!dataIda.value || !dataVolta.value) return true;

        return new Date(dataVolta.value) >= new Date(dataIda.value);
    }

    // Mostrar erro/sucesso
    function showError(field, errorElement, message) {
        field.classList.add('invalid');
        field.classList.remove('valid');
        errorElement.textContent = message;
    }

    function showSuccess(field, errorElement) {
        field.classList.remove('invalid');
        field.classList.add('valid');
        errorElement.textContent = '';
    }

    // Envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        form.querySelectorAll('input').forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            showConfirmation();
        }
    });

    // Mostrar confirmação
    function showConfirmation() {
        const formData = new FormData(form);
        const confirmationData = document.getElementById('confirmationData');

        let html = `
            <p><strong>Nome:</strong> ${formData.get('nome')} ${formData.get('sobrenome')}</p>
            <p><strong>Email:</strong> ${formData.get('email')}</p>
            <p><strong>Telefone:</strong> ${formData.get('telefone')}</p>
            <p><strong>Destino:</strong> ${formData.get('destino')}</p>
            <p><strong>Data de ida:</strong> ${formatDate(formData.get('dataIda'))}</p>
            <p><strong>Data de volta:</strong> ${formatDate(formData.get('dataVolta'))}</p>
        `;

        confirmationData.innerHTML = html;
        modal.style.display = 'block';
    }

    // Formatar data
    function formatDate(dateString) {
        if (!dateString) return '';
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    }

    // Fechar modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    confirmBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        form.reset();
        form.querySelectorAll('input').forEach(input => {
            input.classList.remove('valid', 'invalid');
            document.getElementById(`${input.id}-error`).textContent = '';
        });
        alert('Obrigado! Seu orçamento foi recebido e em breve entraremos em contato.');
    });

    // Resetar formulário
    resetBtn.addEventListener('click', function() {
        form.querySelectorAll('input').forEach(input => {
            input.classList.remove('valid', 'invalid');
            document.getElementById(`${input.id}-error`).textContent = '';
        });
    });

    // Fechar modal ao clicar fora
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});