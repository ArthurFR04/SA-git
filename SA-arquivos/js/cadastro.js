//As únicas linhas que necessitam de alguma alteração estão indicadas pelos comentários "// Editável"
//Não altere nada além dos ids nestas linhas 

cadastros = []

function cadastrar() {





    let nomeC = document.getElementById('inpNomeC').value   // atribui o valor dos inputs à variáveis          // Editável
    let emailC = document.getElementById('inpEmailC').value // atribui o valor dos inputs à variáveis          // Editável
    let senhaC = document.getElementById('inpSenhaC').value // atribui o valor dos inputs à variáveis          // Editável
    let senha2C = document.getElementById('inpSenha2C').value // atribui o valor dos inputs à variáveis          // Editável

    let form = document.querySelector('.validator');
    let inputs = form.querySelectorAll('input')
    let li = document.querySelectorAll('li');
    
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
       
        
    }
    if(send !== true){
        return false
    }
    function clear() {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style = '';
            li[i].innerHTML = '';



        }
    }




    if (senhaC === senha2C) {

        let confirmacao = ''                      //usei para verificar o array, o for percorre e muda o valor se for true

        nomeDoObj = {                                             // cria um ojeto
            apelido: nomeC,                                                                                   // Editável
            email: emailC,                                                                                    // Editável
            senha: senhaC,                                                                                    // Editável
        }

        if (localStorage.getItem('Pessoas') === null) {  // Adicionando um array com um objeto no localstorage

            cadastros.push(nomeDoObj)
            localStorage.setItem('Pessoas', JSON.stringify(cadastros)); // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify

            alert('Cadastro efetuado. \n\nVocê será redirecionado para a página de login.')

            document.getElementById('inpNomeC').value = ''                                                 // Editável
            document.getElementById('inpEmailC').value = ''                                                // Editável
            document.getElementById('inpSenhaC').value = ''                                                // Editável
            document.getElementById('inpSenha2C').value = ''                                               // Editável

            window.location.href = "tela_login.html"                                                         // Editável
        }

        else if (localStorage.getItem('Pessoas') != null) {

            let cadastros2 = JSON.parse(localStorage.getItem('Pessoas'))

            for (let i = 0; i < cadastros2.length; i++) {

                if (cadastros2[i].apelido == nomeC || cadastros2[i].email == emailC) {                                                          // Editável
                    confirmacao = 'cancelar'
                }
            }

            if (confirmacao === 'cancelar') {
                console.log('deu igual');
                alert('Esse nome de usuário já está sendo usado.')
                return false;
            }

            else {
                console.log('deu diferente');

                cadastros2.push(nomeDoObj)
                localStorage.setItem('Pessoas', JSON.stringify(cadastros2))

                alert('Cadastro efetuado. \n\nVocê será redirecionado para a página de login.')

                document.getElementById('inpNomeC').value = ''                                                 // Editável
                document.getElementById('inpEmailC').value = ''                                                // Editável
                document.getElementById('inpSenhaC').value = ''                                                // Editável
                document.getElementById('inpSenha2C').value = ''                                               // Editável

                window.location.href = "tela_login.html"                                                         // Editável
                return false;
            }
        }
    }
    else {
        alert('As senhas devem ser iguais   (mudar texto depois)')
    }
}
