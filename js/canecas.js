produtos = JSON.parse(localStorage.getItem('produtos'))

let j = 1
// document.getElementById('vitProd').innerHTML += `
//         <div id="vitProd${j}" class="produtos">  </div>
//     `

for (let i=0 ; i<produtos.length ; i++) {

    
    document.getElementById(`vitProd${j}`).innerHTML += `

        <div class="produtos">
            <img onclick="caneca(301)" src="./img/canecas-disney/ariel frente.png" alt="">
            <label for="">caneca 2<br>$20.00</label>
            <a href="">Adicionar ao carrinho</a>
        </div>     
    `
    if (i == 3) {
        j++
    }
}