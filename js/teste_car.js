
window.location.reload

function add_car(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    let id_prod = id

    for (i=0; i<produtos.length; i++) {

        if (produtos[i].id == id_prod) {

            if (carrinho != null) {
                let confirma = 0

                for (ii=0; ii<carrinho.length; ii++) {

                    if (carrinho[ii].id == id_prod) {

                        carrinho[ii].quant_carr++
                        localStorage.setItem('carrinho', JSON.stringify(carrinho))
                        confirma = 1
                        return false
                    }
                }
                if (confirma == 0) {

                    let car2 = JSON.parse(localStorage.getItem('carrinho'))

                    car2.push(produtos[i])
                    localStorage.setItem('carrinho', JSON.stringify(car2))
                    return false
                }
                
            }
            else {
                carrinho = []
                carrinho.push(produtos[i])
                localStorage.setItem('carrinho', JSON.stringify(carrinho))
            }
        }
    }
}

function rem_car(id) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    let nome_prod = nome

    for (ii=0; ii<carrinho.length; ii++) {

        if (carrinho[ii].nome == nome_prod) {

            carrinho[ii].quant_carr--
            localStorage.setItem('carrinho', JSON.stringify(carrinho))
            // confirma = 1
            return false
        }
    }
} 





