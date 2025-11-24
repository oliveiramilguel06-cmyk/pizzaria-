// ========== NAVEGAÇÃO ENTRE ABAS - SEM RECARREGAR A PÁGINA ==========

// Selecionar todos os links de navegação
const navLinks = document.querySelectorAll('.nav-link');

// Selecionar todas as seções
const sections = document.querySelectorAll('.section');

// Adicionar evento de clique em cada link do menu
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevenir comportamento padrão do link
        e.preventDefault();
        
        // Pegar o nome da seção do atributo data-section
        const sectionName = this.getAttribute('data-section');
        
        // Remover classe 'active' de todos os links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        
        // Adicionar classe 'active' no link clicado
        this.classList.add('active');
        
        // Esconder todas as seções
        sections.forEach(section => section.classList.remove('active'));
        
        // Mostrar apenas a seção clicada
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        
        // Scroll suave para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ========== FUNCIONALIDADE DOS BOTÕES "COMPRAR" ==========

// Variáveis globais para armazenar pizza selecionada
let selectedPizza = '';
let basePrice = 0;

// Selecionar elementos do modal
const modal = document.getElementById('sizeModal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');
const modalPizzaName = document.getElementById('modalPizzaName');

// Selecionar todos os botões de compra
const buyButtons = document.querySelectorAll('.btn-buy');

// Adicionar evento de clique em cada botão de compra
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Pegar o nome da pizza e preço base do atributo data
        selectedPizza = this.getAttribute('data-pizza');
        const priceString = this.getAttribute('data-price');
        basePrice = parseFloat(priceString.replace(',', '.'));
        
        // Atualizar nome da pizza no modal
        modalPizzaName.textContent = `Pizza de ${selectedPizza}`;
        
        // Calcular preços para cada tamanho
        calculatePrices();
        
        // Abrir o modal
        openModal();
    });
});

// Função para calcular preços baseado no tamanho
function calculatePrices() {
    // Pequena: adicionar entre 10 a 15 reais (faixa 40-50)
    const pequenaPrice = Math.max(40, Math.min(50, basePrice + 10));
    
    // Média: dobrar o preço base, manter entre 60-80
    const mediaPrice = Math.max(60, Math.min(80, basePrice * 2));
    
    // Grande: triplicar o preço base, manter entre 80-100
    const grandePrice = Math.max(80, Math.min(100, basePrice * 2.5));
    
    // Atualizar os preços no modal
    document.getElementById('price-pequena').textContent = `R$ ${pequenaPrice.toFixed(2).replace('.', ',')}`;
    document.getElementById('price-media').textContent = `R$ ${mediaPrice.toFixed(2).replace('.', ',')}`;
    document.getElementById('price-grande').textContent = `R$ ${grandePrice.toFixed(2).replace('.', ',')}`;
}

// Função para abrir o modal
function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll da página
}

// Função para fechar o modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
}

// Eventos para fechar o modal
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Selecionar todos os botões de seleção de tamanho
const selectSizeButtons = document.querySelectorAll('.btn-select-size');

selectSizeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const size = this.getAttribute('data-size');
        const priceElement = document.getElementById(`price-${size}`);
        const finalPrice = priceElement.textContent;
        
        // Informações sobre o tamanho
        let sizeInfo = '';
        if (size === 'pequena') {
            sizeInfo = 'Tamanho: Pequena (4 fatias • 25cm • Serve 1 pessoa)';
        } else if (size === 'media') {
            sizeInfo = 'Tamanho: Média (6 fatias • 30cm • Serve 2-3 pessoas)';
        } else if (size === 'grande') {
            sizeInfo = 'Tamanho: Grande (8 fatias • 35cm • Serve 3-4 pessoas)';
        }
        
        // Fechar o modal
        closeModal();
        
        // Mostrar confirmação do pedido
        setTimeout(() => {
            alert(`🍕 Pedido enviado ao atendente!\n\nPizza: ${selectedPizza}\n${sizeInfo}\nValor: ${finalPrice}\n\nEm breve você receberá a confirmação via WhatsApp!`);
        }, 300);
    });
});

// ========== ANIMAÇÃO DE SCROLL (OPCIONAL) ==========

// Detectar scroll para adicionar efeito no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ========== LOG DE INICIALIZAÇÃO ==========
console.log('🍕 Pizzas do Matheus - Site carregado com sucesso!');
console.log('📱 Pronto para receber pedidos via WhatsApp');
