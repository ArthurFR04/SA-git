
// let produts = JSON.parse(localStorage.getItem('produtos'))


let produtos = [

    {
        id: 301,
        nome: 'Caneca Disney Ariel',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/ariel frente.png',
        foto_frente: "./img/canecas-disney/ariel frente.png",
        foto_lateral: "./img/canecas-disney/ariel lateral.png",
        foto_tras: "./img/canecas-disney/ariel tras.png",

    },
    {
        id: 302,
        nome: 'Caneca Disney Aurora',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/aurora frente.png',
        foto_frente: "./img/canecas-disney/aurora frente.png",
        foto_lateral: "./img/canecas-disney/aurora lateral.png",
        foto_tras: "./img/canecas-disney/aurora tras.png",

    },
    {
        id: 303,
        nome: 'Caneca Disney Bella',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/bella frente.png',
        foto_frente: "./img/canecas-disney/bella frente.png",
        foto_lateral: "./img/canecas-disney/bella lateral.png",
        foto_tras: "./img/canecas-disney/bella tras.png",

    },
    {
        id: 304,
        nome: 'Caneca Disney Branca de Neve',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/branca frente.png',
        foto_frente: "./img/canecas-disney/branca frente.png",
        foto_lateral: "./img/canecas-disney/branca lateral.png",
        foto_tras: "./img/canecas-disney/branca tras.png",

    },
    {
        id: 305,
        nome: 'Caneca Disney Cinderela',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/cinderela frente.png',
        foto_frente: "./img/canecas-disney/cinderela frente.png",
        foto_lateral: "./img/canecas-disney/cinderela lateral.png",
        foto_tras: "./img/canecas-disney/cinderela tras.png",

    },
    {
        id: 306,
        nome: 'Caneca Disney Elsa',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/elsa frente.png',
        foto_frente: "./img/canecas-disney/elsa frente.png",
        foto_lateral: "./img/canecas-disney/elsa lateral.png",
        foto_tras: "./img/canecas-disney/elsa tras.png",

    },
    {
        id: 307,
        nome: 'Caneca Disney Jasmine',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/jasmine frente.png',
        foto_frente: "./img/canecas-disney/jasmine frente.png",
        foto_lateral: "./img/canecas-disney/jasmine lateral.png",
        foto_tras: "./img/canecas-disney/jasmine tras.png",

    },
    {
        id: 308,
        nome: 'Caneca Disney Mulan',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/mulan frente.png',
        foto_frente: '<img src="./img/canecas-disney/mulan frente.png" alt=""></img>',
        foto_lateral: '<img src="./img/canecas-disney/mulan lateral.png" alt=""></img>',
        foto_tras: '<img src="./img/canecas-disney/mulan tras.png" alt=""></img>',
        
    },
    {
        id: 309,
        nome: 'Caneca Disney Rapunzel',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/rapunzel frente.png',
        foto_frente: "./img/canecas-disney/rapunzel frente.png",
        foto_lateral: "./img/canecas-disney/rapunzel lateral.png",
        foto_tras: "./img/canecas-disney/rapunzel tras.png",

    },
    {
        id: 310,
        nome: 'Caneca Disney Tiana',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-disney/tiana frente.png',
        foto_frente: "./img/canecas-disney/tiana frente.png",
        foto_lateral: "./img/canecas-disney/tiana lateral.png",
        foto_tras: "./img/canecas-disney/tiana tras.png",

    },
    {
        id: 201,
        nome: 'Caneca Marvel Guerra Civil',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-marvel/rogers tony frente.png',
        foto_frente: "./img/canecas-marvel/rogers tony frente.png",
        foto_lateral: "./img/canecas-marvel/rogers tony lateral.png",
        foto_tras: "./img/canecas-marvel/rogers tony tras.png",

    },
    {
        id: 202,
        nome: 'Caneca Marvel Avengers',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-marvel/faixa frente.png',
        foto_frente: "./img/canecas-marvel/faixa frente.png",
        foto_lateral: "./img/canecas-marvel/faixa lateral.png",
        foto_tras: "./img/canecas-marvel/faixa tras.png",

    },
    {
        id: 203,
        nome: 'Caneca Marvel Homem-Aranha',
        preco: '40,00',
        descricao: 'VAPO',
        foto_produto: './img/canecas-marvel/peter tony frente.png',
        foto_frente: "./img/canecas-marvel/peter tony frente.png",
        foto_lateral: "./img/canecas-marvel/peter tony lateral.png",
        foto_tras: "./img/canecas-marvel/peter tony tras.png",

    },






]

localStorage.setItem('produtos', JSON.stringify(produtos))
let adicionarProduto = JSON.parse(localStorage.getItem('Produto')) // puxa os produtos cadastrados pela pag admin no site pro array produtos

if (adicionarProduto == undefined) {
    
} else {
    for (let i = 0; i < adicionarProduto.length; i++) {
        produtos.push(adicionarProduto[i])
    }
}

let editados = JSON.parse(localStorage.getItem('Editados'))
if (editados == null) {
    localStorage.setItem('produtos', JSON.stringify(produtos))
} else {


    for (let i = 0; i < editados.length; i++) {
        if (editados[i].id == produtos[i].id) {
            produtos[i].id = editados[i].id
            produtos[i].nome = editados[i].nome
            produtos[i].preco = editados[i].preco
            produtos[i].descricao = editados[i].descricao
            produtos[i].foto_frente = editados[i].foto_frente
            produtos[i].foto_produto = editados[i].foto_produto
        }
    }




    localStorage.setItem('produtos', JSON.stringify(produtos))
}


localStorage.setItem('produtos', JSON.stringify(produtos))


function caneca(id) {

    for (let i = 0; i < produtos.length; i++) {
        if (id == produtos[i].id) {
            localStorage.setItem('canecaIndividual', JSON.stringify(produtos[i]))
            window.location.href = "produtoIndividual.html"
        }
    }


}


