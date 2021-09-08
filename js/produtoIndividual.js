let fotoPequena = document.querySelector('.bot')
let fotoPequenaIndividual = fotoPequena.querySelectorAll('img')
let divFotoPequena = fotoPequena.querySelectorAll('.bot-container')
let fotoGrande = document.querySelector('.top')
let fotoGrandeIndividual = fotoGrande.querySelectorAll('img')
let produtos = JSON.parse(localStorage.getItem('canecaIndividual'))
let labels = document.querySelectorAll('label')

fotoGrandeIndividual[0].src = produtos.foto_frente
fotoPequenaIndividual[0].src = produtos.foto_frente
fotoPequenaIndividual[1].src = produtos.foto_lateral
fotoPequenaIndividual[2].src = produtos.foto_tras
labels[1].innerHTML = produtos.nome
labels[2].innerHTML = produtos.preco
labels[3].innerHTML = produtos.descricao
document.getElementById('botAddcar').innerHTML = `
    <button onclick="add_car(${produtos.id}) , msg_add()">Adicionar ao carrinho</button>
`


divFotoPequena[0].addEventListener('click', primeiraImg)
divFotoPequena[1].addEventListener('click', segundaImg)
divFotoPequena[2].addEventListener('click', terceiraImg)

function primeiraImg() {
    // fotoGrande.innerHTML = 
      fotoGrandeIndividual[0].src = produtos.foto_frente

}
function segundaImg() {
    // fotoGrandeIndividual[0].src = "./img/canecas-disney/ariel lateral.png"
   // fotoGrande.innerHTML = produtos.foto_lateral
    fotoGrandeIndividual[0].src = produtos.foto_lateral
}

function terceiraImg() {
    // fotoGrandeIndividual[0].src = "./img/canecas-disney/ariel tras.png"
   // fotoGrande.innerHTML = produtos.foto_tras
    fotoGrandeIndividual[0].src = produtos.foto_tras
}

function hist_prod() {
    let hist = 'produtoIndividual.html'
    localStorage.setItem('histórico' , JSON.stringify(hist))
}