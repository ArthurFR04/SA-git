let pessoas = JSON.parse(localStorage.getItem('Pessoas'))
let Login = JSON.parse(localStorage.getItem('Login'))
let position = Login.position
let user_car = pessoas[position].carrinho



function add_car(id) {
    
    if ( Login === null) {

        Swal.fire({
            icon: 'error',
            title: 'Login não efetuado',
            text: 'Para adicionar um produto ao carrinho, você primeiro deve efetuar o login.',
            backdrop: `#183442c4`,
        })
    }

    if (user_car.length < 1) {

        let prod_car = {
            id: id,
            quantidade:1
        }

        pessoas[position].carrinho.push(prod_car)
        localStorage.setItem('Pessoas', JSON.stringify(pessoas))
        

        Swal.fire({
            icon: 'success',
            title: 'Login efetuado',
            text: 'Agora você já pode aproveitar o site!',
            backdrop: `#183442c4`,
            allowOutsideClick: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.href="index.html"
            }
        })
    }
    

    let prodInCar = 0

    for (let i=0; i<user_car.length; i++) {

        if (user_car[i].id == id) {

            pessoas[position].carrinho[i].quantidade++
            localStorage.setItem('Pessoas', JSON.stringify(pessoas))
            prodInCar = 1

            

            Swal.fire({
            icon: 'success',
            title: 'Login efetuado',
            text: 'Agora você já pode aproveitar o site!',
            backdrop: `#183442c4`,
            allowOutsideClick: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.href="index.html"
            }
        })
        }
    }
    
    if (prodInCar == 0) {

        let prod_car = {
            id: id,
            quantidade:1
        }
    
        pessoas[position].carrinho.push(prod_car)
        localStorage.setItem('Pessoas', JSON.stringify(pessoas))

        

        Swal.fire({
            icon: 'success',
            title: 'Login efetuado',
            text: 'Agora você já pode aproveitar o site!',
            backdrop: `#183442c4`,
            allowOutsideClick: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.href="index.html"
            }
        })
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






