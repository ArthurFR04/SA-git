let fotoPequena = document.querySelector('.bot')
let fotoPequenaIndividual = fotoPequena.querySelectorAll('.bot-container')
let fotoGrande = document.querySelector('.top')
let fotoGrandeIndividual = fotoGrande.querySelectorAll('img')
let produtos = JSON.parse(localStorage.getItem('canecaIndividual'))

fotoGrande.innerHTML = produtos.foto_frente
fotoPequenaIndividual[0].innerHTML = produtos.foto_frente
fotoPequenaIndividual[1].innerHTML = produtos.foto_lateral
fotoPequenaIndividual[2].innerHTML = produtos.foto_tras


fotoPequenaIndividual[0].addEventListener('click', primeiraImg)
fotoPequenaIndividual[1].addEventListener('click', segundaImg)
fotoPequenaIndividual[2].addEventListener('click', terceiraImg)

function primeiraImg() {
     fotoGrande.innerHTML = produtos.foto_frente
    //  fotoGrandeIndividual[0].src = "./img/canecas-disney/ariel frente.png"

}
function segundaImg() {
    // fotoGrandeIndividual[0].src = "./img/canecas-disney/ariel lateral.png"
    fotoGrande.innerHTML = produtos.foto_lateral
}

function terceiraImg() {
    // fotoGrandeIndividual[0].src = "./img/canecas-disney/ariel tras.png"
    fotoGrande.innerHTML = produtos.foto_tras
}