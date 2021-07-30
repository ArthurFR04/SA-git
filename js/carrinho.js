let carrinho = document.querySelectorAll('.addcarrinho-1');

let produtos = [
    {
        nome: "Caneca JavaScript",
        codigo: "canecajs",
        preco: "29.90",
        carrinho: 0
    },

];

for (let i = 0; i < carrinho.length; i++) {
    carrinho[i].addEventListener('click', () => {
        console.log('adicionado ao carrinho');
        indexCarrinho(produtos[i]);
    })
};

function onLoadSpanCarrinho() {
    let indexProduto = localStorage.getItem('indexCarrinho');

    if (indexProduto) {
        document.querySelector('.nav-link span').textContent = indexProduto;
    }
};

function indexCarrinho(produtos) {
    let indexProduto = localStorage.getItem('indexCarrinho');

    indexProduto = parseInt(indexProduto);


    if (indexCarrinho) {
        localStorage.setItem('indexCarrinho', indexCarrinho + 1);
        document.querySelector('.nav-link span').textContent = indexProduto + 1;
    } else {
        localStorage.setItem('indexCarrinho', 1);
        document.querySelector('.nav-link span').textContent = 1;
    }
};

onLoadConferenciaCarrinho();