//As únicas linhas que necessitam de alguma alteração estão indicadas pelos comentários "// Editável"
//Não altere nada além dos ids nestas linhas 

cadastros = []

function cadastrar() {
    
    let nomeC = document.getElementById('inpNomeC').value   // atribui o valor dos inputs à variáveis          // Editável
    let emailC = document.getElementById('inpEmailC').value // atribui o valor dos inputs à variáveis          // Editável
    let senhaC = document.getElementById('inpSenhaC').value // atribui o valor dos inputs à variáveis          // Editável
    let senha2C = document.getElementById('inpSenha2C').value // atribui o valor dos inputs à variáveis          // Editável
    
    if (senhaC === senha2C) {

        let confirmacao = ''                           //usei para verificar o array, o for percorre e muda o valor se for true

        nomeDoObj = {                                             // cria um ojeto
            apelido: nomeC ,                                                                                       // Editável
            email: emailC ,                                                                                       // Editável
            senha: senhaC ,                                                                                        // Editável
        }
        
        if (localStorage.getItem('Pessoas') === null) {  // Adicionando um array com um objeto no localstorage

            cadastros.push(nomeDoObj)
            localStorage.setItem('Pessoas', JSON.stringify(cadastros)); // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        }

        else if (localStorage.getItem('Pessoas') != null){
            
            let cadastros2 = JSON.parse(localStorage.getItem('Pessoas'))

            for(let i=0; i<cadastros2.length; i++) {

                if (cadastros2[i].apelido == nomeC) {                                                              // Editável
                    confirmacao = 'apelido já em uso'
                }
            }
                
            if (confirmacao == 'apelido já em uso') {
                console.log('deu igual');
                alert('Esse nome de usuário já está sendo usado.')
                return false;
            }
            
            else {
                console.log('deu diferente');
                
                let cadastros3 = JSON.parse(localStorage.getItem('Pessoas'))
                
                cadastros3.push(nomeDoObj)
                localStorage.setItem('Pessoas', JSON.stringify(cadastros3))
                
                alert('Cadastro efetuado. \n\nVocê será redirecionado para a página de login.')
                
                confirmacao = ''
                document.getElementById('inpNomeC').value = ''                                                 // Editável
                document.getElementById('inpSenhaC').value = ''                                                // Editável
                window.location.href="tela_login.html"                                                         // Editável
                return false;
            }
        }
    }
    else {
        alert('As senhas devem ser iguais   (mudar texto depois)')
    }
}
