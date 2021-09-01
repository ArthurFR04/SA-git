
let produtos = [
    {
        id: 101,
        nome: 'Caneca Marvel',
        preco: '35,90',
        foto: '<img src="./img/caneca-Marvel.jpg"></img>',
    },
    {
        id: 201,
        nome: 'Caneca Stars Wars',
        preco: '35,00',
        foto: '<img src="./img/caneca-Star-Wars.jpg"></img>',
        
    }
  
]

localStorage.setItem('produtos', JSON.stringify(produtos))


for (let i=0; i<produtos.length; i++) {

    document.getElementById('fotos-vitrine').innerHTML += `
        <div class="foto-${i}">
            <h2 id="nome-prod${i}"></h2>
            <label onclick="Redirecionar()" id="img-prod${i}"></label>
            <h3 id="preco_prod${i}"></h3> 
            <a href="javascript:add_car(${produtos[i].id}), msg_add();">Adicionar ao carrinho</a>
          

        </div>
    `
    
    document.getElementById(`nome-prod${i}`).innerHTML = produtos[i].nome
    document.getElementById(`img-prod${i}`).innerHTML = produtos[i].foto
    document.getElementById(`preco_prod${i}`).innerHTML = produtos[i].preco
}



function Redirecionar() {
    window.location.href="produtoIndividual.html"

    
}