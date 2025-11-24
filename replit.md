# Pizzas do Matheus - Landing Page

## Visão Geral
Landing page responsiva para a Pizzaria do Matheus, criada com HTML, CSS e JavaScript puros. O site apresenta menu de navegação fixo, banner principal com call-to-action para WhatsApp, e cardápio interativo com funcionalidade de compra.

## Estrutura do Projeto
```
/
├── index.html      # Estrutura HTML principal
├── style.css       # Estilos e responsividade
├── script.js       # Funcionalidades JavaScript
└── .gitignore      # Arquivos ignorados pelo Git
```

## Características Principais
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Menu Fixo**: Navegação entre abas Home e Cardápio sem reload
- **Cores Temáticas**: Vermelho, verde e amarelo (tema pizzaria)
- **Integração WhatsApp**: Botão direto para fazer pedidos
- **Cardápio Interativo**: 13 sabores com imagens reais e botões de compra funcionais

## Funcionalidades Implementadas

### Home
- Banner hero com imagem de pizza em alta qualidade
- Frase chamativa: "A melhor pizza da cidade!"
- Botão WhatsApp redirecionando para `https://wa.me/5599999999999`
- Seção de diferenciais (Massa Artesanal, Entrega Rápida, Qualidade)

### Cardápio
**13 sabores disponíveis, cada um com imagem real do Unsplash:**
1. Pizza de Mussarela — R$ 29,90
2. Pizza de Calabresa — R$ 34,90
3. Pizza Portuguesa — R$ 39,90
4. Pizza Margherita — R$ 36,90
5. Pizza Pepperoni — R$ 38,90
6. Pizza Quatro Queijos — R$ 42,90
7. Pizza Frango com Catupiry — R$ 37,90
8. Pizza Bacon — R$ 40,90
9. Pizza Napolitana — R$ 35,90
10. Pizza Vegetariana — R$ 36,90
11. Pizza Lombo Canadense — R$ 39,90
12. Pizza Atum — R$ 41,90
13. Pizza de Chocolate — R$ 32,90

- Cada pizza possui imagem de alta qualidade (via Unsplash)
- Descrição detalhada dos ingredientes
- Botão "Comprar" que abre modal de seleção de tamanho
- **Sistema de Seleção de Tamanho:**
  - **Pequena:** 4 fatias, 25cm, serve 1 pessoa (R$ 40-50)
  - **Média:** 6 fatias, 30cm, serve 2-3 pessoas (R$ 60-80) - Mais pedida
  - **Grande:** 8 fatias, 35cm, serve 3-4 pessoas (R$ 80-100)
- Ao selecionar tamanho: alerta personalizado com todas as informações do pedido

## Tecnologias
- HTML5 puro
- CSS3 com Flexbox e Grid
- JavaScript Vanilla (sem frameworks)
- Google Fonts (Poppins)
- Imagens via Unsplash e Placeholder.com

## Como Executar
O site é servido via Python HTTP Server na porta 5000:
```bash
python -m http.server 5000
```

## Imagens das Pizzas
Todas as 13 pizzas agora usam imagens locais da pasta `images/`:
1. mussarela.jpg ✓
2. calabresa.jpg ✓
3. portuguesa.jpg ✓
4. margherita.jpg ✓
5. pepperoni.jpg ✓
6. quatro_queijos.jpg ✓
7. frango_catupiry.jpg ✓
8. bacon.jpg ✓
9. napolitana.jpg ✓
10. vegetariana.jpg ✓
11. lombo_canadense.jpg ✓
12. atum.jpg ✓
13. chocolate.jpg ✓

Total: 7.5MB de imagens de alta qualidade

## Data de Criação
22 de Novembro de 2025

## Última Atualização
24 de Novembro de 2025 - Imagens locais do usuário adicionadas

## Observações Técnicas
- Site totalmente estático, sem backend necessário
- Navegação SPA-style (Single Page Application) com JavaScript
- Código comentado em português para fácil manutenção
- Mobile-first com media queries para responsividade
- **Imagens:** Armazenadas localmente na pasta `images/` com alta qualidade (PNG/JPG)
