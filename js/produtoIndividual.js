let fotoPequena = document.querySelector('.bot')
let fotoPequenaIndividual = fotoPequena.querySelectorAll('img')
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



fotoPequenaIndividual[0].addEventListener('click', primeiraImg)
fotoPequenaIndividual[1].addEventListener('click', segundaImg)
fotoPequenaIndividual[2].addEventListener('click', terceiraImg)

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