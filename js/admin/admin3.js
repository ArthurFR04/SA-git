let inputs = document.querySelectorAll('input')
let li = document.querySelectorAll('li')
var produtoCadastro = JSON.parse(localStorage.getItem('Produto'))
var produto = JSON.parse(localStorage.getItem('produtos'))



function localizarProduto() {

    let send = true;
    let send1 = true;

    if (inputs[0].value == '') {

        li[0].innerHTML = 'Preencha o campo!'
        inputs[0].style.border = 'red solid 2px'
        inputs[1].value = ''
        inputs[2].value = ''
        inputs[3].value = ''

        send = false
    } else {
        clear()
    }

    if (send !== true) {
        return false;
    }

    if (produtoCadastro == undefined) {
        send1 = true
    } else {
        for (let i = 0; i < produtoCadastro.length; i++) {

            if (produtoCadastro[i].nome == inputs[0].value || produtoCadastro[i].id == inputs[0].value) {

                send1 = false;
            }


        }
    }


    for (let i = 0; i < produto.length; i++) {

        if (produto[i].nome == inputs[0].value || produto[i].id == inputs[0].value) {

            send1 = false;
        }


    }

    if (send1 == true) {
        li[0].innerHTML = 'Esse produto não existe!'
        inputs[0].style.border = 'red solid 2px'
        inputs[1].value = ''
        inputs[2].value = ''
        inputs[3].value = ''


        send = false;
    }


    if (send !== true) {
        return false;
    }

    if (produtoCadastro == undefined) {

    } else {
        for (let i = 0; i < produtoCadastro.length; i++) {

            if (produtoCadastro[i].nome == inputs[0].value || produtoCadastro[i].id == inputs[0].value) {


                inputs[0].value = ''
                inputs[1].value = produtoCadastro[i].nome
                inputs[2].value = produtoCadastro[i].id
                inputs[3].value = produtoCadastro[i].preco

            }


        }
    }




    for (let i = 0; i < produto.length; i++) {

        if (produto[i].nome == inputs[0].value || produto[i].id == inputs[0].value) {


            inputs[0].value = ''
            inputs[1].value = produto[i].nome
            inputs[2].value = produto[i].id
            inputs[3].value = produto[i].preco

        }


    }


}

let indice = null

function removerProduto() {

if (produtoCadastro == undefined) {

} else {
    for (let i = 0; i < produtoCadastro.length; i++) {
        if (produtoCadastro[i].nome == inputs[1].value && produtoCadastro[i].id == inputs[2].value && produtoCadastro[i].preco == inputs[3].value) {

            indice = i;
            produtoCadastro.splice(indice, 1);
            localStorage.setItem('Produto', JSON.stringify(produtoCadastro))

            inputs[1].value = ''
            inputs[2].value = ''
            inputs[3].value = ''

            Swal.fire({
                icon: 'success',
                title: 'Produto Removido!'
            })
        }
    }
}
    

    for (let i = 0; i < produto.length; i++) {
        if (produto[i].nome == inputs[1].value && produto[i].id == inputs[2].value && produto[i].preco == inputs[3].value) {

            indice = i;
            produto.splice(indice, 1);
            localStorage.setItem('produtos', JSON.stringify(produto))
            // localStorage.setItem('Editados', JSON.stringify(produto))
            

            inputs[1].value = ''
            inputs[2].value = ''
            inputs[3].value = ''

            Swal.fire({
                icon: 'success',
                title: 'Produto Removido!'
            })
        }
    }
}


function clear() {

    for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
        li[0].innerHTML = '';
        inputs[0].style = '';



    }
}
