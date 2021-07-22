//As únicas linhas que necessitam de alguma alteração estão indicadas pelos comentários "// Editável"
//Não altere nada além dos ids nestas linhas 

function cadastrar() {
    
    cadastros = []
    
    let nomeC = document.getElementById('inpNomeC').value   // atribui o valor dos inputs à variáveis          // Editável
    let emailC = document.getElementById('inpEmailC').value // atribui o valor dos inputs à variáveis          // Editável
    let senhaC = document.getElementById('inpSenhaC').value // atribui o valor dos inputs à variáveis          // Editável
    let senha2C = document.getElementById('inpSenha2C').value // atribui o valor dos inputs à variáveis          // Editável

                    //usei para verificar o array, o for percorre e muda o valor se for true

    nomeDoObj = {                                             // cria um ojeto
        apelido:nomeC,                                                                                   // Editável
        email:emailC,                                                                                    // Editável
        senha:senhaC,                                                                                    // Editável
    }
    
    if (cadastros2 === null) {  // Adicionando um array com um objeto no localstorage

        cadastros.push(nomeDoObj)
        localStorage.setItem('Pessoas', JSON.stringify(cadastros)); // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
            
        document.getElementById('inpNomeC').value = ''                                                 // Editável
        document.getElementById('inpEmailC').value = ''                                                // Editável
        document.getElementById('inpSenhaC').value = ''                                                // Editável
        document.getElementById('inpSenha2C').value = ''                                               // Editável
            
    }

<<<<<<< HEAD
    else if (cadastros2 !== null) {
        cadastros2.push(nomeDoObj)
            localStorage.setItem('Pessoas', JSON.stringify(cadastros2))
    } 
=======


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
>>>>>>> 7514eb6e889521d9fe6430f96461451600fcdf54

}
