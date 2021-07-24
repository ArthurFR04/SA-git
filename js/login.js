//As únicas linhas que necessitam de alguma alteração estão indicadas pelos comentários "// Editável"
//Não altere nada além dos ids nestas linhas 

function logar() {

    let nomeL = document.getElementById('inpNomeL').value   // atribui o valor dos inputs à variáveis          // Editável
    let senhaL = document.getElementById('inpSenhaL').value // atribui o valor dos inputs à variáveis          // Editável

    let cadastradas = JSON.parse(localStorage.getItem('Pessoas'))   //pega o array do localstorage

    if (cadastradas != null) {
        let confirmacao = ''   //usei para verificar o array, o for percorre e muda o valor se for true
        let login = ''   //é usado lá embaixo (para o objeto "dados")
        let j = 'incorreto'

        for(let i=0; i<cadastradas.length; i++) {
            if (cadastradas[i].apelido == nomeL || cadastradas[i].email == nomeL) {                       // Editável
                
                login = cadastradas[i].apelido
                j = i  //quando o if encontra a posição do nome no array ele atribui esse valor ao J que é usado pelo if da senha também
            }
        }

        if (j === 'incorreto') {
            alert('O seu nome ou email, está incorreto.')
            return false
        }

        else if (cadastradas[j].senha == senhaL) {                       // Editável
            confirmacao = true
        }
        

        if (confirmacao == true) {
            alert('Login efetuado com sucesso.')

            document.getElementById('inpNomeL').value = ''                                                // Editável
            document.getElementById('inpSenhaL').value = ''                                               // Editável

            dados = {
                status: 1,    //uso 
                id: login,    //pega o apelido do localstorage para ser usado lá no index
            }
            localStorage.setItem('Login', JSON.stringify(dados));


            window.location.href="index.html"                                                 // Editável
        }
        else {
            alert('Seu login está incorreto, por favor tente novamente.')
            return false;
        }
    }
    

    else if (cadastradas === null) {             // caso não haja nada no localstorage
        alert('Por favor efetua um cadastro, não foi possivel identificar nenhuma pessoa cadastrada em nosso site.')
    }
}