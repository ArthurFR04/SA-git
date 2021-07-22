//As únicas linhas que necessitam de alguma alteração estão indicadas pelos comentários "// Editável"
//Não altere nada além dos ids nestas linhas 

cadastros = []

function cadastrar() {





    let nomeC = document.getElementById('inpNomeC').value   // atribui o valor dos inputs à variáveis          // Editável
    let emailC = document.getElementById('inpEmailC').value // atribui o valor dos inputs à variáveis          // Editável
    let senhaC = document.getElementById('inpSenhaC').value // atribui o valor dos inputs à variáveis          // Editável
    let senha2C = document.getElementById('inpSenha2C').value // atribui o valor dos inputs à variáveis          // Editável

    let form = document.querySelector('.validator');//seleciona a tag form
    let inputs = form.querySelectorAll('input')//seleciona todos os inputs do form
    let li = document.querySelectorAll('li');// seleciona todas as tags li
    let p = document.querySelectorAll('p');//seleciona todas as tags p
    let a = document.querySelectorAll('a');//seleciona todas as tags a

    //VALIDAÇOES DOS ERROS
    let send = true;
    clear();
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];



        if (input.value == '') {
            input.style.border = 'solid 2px'
            input.style.borderColor = 'red'
            li[i].innerHTML = 'Preencha todos os campos!'

            send = false;
        }

        if (inputs[2].value !== inputs[3].value) {
            inputs[3].style.border = 'solid 2px'
            inputs[3].style.borderColor = 'red'
            li[3].innerHTML = 'As senhas devem ser iguais!'

            send = false;
        }

    }
    let cadastros2 = JSON.parse(localStorage.getItem('Pessoas'))
    for (let i = 0; i < cadastros2.length; i++) {

        if (cadastros2[i].apelido == nomeC) {                                                          // Editável


            inputs[0].style.border = 'solid 2px'
            inputs[0].style.borderColor = 'red'
            if (nomeC == '') {
                li[0].innerHTML = 'Preencha todos os campos!'
            } else {
                li[0].innerHTML = 'Esse usuário ja foi cadastrado!'
            }




            send = false;
        }

        if (cadastros2[i].email == emailC) {                                                          // Editável


            inputs[1].style.border = 'solid 2px'
            inputs[1].style.borderColor = 'red'

            if (emailC == '') {
                li[1].innerHTML = 'Preencha todos os campos!'
            } else {
                li[1].innerHTML = 'Esse usuário ja foi cadastrado!'
            }


            send = false;
        }
    }
    if (send !== true) {
        return false
    }
    //FUNCÕES
    function clear() {
        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR INPUTS
            inputs[i].style = '';
            li[i].innerHTML = '';



        }
    }
    function redirecionandoPage() {
        window.location.href = "tela_login.html"      //FUNÇÃO REDIRECIONAR PÁGINA
    }
    function cadastroEfetuado() {

        p[1].innerHTML = `Cadastro efetuado!<br>Redirecionado...`         //FUNÇÃO CADASTRO EFETUADO
        a[1].innerHTML = '';

    }




    if (senhaC === senha2C) {

        //usei para verificar o array, o for percorre e muda o valor se for true

        nomeDoObj = {                                             // cria um ojeto
            apelido: nomeC,                                                                                   // Editável
            email: emailC,                                                                                    // Editável
            senha: senhaC,                                                                                    // Editável
        }

        if (localStorage.getItem('Pessoas') === null) {  // Adicionando um array com um objeto no localstorage

            cadastros.push(nomeDoObj)
            localStorage.setItem('Pessoas', JSON.stringify(cadastros)); // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify

            cadastroEfetuado()

            document.getElementById('inpNomeC').value = ''                                                 // Editável
            document.getElementById('inpEmailC').value = ''                                                // Editável
            document.getElementById('inpSenhaC').value = ''                                                // Editável
            document.getElementById('inpSenha2C').value = ''                                               // Editável

            // Editável
             setInterval(redirecionandoPage, 3500)                                            //redireciona a página
        }

        else if (localStorage.getItem('Pessoas') != null) {


            console.log('deu diferente');

            cadastros2.push(nomeDoObj)
            localStorage.setItem('Pessoas', JSON.stringify(cadastros2))

            cadastroEfetuado()

            document.getElementById('inpNomeC').value = ''                                                 // Editável
            document.getElementById('inpEmailC').value = ''                                                // Editável
            document.getElementById('inpSenhaC').value = ''                                                // Editável
            document.getElementById('inpSenha2C').value = ''                                               // Editável

            setInterval(redirecionandoPage, 3500)         //redireciona a página                                          
            return false;

        }
    }

}
