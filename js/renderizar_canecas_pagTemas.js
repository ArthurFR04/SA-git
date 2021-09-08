

produtos = JSON.parse(localStorage.getItem('produtos'))

let pags = 0
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
console.log(produtosTemas);
    document.getElementById('vitTotal').innerHTML = ``

    // cria a quantidade de divs (linhas) necessárias

    let quantDivs = Math.ceil(produtosTemas.length / 4)

    for (let i = 1; i <= quantDivs; i++) {
        document.getElementById('vitTotal').innerHTML += `
            <div id="vitProd${i}" class="container1">  </div>
        `
    }

    // adiciona os produtos

    pags = pag

    let j = 1

    for (let i = pags; i < produtosTemas.length; i++) {


        document.getElementById(`vitProd${j}`).innerHTML += `

            <div class="produtos">
                <img onclick="caneca(${produtosTemas[i].id})" src="${produtosTemas[i].foto_produto}">
                <label for="">${produtosTemas[i].nome}<br>${produtosTemas[i].preco}</label>
                <a href="javascript:add_car(${produtosTemas[i].id}) , msg_add();" >Adicionar ao carrinho</a>
            </div>     
        `
        if (i == 3 || i == 7 || i == 15 || i == 19 || i == 27 || i == 31) {
            j++
        }
        if (i == 11) {
            j = 10
        }
    }

}
