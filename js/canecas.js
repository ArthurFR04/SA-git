
produtos = JSON.parse(localStorage.getItem('produtos'))

let papi = 0

function botbot2() {
    vitrineGo(12)
} 


function vitrineGo(pag) {
console.log(produtos.length);

    document.getElementById('vitTotal').innerHTML = ``

    // cria a quantidade de divs (linhas) necessárias

    let quantDivs = Math.ceil(produtos.length/4)
    
    for (let i=1 ; i<=quantDivs ; i++) {
        document.getElementById('vitTotal').innerHTML += `
        <div id="vitProd${i}" class="container1">  </div>
        `
    }
    
    // adiciona os produtos

    let papi = pag
    console.log(papi);

    let j = 1
    
    for (let i=papi ; i<produtos.length ; i++) {
console.log(i);

        document.getElementById(`vitProd${j}`).innerHTML += `

            <div class="produtos">
                <img onclick="caneca(301)" src="./img/canecas-disney/ariel frente.png" alt="">
                <label for="">caneca 2<br>$20.00</label>
                <a href="">Adicionar ao carrinho</a>
            </div>     
        `
        if (i == 3 || i==7 || i==15 || i==19) {
            j++
        }
        if (i == 11) {
            j = 10
        }
    }

}
