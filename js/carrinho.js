let carrinho = document.querySelectorAll('.addcarrinho');

let produtos = [                                    // estabeleço os produtos dentro do array de obj
    {
        nome: "Caneca JavaScript",
        codigo: "canecajs",                 
        preco: 20,
        carrinho: 0         // bem interessante essa tag, dá pra ver através do LS quantos desse objeto(produto) estão dentro do carrinho                           
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
        indexCarrinho(produtos[i]);                         // percorre meu carrinho pra me ajudar com atualização de index
        somaProdutosCarrinho(produtos[i]);                     // chama a função pra pegar o "preco: " de cada objeto clicado e somar
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


function setItens(produto) {                                                 // essa function é super importante, porque ela seta no LS quais produtos estão no carrinho
    let produtosNoCarrinho = localStorage.getItem('produtosNoCarrinho'); 
    produtosNoCarrinho = JSON.parse(produtosNoCarrinho);                   // precisamos do json.parse pra mudar tudo pra objeto dentro do js novamente
    
    if (produtosNoCarrinho != null) {                           // ou seja, se algo existe dentro dessa variável...
        
        if (produtosNoCarrinho[produto.codigo] == undefined) {  // esse if é pra fazer o código voltar pro array de obj "produtos" -- sem ele, dá pau quando clica em um produto diferente
            produtosNoCarrinho = {                             // volta papai
                ...produtosNoCarrinho,                         // volta e pega o produto que nós clicamos ANTES e adiciona outro objeto
                [produto.codigo]: produto                       // ...obrigado... (isso deu uma dor de cabeça insana)
            }
        }
        
        produtosNoCarrinho[produto.codigo].carrinho += 1;     // finalmente, o primeiro if acontece, se já tem esse produto no carrinho, ele vai fazer "carrinho: 2" (inicialmente era 0, se tá no carrinho fica 1) esse if implementa quantos quiser.
        
    } else {                                                // esse bloco é pra primeira vez que clicamos
        produto.carrinho = 1;                              // ele vai dentro do obj que o produto pertence, muda o "carrinho: 0" pra "carrinho: 1"
        produtosNoCarrinho = {
            [produto.codigo]: produto                     // vamos setar o objeto pra mandar pro LS
        }
    };
    
    localStorage.setItem('produtosNoCarrinho', JSON.stringify(produtosNoCarrinho)); // só que como não dá pra mandar purinho, tem que usar o JSON.stringify
};

function somaProdutosCarrinho(produto) {
    let somaProdutosCarrinho = localStorage.getItem('somaProdutosCarrinho');
    somaProdutosCarrinho = JSON.parse(somaProdutosCarrinho);                // (OPCIONAL) tava dando pau, eu ainda não sei se precisa transformar em número no click TAMBÉM -- vou testar
    
    if (somaProdutosCarrinho != null) {                                 // se já houver produtos no carrinho...
        somaProdutosCarrinho = JSON.parse(somaProdutosCarrinho);        // transforma em numero com json.parse pra poder somar na linha de baixo
        localStorage.setItem('somaProdutosCarrinho', somaProdutosCarrinho + produto.preco);  // seta o item novo e soma os preços
    } else {
        localStorage.setItem('somaProdutosCarrinho', produto.preco);  // se for o primeiro item, vai apenas iniciar a key do LS com o value("PRECO: ") do produto
    }
};

function onLoadConferenciaCarrinho() {                                  // meu span não tava puxando do LS os valores, essa function faz isso
    let indexProduto = localStorage.getItem('indexCarrinho');           // dou pull no indexCarrinho pra ver quantos tem -- dessa vez não precisa transformar em numero pq a soma já tá sendo feita na função de cima, então tanto faz

    if (indexProduto) {                                                         // se existe qualquer valor nessa variável, é true 
        document.querySelector('.nav-link span').textContent = indexProduto;    // -- aí ele vai lá e seta de novo o textcontent do span
    }
};


onLoadConferenciaCarrinho();