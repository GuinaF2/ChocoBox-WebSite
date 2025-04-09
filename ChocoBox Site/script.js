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

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const countryCards = document.querySelectorAll('.country-card');
    const noResults = document.getElementById('noResults');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        let hasResults = false;
        
        countryCards.forEach(card => {
            const searchData = card.getAttribute('data-search').toLowerCase();
            if (searchData.includes(searchTerm)) {
                card.style.display = 'block';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });
        
        noResults.style.display = hasResults ? 'none' : 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = parseInt(this.getAttribute('data-value'));
            const ratingContainer = this.closest('.rating');
            const ratingValue = ratingContainer.querySelector('.rating-value');
            const starsInGroup = ratingContainer.querySelectorAll('.star');
            
            // Atualiza o atributo data-rating
            ratingContainer.setAttribute('data-rating', value);
            
            // Atualiza o display das estrelas
            starsInGroup.forEach((s, index) => {
                if (index < value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
            
            // Atualiza o texto de avaliação
            ratingValue.textContent = `${value}/5`;
        });
        
        // Efeito hover
        star.addEventListener('mouseover', function() {
            const value = parseInt(this.getAttribute('data-value'));
            const ratingContainer = this.closest('.rating');
            const starsInGroup = ratingContainer.querySelectorAll('.star');
            
            starsInGroup.forEach((s, index) => {
                if (index < value) {
                    s.style.color = '#ffc107';
                }
            });
        });
        
        star.addEventListener('mouseout', function() {
            const ratingContainer = this.closest('.rating');
            const currentRating = parseInt(ratingContainer.getAttribute('data-rating'));
            const starsInGroup = ratingContainer.querySelectorAll('.star');
            
            starsInGroup.forEach((s, index) => {
                if (index >= currentRating) {
                    s.style.color = '#ddd';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Elementos do formulário
    const formOrcamento = document.getElementById('form-orcamento');
    const btnEnviar = document.getElementById('btn-enviar');
    const modal = document.getElementById('modal-confirmacao');
    const spanFechar = document.querySelector('.modal .fechar');
    const btnConfirmar = document.getElementById('btn-confirmar');

    // Validação em tempo real para campos de entrada
    formOrcamento.querySelectorAll('input, select, textarea').forEach(campo => {
        campo.addEventListener('blur', function() {
            validarCampo(this);
        });
    });

    // Validação ao enviar
    btnEnviar.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Valida todos os campos
        const campos = formOrcamento.querySelectorAll('input, select, textarea');
        let formularioValido = true;
        
        campos.forEach(campo => {
            if (!validarCampo(campo)) {
                formularioValido = false;
            }
        });

        if (formularioValido) {
            modal.style.display = 'block';
        } else {
            alert('Por favor, preencha todos os campos corretamente antes de enviar.');
        }
    });

    // Fechar modal
    spanFechar.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Confirmar envio
    btnConfirmar.addEventListener('click', function() {
        enviarOrcamento();
    });

    // Função para validar um campo individual
    function validarCampo(campo) {
        const valor = campo.value.trim();
        const errorSpan = campo.nextElementSibling; // Assume que o span de erro vem logo após o campo
        let valido = true;

        // Limpa mensagens anteriores
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.textContent = '';
            campo.classList.remove('campo-invalido');
        }

        // Validações específicas por campo
        switch(campo.id) {
            case 'nome':
                if (valor.length < 3) {
                    mostrarErro(campo, errorSpan, 'Nome deve ter pelo menos 3 caracteres');
                    valido = false;
                }
                break;
                
            case 'email':
                if (!validarEmail(valor)) {
                    mostrarErro(campo, errorSpan, 'Por favor, insira um e-mail válido');
                    valido = false;
                }
                break;
                
            case 'telefone':
                if (!validarTelefone(valor)) {
                    mostrarErro(campo, errorSpan, 'Por favor, insira um telefone válido');
                    valido = false;
                }
                break;
                
            case 'servico':
                if (valor === '') {
                    mostrarErro(campo, errorSpan, 'Por favor, selecione um serviço');
                    valido = false;
                }
                break;
                
            case 'descricao':
                if (valor.length < 10) {
                    mostrarErro(campo, errorSpan, 'Descrição deve ter pelo menos 10 caracteres');
                    valido = false;
                }
                break;
                
            case 'prazo':
                if (!validarPrazo(valor)) {
                    mostrarErro(campo, errorSpan, 'Por favor, insira uma data futura no formato DD/MM/AAAA');
                    valido = false;
                }
                break;
        }

        return valido;
    }

    // Mostra mensagem de erro
    function mostrarErro(campo, errorSpan, mensagem) {
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.textContent = mensagem;
            campo.classList.add('campo-invalido');
        }
    }

    // Valida formato de e-mail
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Valida formato de telefone brasileiro
    function validarTelefone(telefone) {
        const re = /^\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}$/;
        return re.test(telefone);
    }

    // Valida data (formato DD/MM/AAAA e deve ser futura)
    function validarPrazo(prazo) {
        const re = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!re.test(prazo)) return false;
        
        const partes = prazo.split('/');
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const ano = parseInt(partes[2], 10);
        const data = new Date(ano, mes, dia);
        
        return data.getDate() === dia && 
               data.getMonth() === mes && 
               data.getFullYear() === ano &&
               data > new Date();
    }

    // Simula o envio do formulário
    function enviarOrcamento() {
        // Coleta os dados do formulário
        const dados = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            servico: document.getElementById('servico').value,
            descricao: document.getElementById('descricao').value,
            prazo: document.getElementById('prazo').value
        };

        // Aqui você pode adicionar uma chamada AJAX para enviar os dados
        console.log('Dados do orçamento:', dados);
        
        // Feedback ao usuário
        modal.style.display = 'none';
        formOrcamento.reset();
        
        alert('Orçamento enviado com sucesso! Entraremos em contato em breve.');
    }
});