//As únicas linhas que necessitam de alguma alteração estão indicadas pelos comentários "// Editável"
//Não altere nada além dos ids nestas linhas 

function cadastrar() {

    let form = document.querySelector('.validator');    //seleciona a tag form
    let inputs = form.querySelectorAll('input');        //seleciona todos os inputs do form
    let li = document.querySelectorAll('li');           // seleciona todas as tags li
    let p = document.querySelectorAll('p');             //seleciona todas as tags p
    let a = document.querySelectorAll('a');             //seleciona todas as tags a

    //VALIDAÇOES DOS ERROS
    let send = true;

    clear();

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
    var cadastros2 = JSON.parse(localStorage.getItem('Pessoas'))
   



    if (cadastros2 !== null) {
        for (let i = 0; i < cadastros2.length; i++) {

            if (cadastros2[i].apelido == inputs[0].value) {                                                   // Editável

                li[0].innerHTML = 'Esse usuário ja foi cadastrado!'
                inputs[0].style.border = 'red solid 2px'
                send = false;
            }

            if (cadastros2[i].email == inputs[1].value) {                                                     // Editável

                li[1].innerHTML = 'Esse e-mail ja foi cadastrado!'
                inputs[1].style.border = 'red solid 2px'
                send = false;
            }
        }
    }

    if (send !== true) {
        return false
    }

    //FUNCÕES
    function clear() {
        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
            inputs[i].style = '';
            li[i].innerHTML = '';
        }
    }


    function cadastroEfetuado() {

        let timerInterval
        Swal.fire({
            icon: 'success',
            title: 'Cadastro efetuado',
            text: 'Agora que você já se cadastrou com a gente, vamos para o login.',
            backdrop: `#183442c4`,
            allowOutsideClick: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                window.location.href="tela_login.html"
            }
        })
        a[1].innerHTML = '';

        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS VALORES DOS INPUTS
            inputs[i].value = '';
        }
    }

    cadastros = []

    nomeDoObj = {                                             // cria um ojeto
        apelido: inputs[0].value,                                                                              // Editável
        email: inputs[1].value,                                                                                // Editável
        senha: inputs[3].value,                                                                                // Editável
        carrinho: [],
    }

    if (cadastros2 === null) {  // Adicionando um array com um objeto no localstorage

        cadastros.push(nomeDoObj)
        localStorage.setItem('Pessoas', JSON.stringify(cadastros)); // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify

        cadastroEfetuado()
        clear()
    }

    else if (cadastros2 !== null) {
        cadastros2.push(nomeDoObj)

        localStorage.setItem('Pessoas', JSON.stringify(cadastros2))

        cadastroEfetuado()
        clear()
    }

}


