let fotoPequena = document.querySelector('.bot')
let fotoPequenaIndividual = fotoPequena.querySelectorAll('.bot-container')
let fotoGrande = document.querySelector('.top')
let fotoGrandeIndividual = fotoGrande.querySelectorAll('img')


fotoPequenaIndividual[0].addEventListener('click', primeiraImg)
fotoPequenaIndividual[1].addEventListener('click', segundaImg)
fotoPequenaIndividual[2].addEventListener('click', terceiraImg)

function primeiraImg() {

    fotoGrandeIndividual[0].src = "./img/caneca-Marvel.jpg"

}
function segundaImg() {
    fotoGrandeIndividual[0].src = "./img/caneca-Star-Wars.jpg"
}

function terceiraImg() {
    fotoGrandeIndividual[0].src = "./img/canecajs.png"
}