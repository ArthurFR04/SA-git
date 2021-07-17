//As únicas linhas que necessitam de alguma alteração estão indicadas pelos comentários "// Editável"
//Não altere nada além dos ids nestas linhas 

function logar() {

    let nomeL = document.getElementById('inpNomeL').value   // atribui o valor dos inputs à variáveis          // Editável
    let senhaL = document.getElementById('inpSenhaL').value // atribui o valor dos inputs à variáveis          // Editável
    console.log(nomeL);
    console.log(senhaL);

    let cadastradas = JSON.parse(localStorage.getItem('Pessoas'))   //pega o array do localstorage
    console.log(cadastradas);


    if (cadastradas != null) {
        let confirmacao = ''   //usei para verificar o array, o for percorre e muda o valor se for true
        let login = ''
        let j = 'te'
        
console.log('passou');
console.log(login +'tt');
console.log(j);

        for(let i=0; i<cadastradas.length; i++) {
            if (cadastradas[i].apelido == nomeL || cadastradas[i].email == nomeL) {                       // Editável
                login = nomeL
                j = i  //quando o if encontra a posição do nome no array ele atribui esse valor ao J que é usado pelo if da senha também
            }
        }

        if (j === 'te') {
            alert('O seu nome ou email, está incorreto.')
        }

        if (cadastradas[j].senha == senhaL) {                       // Editável
            confirmacao = true
        }
        

        if (confirmacao == true) {
            alert('Login efetuado com sucesso.')

            document.getElementById('inpNomeL').value = ''                                                 // Editável
            document.getElementById('inpSenhaL').value = ''                                                // Editável

            window.location.href="../html/home_logado.html"                                                    // Editável
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