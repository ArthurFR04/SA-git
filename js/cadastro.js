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

    else if (cadastros2 !== null) {
        cadastros2.push(nomeDoObj)
            localStorage.setItem('Pessoas', JSON.stringify(cadastros2))
    } 

}
