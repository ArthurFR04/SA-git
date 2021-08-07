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
        foto: '<img src="./img/caneca-Marvel.jpg"></img>',
    }
]

for (let i=0; i<produtos.length; i++) {

    document.getElementById('fotos-vitrine').innerHTML += `
        <div class="foto-${i}">
            <h2 id="nome-prod${i}"></h2>
            <label id="img-prod${i}"></label>
            <h3 id="preco_prod${i}"></h3>
        </div>
    `
    
    document.getElementById(`nome-prod${i}`).innerHTML = produtos[i].nome
    document.getElementById(`img-prod${i}`).innerHTML = produtos[i].foto
    document.getElementById(`preco_prod${i}`).innerHTML = produtos[i].preco
}