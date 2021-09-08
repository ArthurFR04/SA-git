
function hist_car() {
    let hist = 'carrinho.html'
    localStorage.setItem('histórico' , JSON.stringify(hist))
}

let pessoas = JSON.parse(localStorage.getItem('Pessoas'))
let Login = JSON.parse(localStorage.getItem('Login'))
let position
let user_car

if (Login != null) {
    position = Login.position
    user_car = pessoas[position].carrinho
}


function add_car(id) {
    
    if ( Login === null) {

        Swal.fire({
            icon: 'error',
            title: 'Login não efetuado',
            text: 'Para adicionar um produto ao carrinho, você primeiro deve efetuar o login.',
            backdrop: `#183442c4`,
        })
        return false
    }

    if (user_car.length < 1) {

        let prod_car = {
            id: id,
            quantidade:1
        }

        pessoas[position].carrinho.push(prod_car)
        localStorage.setItem('Pessoas', JSON.stringify(pessoas))
    
        return false
    }
    

    let prodInCar = 0

    for (let i=0; i<user_car.length; i++) {

        if (user_car[i].id == id) {

            pessoas[position].carrinho[i].quantidade++
            localStorage.setItem('Pessoas', JSON.stringify(pessoas))
            prodInCar = 1
        }
    }
    
    if (prodInCar == 0) {

        let prod_car = {
            id: id,
            quantidade:1
        }
    
        pessoas[position].carrinho.push(prod_car)
        localStorage.setItem('Pessoas', JSON.stringify(pessoas))
    
        return false
    }

}


function rem_car(id) {


    for (let i=0; i<user_car.length; i++) {

        if (user_car[i].id == id) {

            pessoas[position].carrinho[i].quantidade--
            localStorage.setItem('Pessoas', JSON.stringify(pessoas))
        }
        
        if (pessoas[position].carrinho[i].quantidade == 0 || pessoas[position].carrinho[i].quantidade < 1) {

            exc_car(id)

            function exc_car(id) {
            
                pessoas[position].carrinho.splice(i, 1)
                localStorage.setItem('Pessoas', JSON.stringify(pessoas))
            }
        }
    }
}






