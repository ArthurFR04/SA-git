let dados = JSON.parse(localStorage.getItem('Login'))
let indice = dados.position
let inputs = document.querySelectorAll('input')
let li = document.querySelectorAll('li')
let pessoasCadastro = JSON.parse(localStorage.getItem('Pessoas'))
let login = JSON.parse(localStorage.getItem('Login'))

for (let i = 0; i < pessoasCadastro.length; i++) {


    if (indice == i) {

        inputs[0].value = pessoasCadastro[i].apelido
        inputs[1].value = pessoasCadastro[i].email
      

      
    }

}

function editarPerfil() {
    let send = true

    clear()

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        if (input.value == '') {
            input.style.border = 'red solid 2px'

            li[i].innerHTML = 'Preencha todos os campos!'

            send = false;
        }

        if (inputs[2].value !== inputs[3].value) {

            inputs[3].style.border = 'red solid 2px'
            li[3].innerHTML = 'As senhas devem ser iguais!'

            send = false;
        }

    }

    if (send !== true) {
        return false
    }

    let mudarLogin = null

    for (let i = 0; i < pessoasCadastro.length; i++) {

        if (indice == i) {

            pessoasCadastro[i].apelido = inputs[0].value
            pessoasCadastro[i].email = inputs[1].value
            pessoasCadastro[i].senha = inputs[2].value
            mudarLogin = pessoasCadastro[i].apelido
            localStorage.setItem('Pessoas', JSON.stringify(pessoasCadastro))
            limparValue()

            inputs[0].value = pessoasCadastro[i].apelido
            inputs[1].value = pessoasCadastro[i].email
            

            Swal.fire({
                icon: 'success',
                title: 'Perfil Editado!'
            })

        }

    }

    login.id = mudarLogin
    localStorage.setItem('Login', JSON.stringify(login))


    function limparValue() {
        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
            inputs[i].value = '';
            inputs[i].style = '';
            li[i].innerHTML = '';
        }
    }

    function clear() {
        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
            inputs[i].style = '';
            li[i].innerHTML = '';
        }
    }
}
