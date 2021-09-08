//As únicas linhas que necessitam de alguma alteração estão indicadas pelos comentários "// Editável"
//Não altere nada além dos ids nestas linhas 

function logar() {

    let inputs = document.querySelectorAll('input')
    let li = document.querySelectorAll('li')
    let send = true;
    let p = document.querySelectorAll('p')
    let a = document.querySelectorAll('a')
    let cadastradas = JSON.parse(localStorage.getItem('Pessoas'))         //pega o array do localstorage

    if (cadastradas != null) {
        clear()

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '') {
                inputs[i].style.border = 'red solid 2px';
                li[i].innerHTML = 'Preencha todos os campos!'

                send = false;
            }
        }


        for (let i = 0; i < cadastradas.length; i++) {

            if ('admin'== inputs[0].value && '0000'== inputs[1].value) {                 // login do administrador
            //         apelido                      senha
                window.location.href = 'admin_pag.html'
            }

            if (cadastradas[i].apelido == inputs[0].value || cadastradas[i].email == inputs[0].value) {
                if (cadastradas[i].senha !== inputs[1].value) {

                    if (inputs[1].value == '') {
                        inputs[1].style.border = 'red solid 2px';
                        li[1].innerHTML = 'Preencha todos os campos!'
                        send = false;

                    } else {
                        inputs[1].style.border = 'red solid 2px';
                        li[1].innerHTML = 'Senha incorreta!'
                        send = false;
                    }

                }

            }
        }
        if (send !== true) {
            return false
        }
    }
    //FUNÇOES
    function clear() {
        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
            inputs[i].style = '';
            li[i].innerHTML = '';
        }
    }


    function loginEfetuado() {

        let timerInterval
        Swal.fire({
            icon: 'success',
            title: 'Login efetuado',
            text: 'Agora você já pode aproveitar o site!',
            backdrop: `#183442c4`,
            allowOutsideClick: false,
            timer: 2500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {

                let hist = JSON.parse(localStorage.getItem('histórico'))
                window.location.href = hist
            }
        })
        a[1].innerHTML = '';

        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS VALORES DOS INPUTS
            inputs[i].value = '';
        }
    }
    //LOGIN

    if (cadastradas != null) {



        let confirmacao = ''   //usei para verificar o array, o for percorre e muda o valor se for true
        let login = ''   //é usado lá embaixo (para o objeto "dados")
        let j = 'incorreto'


        for (let i = 0; i < cadastradas.length; i++) {
            if (cadastradas[i].apelido == inputs[0].value || cadastradas[i].email == inputs[0].value) {                       // Editável

                login = cadastradas[i].apelido
                j = i  //quando o if encontra a posição do nome no array ele atribui esse valor ao J que é usado pelo if da senha também
            }
        }

        if (j === 'incorreto') {
            if (inputs[0].value == '') {
                inputs[0].style.border = 'red solid 2px';
                li[0].innerHTML = 'Preencha todos os campos!'
            } else {
                inputs[0].style.border = 'red solid 2px';
                li[0].innerHTML = 'O seu usuário ou email, está incorreto.'
            }


            return false
        }

        if (cadastradas[j].senha == inputs[1].value) {                       // Editável
            confirmacao = true
        }


        if (confirmacao == true) {

            dados = {
                status: 1,    //uso pra definir se o login foi ou não efetuado 1(sim)  0(não)
                id: login,    //pega o apelido do localstorage para ser usado lá no index
                position: j,
                histórico:'',
            }
            localStorage.setItem('Login', JSON.stringify(dados));

            loginEfetuado()                                            // Editável
        }

    }


    else if (cadastradas === null) {             // caso não haja nada no localstorage
        Swal.fire ({
            icon: 'error',
            title: 'Não encontramos nenhum usuário com estas credenciais!',
            text: 'Por favor, efetue seu cadastro!',
        })
    }
}