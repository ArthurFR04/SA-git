

produtos = JSON.parse(localStorage.getItem('produtos'))

let papi = 0
let passarPagina = document.querySelector('.passar-pagina')
let a = passarPagina.querySelectorAll('a')
a[0].style = 'opacity: 0.6'
function botbot2() {
    vitrineGo(12)
   
    a[0].style = 'opacity: 1'
    a[1].style = 'opacity: 0.6'
    a[2].style = 'opacity: 1'
}


function vitrineGo(pag) {
    console.log(produtos.length);

    document.getElementById('vitTotal').innerHTML = ``

    // cria a quantidade de divs (linhas) necessárias

    let quantDivs = Math.ceil(produtos.length / 4)

    for (let i = 1; i <= quantDivs; i++) {
        document.getElementById('vitTotal').innerHTML += `
        <div id="vitProd${i}" class="container1">  </div>
        `
    }

    // adiciona os produtos

    let papi = pag
    console.log(papi);

    let j = 1

    for (let i = papi; i < produtos.length; i++) {


        document.getElementById(`vitProd${j}`).innerHTML += `

            <div class="produtos">
                <img onclick="caneca(${produtos[i].id})" src="${produtos[i].foto_produto}">
                <label for="">${produtos[i].nome}<br>${produtos[i].preco}</label>
                <a href="">Adicionar ao carrinho</a>
            </div>     
        `
        if (i == 3 || i == 7 || i == 15 || i == 19) {
            j++
        }
        if (i == 11) {
            j = 10
        }
    }

}
