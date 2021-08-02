let carrinho = document.querySelectorAll('.addcarrinho');

let produtos = [                                    // estabeleço os produtos dentro do array de obj
    {
        nome: "Caneca JavaScript",
        codigo: "canecajs",                 
        preco: 20,
        carrinho: 0         // bem interessante essa tag, dá pra ver através do LS se esse obj tá no carrinho se ele estiver com esse valor "1"                           
    },
    {
        nome: "Caneca Node JS",
        codigo: "canecanode",
        preco: 30,
        carrinho: 0         
    },
];

for (let i = 0; i < carrinho.length; i++) {
    carrinho[i].addEventListener('click', () => {
        console.log('adicionado ao carrinho, chefe');       // loop com eventListener, pra me informar quando houver um click e acionar minhas funções
        indexCarrinho(produtos[i]);                         // (além de percorrer meu carrinho pra me ajudar com atualização de index)
        somaTotalCarrinho(produtos[i]);
    })
};

function indexCarrinho(produto) {                                                           // essa function seta uma key 'indexCarrinho' no LS. eu uso ela pra atualizar o span do "carrinho de compras" no navbar
    let indexCarrinho = localStorage.getItem('indexCarrinho');                              // precisa mudar manualmente o typeof desse pull. ele vem como string, lembra?

    indexCarrinho = JSON.parse(indexCarrinho);                                              // pronto, agora vai dar pra somar quando mais produtos entrarem no carrinho ⬇⬇⬇⬇
    
    if (indexCarrinho) {                                                                    // se for true, ou seja, se existir algum valor                     
    localStorage.setItem('indexCarrinho', indexCarrinho + 1);                               // ele pega a variável que eu peguei do LS na linha 27 e adiciona 1 ao valor dela no LS                       
        document.querySelector('.nav-link span').textContent = indexCarrinho + 1;           // e adiciona 1 ao valor do span do carrinho na index
    } else {
        localStorage.setItem('indexCarrinho', 1);                                   // se não tem nada (se for o primeiro produto no carrinho), ele só seta o número 1. os próximos vão cair no if aqui de cima ↖↖↖↖
        document.querySelector('.nav-link span').textContent = 1;                   // ele também muda no span do "carrinh de compras" na index, claro.
    }

    setItens(produto);
};

function onLoadConferenciaCarrinho() {                                  // meu span não tava puxando do LS os valores, essa function faz isso
    let indexProduto = localStorage.getItem('indexCarrinho');           // dou pull no indexCarrinho pra ver quantos tem -- dessa vez não precisa transformar em numero pq a soma já tá sendo feita na função de cima, então tanto faz

    if (indexProduto) {                                                         // se existe qualquer valor nessa variável, é true 
        document.querySelector('.nav-link span').textContent = indexProduto;    // -- aí ele vai lá e seta de novo o textcontent do span
    }
};

function setItens(produto) {
    let itensDentroCarrinho = localStorage.getItem('produtosNoCarrinho');
    itensDentroCarrinho = JSON.parse(itensDentroCarrinho);
    
    if (itensDentroCarrinho != null) {

        if (itensDentroCarrinho[produto.codigo] == undefined) {
            itensDentroCarrinho = {
                ...itensDentroCarrinho,
                [produto.codigo]: produto
            }
        }
        
        itensDentroCarrinho[produto.codigo].carrinho += 1;

    } else {
        produto.carrinho = 1;
        itensDentroCarrinho = {
            [produto.codigo]: produto
        }
    };

    localStorage.setItem('produtosNoCarrinho', JSON.stringify(itensDentroCarrinho));
};

function somaTotalCarrinho(produto) {
    let somaProdutosCarrinho = localStorage.getItem('somaProdutosCarrinho');
    somaProdutosCarrinho = JSON.parse(somaProdutosCarrinho);
    
    if (somaProdutosCarrinho != null) {
        somaProdutosCarrinho = JSON.parse(somaProdutosCarrinho);
        localStorage.setItem('somaProdutosCarrinho', somaProdutosCarrinho + produto.preco);
    } else {
        localStorage.setItem('somaProdutosCarrinho', produto.preco);
    }
};


onLoadConferenciaCarrinho();