
let pessoas = JSON.parse(localStorage.getItem('Pessoas'))
let Login = JSON.parse(localStorage.getItem('Login'))

function add_car(id) {
    
    if ( Login === null || Login.status == 0) {
        alert('para adicionar um produto ao carrinho, você primeiro deve efetuar o login.')
        return false
    }
    
    let position = Login.position

    let user_car = pessoas[position].carrinho


    if (user_car.length < 1) {

        let prod_car = {
            id: id,
            quantidade:1
        }

        pessoas[position].carrinho.push(prod_car)
        localStorage.setItem('Pessoas', JSON.stringify(pessoas))
        return false
    }
    

    let testeDoPapi = 0

    for (let i=0; i<=user_car.length; i++) {
        
        if (user_car[i].id == id) {
console.log('oi oi poai');
            pessoas[position].carrinho[i].quantidade++
            localStorage.setItem('Pessoas', JSON.stringify(pessoas))
            testeDoPapi = 1

            return false
        }
    }
    if (testeDoPapi = 0) {
        console.log(user_car[i].id);
        console.log(i);
        console.log(id);
    console.log('else');

        let prod_car = {
            id: id,
            quantidade:1
        }
    
        pessoas[position].carrinho.push(prod_car)
        localStorage.setItem('Pessoas', JSON.stringify(pessoas))

        return false
    }

    let prod_car = {
        id: id,
        quantidade:1
    }
    
    pessoas[position].carrinho.push()
}





// function add_car(id) {
//     let carrinho = JSON.parse(localStorage.getItem('carrinho'))
//     let id_prod = id

//     for (i=0; i<produtos.length; i++) {

//         if (produtos[i].id == id_prod) {

//             if (carrinho != null) {
//                 let confirma = 0

//                 for (ii=0; ii<carrinho.length; ii++) {

//                     if (carrinho[ii].id == id_prod) {

//                         carrinho[ii].quant_carr++
//                         localStorage.setItem('carrinho', JSON.stringify(carrinho))
//                         confirma = 1
//                         return false
//                     }
//                 }
//                 if (confirma == 0) {

//                     let car2 = JSON.parse(localStorage.getItem('carrinho'))

//                     car2.push(produtos[i])
//                     localStorage.setItem('carrinho', JSON.stringify(car2))
//                     return false
//                 }
                
//             }
//             else {
//                 carrinho = []
//                 carrinho.push(produtos[i])
//                 localStorage.setItem('carrinho', JSON.stringify(carrinho))
//             }
//         }
//     }
// }

// function rem_car(id) {
//     let carrinho = JSON.parse(localStorage.getItem('carrinho'))
//     let nome_prod = nome

//     for (ii=0; ii<carrinho.length; ii++) {

//         if (carrinho[ii].nome == nome_prod) {

//             carrinho[ii].quant_carr--
//             localStorage.setItem('carrinho', JSON.stringify(carrinho))
//             // confirma = 1
//             return false
//         }
//     }
// } 





