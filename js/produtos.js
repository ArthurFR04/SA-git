
// let produts = JSON.parse(localStorage.getItem('produtos'))


let produtos = [
    {
        id: 101,
        nome: 'Caneca Harry Potter Dobby',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-harry-potter/dobby frente.png',
        foto_frente: "./img/canecas-harry-potter/dobby frente.png",
        foto_lateral: "./img/canecas-harry-potter/dobby frente.png",
        foto_tras: "./img/canecas-harry-potter/dobby tras.png",

    },
    {
        id: 201,
        nome: 'Caneca Marvel Guerra Civil',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-marvel/rogers tony frente.png',
        foto_frente: "./img/canecas-marvel/rogers tony frente.png",
        foto_lateral: "./img/canecas-marvel/rogers tony lateral.png",
        foto_tras: "./img/canecas-marvel/rogers tony tras.png",

    },
    {
        id: 301,
        nome: 'Caneca Disney Ariel',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/ariel frente.png',
        foto_frente: "./img/canecas-disney/ariel frente.png",
        foto_lateral: "./img/canecas-disney/ariel lateral.png",
        foto_tras: "./img/canecas-disney/ariel tras.png",

    },
    {
        id: 102,
        nome: 'Caneca Expresso de Hogwarts',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-harry-potter/expresso de hogwarts frente.png',
        foto_frente: "./img/canecas-harry-potter/expresso de hogwarts frente.png",
        foto_lateral: "./img/canecas-harry-potter/expresso de hogwarts frente.png",
        foto_tras: "./img/canecas-harry-potter/expresso de hogwarts tras.png",

    },
    {
        id: 202,
        nome: 'Caneca Marvel Avengers',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-marvel/faixa frente.png',
        foto_frente: "./img/canecas-marvel/faixa frente.png",
        foto_lateral: "./img/canecas-marvel/faixa lateral.png",
        foto_tras: "./img/canecas-marvel/faixa tras.png",

    },
    {
        id: 302,
        nome: 'Caneca Disney Aurora',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/aurora frente.png',
        foto_frente: "./img/canecas-disney/aurora frente.png",
        foto_lateral: "./img/canecas-disney/aurora lateral.png",
        foto_tras: "./img/canecas-disney/aurora tras.png",

    },
    {
        id: 103,
        nome: 'Caneca Harry e Hagrid ',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-harry-potter/harry e hagrid única.png',
        foto_frente: "./img/canecas-harry-potter/harry e hagrid única.png",
        foto_lateral: "./img/canecas-harry-potter/harry e hagrid única.png",
        foto_tras: "./img/canecas-harry-potter/harry e hagrid única.png",

    },
    {
        id: 203,
        nome: 'Caneca Marvel Homem-Aranha',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-marvel/peter_tony_frente.png',
        foto_frente: "./img/canecas-marvel/peter_tony_frente.png",
        foto_lateral: "./img/canecas-marvel/peter_tony_lateral.png",
        foto_tras: "./img/canecas-marvel/peter_tony_tras.png",

    },
    {
        id: 303,
        nome: 'Caneca Disney Bella',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/bella frente.png',
        foto_frente: "./img/canecas-disney/bella frente.png",
        foto_lateral: "./img/canecas-disney/bella lateral.png",
        foto_tras: "./img/canecas-disney/bella tras.png",

    },
    {
        id: 104,
        nome: 'Caneca Harry Potter',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-harry-potter/harry frente.png',
        foto_frente: "./img/canecas-harry-potter/harry frente.png",
        foto_lateral: "./img/canecas-harry-potter/harry frente.png",
        foto_tras: "./img/canecas-harry-potter/harry tras.png",

    },
    {
        id: 204,
        nome: 'Caneca Marvel Deadpool',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-marvel/deadpool frente.png',
        foto_frente: "./img/canecas-marvel/deadpool frente.png",
        foto_lateral: "./img/canecas-marvel/deadpool tras.png",
        foto_tras: "",

    },
    {
        id: 304,
        nome: 'Caneca Disney Branca de Neve',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/branca frente.png',
        foto_frente: "./img/canecas-disney/branca frente.png",
        foto_lateral: "./img/canecas-disney/branca lateral.png",
        foto_tras: "./img/canecas-disney/branca tras.png",

    },
    {
        id: 105,
        nome: 'Caneca Harry Potter',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-harry-potter/harry roxo frente.png',
        foto_frente: "./img/canecas-harry-potter/harry roxo frente.png",
        foto_lateral: "./img/canecas-harry-potter/harry roxo frente.png",
        foto_tras: "./img/canecas-harry-potter/harry roxo tras.png",

    },
    {
        id: 205,
        nome: 'Caneca Marvel Avengers',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-marvel/minimalista frente.png',
        foto_frente: "./img/canecas-marvel/minimalista frente.png",
        foto_lateral: "./img/canecas-marvel/minimalista frente.png",
        foto_tras: "./img/canecas-marvel/minimalista frente.png",

    },
    {
        id: 305,
        nome: 'Caneca Disney Cinderela',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/cinderela frente.png',
        foto_frente: "./img/canecas-disney/cinderela frente.png",
        foto_lateral: "./img/canecas-disney/cinderela lateral.png",
        foto_tras: "./img/canecas-disney/cinderela tras.png",

    },
    {
        id: 106,
        nome: 'Caneca Harry Potter Leviosa ',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-harry-potter/leviosa frente.png',
        foto_frente: "./img/canecas-harry-potter/leviosa frente.png",
        foto_lateral: "./img/canecas-harry-potter/leviosa frente.png",
        foto_tras: "./img/canecas-harry-potter/leviosa tras.png",

    },
    {
        id: 206,
        nome: 'Caneca Marvel Venom',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-marvel/venom_frente.png',
        foto_frente: "./img/canecas-marvel/venom_frente.png",
        foto_lateral: "./img/canecas-marvel/venom_frente.png",
        foto_tras: "./img/canecas-marvel/venom_frente.png",

    },
    {
        id: 306,
        nome: 'Caneca Disney Elsa',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/elsa frente.png',
        foto_frente: "./img/canecas-disney/elsa frente.png",
        foto_lateral: "./img/canecas-disney/elsa lateral.png",
        foto_tras: "./img/canecas-disney/elsa tras.png",

    },
    {
        id: 107,
        nome: 'Caneca Hermione',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-harry-potter/hermione frente.png',
        foto_frente: "./img/canecas-harry-potter/hermione frente.png",
        foto_lateral: "./img/canecas-harry-potter/hermione frente.png",
        foto_tras: "./img/canecas-harry-potter/hermione tras.png",

    },
    {
        id: 307,
        nome: 'Caneca Disney Jasmine',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/jasmine frente.png',
        foto_frente: "./img/canecas-disney/jasmine frente.png",
        foto_lateral: "./img/canecas-disney/jasmine lateral.png",
        foto_tras: "./img/canecas-disney/jasmine tras.png",

    },
    {
        id: 308,
        nome: 'Caneca Disney Mulan',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/mulan frente.png',
        foto_frente: "./img/canecas-disney/mulan frente.png",
        foto_lateral: "./img/canecas-disney/mulan lateral.png",
        foto_tras: "./img/canecas-disney/mulan tras.png",
        
    },
    {
        id: 309,
        nome: 'Caneca Disney Rapunzel',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/rapunzel frente.png',
        foto_frente: "./img/canecas-disney/rapunzel frente.png",
        foto_lateral: "./img/canecas-disney/rapunzel lateral.png",
        foto_tras: "./img/canecas-disney/rapunzel tras.png",

    },
    {
        id: 310,
        nome: 'Caneca Disney Tiana',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-disney/tiana frente.png',
        foto_frente: "./img/canecas-disney/tiana frente.png",
        foto_lateral: "./img/canecas-disney/tiana lateral.png",
        foto_tras: "./img/canecas-disney/tiana tras.png",

    },
    {
        id: 108,
        nome: 'Caneca Ron Weasley',
        preco: '40,00',
        descricao: 'A caneca personalizada de porcelana pode ir ao microondas e à lavadora de louças, já a caneca plástica não indicamos, devido ao material não apropriado para esse locais. As canecas são um presente super útil para as mamães, papais, avós, tios, padrinhos, professores, etc.',
        foto_produto: './img/canecas-harry-potter/ron frente.png',
        foto_frente: "./img/canecas-harry-potter/ron frente.png",
        foto_lateral: "./img/canecas-harry-potter/ron frente.png",
        foto_tras: "./img/canecas-harry-potter/ron tras.png",

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


