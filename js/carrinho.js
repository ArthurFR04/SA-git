// esse arquivo usa as váriaveis do outro js, mas eu reescrevi somente por garantia (por isso não tem os "lets")

let produtos = JSON.parse(localStorage.getItem('produtos'))
pessoas = JSON.parse(localStorage.getItem('Pessoas'))
Login = JSON.parse(localStorage.getItem('Login'))
position = Login.position

user_car = 'carrinho vazio'
user_car = pessoas[position].carrinho


function ad_car(id) {

    add_car(id)
    displayzeraPah()
}

function re_car(id) {

    rem_car(id)
    displayzeraPah()
}


function displayzeraPah() {

    if (user_car === 'carrinho vazio' || user_car < 1) {

        document.getElementById('vitrine-carr').innerHTML = ''
        document.getElementById('label-r').innerHTML = ''
        document.getElementById('span-total').innerHTML   = '00,00'

        document.getElementById('vitrine-carr').innerHTML += `
            <div class="produto">
                <div class="carrinhoVazio"> 
                    O carrinho está vazio.
                </div>
            </div>
        `
        user_car = 'carrinho vazio'
    }
    else {

        document.getElementById('vitrine-carr').innerHTML = ''
        document.getElementById('label-r').innerHTML = ''
        document.getElementById('span-total').innerHTML   = ''

        let produtos = JSON.parse(localStorage.getItem('produtos'))

        for (let j=0; j<user_car.length; j++) {

            for (let i=0; i<produtos.length; i++) {
                if (produtos[i].id == user_car[j].id) {

                    let prod_in_car = {
                        id: user_car[j].id,
                        quantidade: user_car[j].quantidade,
                        pos_in_prods: i,
                    }

                    pessoas[position].carrinho[j] = prod_in_car
                    localStorage.setItem('Pessoas', JSON.stringify(pessoas))
                }
            }
        }

        let precoTotal = 0

        for (let i=0; i<user_car.length; i++) {

            let p = user_car[i].pos_in_prods

            let precoQuant = produtos[p].preco.replace(',','.')
                precoQuant = (parseFloat(precoQuant))
                precoQuant = precoQuant*user_car[i].quantidade
                precoQuant = precoQuant.toFixed(2)

                precoNum   = parseFloat(precoQuant)
                precoStrin = precoQuant.replace('.',',')

            document.getElementById('vitrine-carr').innerHTML += `
                <div class="produto">
                    <img src="${produtos[p].foto_frente}" alt=""> 
                    <div class="quantidade">
                        <a href="javascript:re_car(${user_car[i].id});" class="qtd-label">-</a>
                        <label id="quant-carr">${user_car[i].quantidade}</label>
                        <a href="javascript:ad_car(${user_car[i].id});" class="qtd-label">+</a>
                    </div>
                    <label id="preço-carr">${precoStrin}</label>
                </div>
            `
            
            document.getElementById('label-r').innerHTML += `

                
                <div class="label-r">
                    <label class="qtd-produto">${produtos[p].nome}</label>
                    <span id="preco-produto">R$ ${precoStrin}</span>
                </div>
                <br>
            `

            precoTotal += precoNum
        }

        precoTotal = precoTotal.toFixed(2)
        precoTotal = precoTotal.replace('.',',')

        document.getElementById('span-total').innerHTML += precoTotal
        localStorage.setItem('finalizarCompra',JSON.stringify(precoTotal))
    }
}

function finalizarCompra() {

    if (user_car === 'carrinho vazio') {
       
        Swal.fire ({
            icon: 'error',
            title: 'O carrinho está vazio',
            text: 'Não é possível finalizar a compra.',
            confirmButtonColor: '#6B8D8D',
        })
    }
    else {

        window.location.href = "finalizarCompra.html"
    }

}

