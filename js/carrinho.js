// esse arquivo usa as váriaveis do outro js, mas eu reescrevi somente por garantia (por isso não tem os "lets")

let produtos = JSON.parse(localStorage.getItem('produtos'))
pessoas = JSON.parse(localStorage.getItem('Pessoas'))
Login = JSON.parse(localStorage.getItem('Login'))
position = Login.position

user_car = 'carrinho vazio'
user_car = pessoas[position].carrinho


function displayzeraPah() {

    if (user_car === 'carrinho vazio' || user_car < 1) {

        document.getElementById('vitrine-carr').innerHTML += `
            <div class="produto">
                <div class="carrinhoVazio"> 
                    O carrinho está vazio
                </div>
            </div>
        `
    }
    else {
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
                    ${produtos [p] .foto}
                    <div class="quantidade">
                        <a href="javascript:rem_car(${user_car[i].id}); window.location.reload();" class="qtd-label">-</a>
                        <label id="quant-carr">${user_car[i].quantidade}</label>
                        <a href="javascript:add_car(${user_car[i].id}); window.location.reload();" class="qtd-label">+</a>
                    </div>
                    <label id="preço-carr">${precoStrin}</label>
                </div>
            `
            precoTotal += precoNum
        }

        precoTotal = precoTotal.toFixed(2)
        precoTotal = precoTotal.replace('.',',')

        document.getElementById('span-total').innerHTML += precoTotal
    }
}