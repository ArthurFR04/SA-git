let fotoPequena = document.querySelector('.bot')
let fotoPequenaIndividual = fotoPequena.querySelectorAll('.bot-container')
let fotoGrande = document.querySelector('.top')
let fotoGrandeIndividual = fotoGrande.querySelectorAll('img')
let produtos = JSON.parse(localStorage.getItem('produtos'))


fotoPequenaIndividual[0].addEventListener('click', primeiraImg)
fotoPequenaIndividual[1].addEventListener('click', segundaImg)
fotoPequenaIndividual[2].addEventListener('click', terceiraImg)

function primeiraImg() {
    // fotoGrande.innerHTML = produtos[2].foto
     fotoGrandeIndividual[0].src = "./img/canecas-disney/ariel frente.png"

}
function segundaImg() {
    fotoGrandeIndividual[0].src = "./img/canecas-disney/ariel lateral.png"
}

function terceiraImg() {
    fotoGrandeIndividual[0].src = "./img/canecas-disney/ariel tras.png"
}