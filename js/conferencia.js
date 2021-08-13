
//objeto com o status do login(sim ou não), é usado pelas funções "verificar_login_index" e "verificar_login_carrinho"
let dados = JSON.parse(localStorage.getItem('Login'));


//quando o usuário desejar fazer logout essa função será acionada

function sair_login() { 
    let sureOut = confirm('tem certeza ?') // essa variável muda conforme a vontade do usuário (true ou false)   //edit

    if (sureOut == true) {
   
        remLogin = {            //remLogin = remover login
            status: 0,    //uso pra definir se o login foi ou não efetuado 1(sim)  0(não)
            id: '',       //nome nulo, só receberá o nome do usuário após o login
        }
        localStorage.setItem('Login', JSON.stringify(remLogin));
        window.location.reload()
    }
}



//quando entrar ou atualizar a página index essa função será efetuada

function verificar_login_index() {  
    console.log(dados);
    if ( dados === null || dados.status == 0) {  //se o login não foi efetuado apareceram as opções de cadastro e login

        document.getElementById('perfilNon').innerHTML=`
            <a class="navbar-brand" href="tela_cadastro.html">Cadastro</a>

            <a class="navbar-brand" href="tela_login.html">Login</a>
        `
        document.getElementById('perfilRespon').innerHTML=`
        <a class="navbar-brand" href="tela_cadastro.html">Cadastro</a>

        <a class="navbar-brand" href="tela_login.html">Login</a>
        `
    }

    else {      // se o login for efetuado aparecerá o nome do usuário como um dropdown com funcionalidades sobre o perfil
        let id = dados.id
        let textin = `
            <div class="btn-group">
                <button type="button" class="btn-log btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    ${id}
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Editar perfil</a></li>
                    <li> <hr> </li>
                    <li><a class="dropdown-item" href="javascript:sair_login();">Sair</a></li>
                </ul>
            </div>
        `
        document.getElementById('perfilNon').innerHTML = textin
        document.getElementById('perfilRespon').innerHTML = textin
        
    }
}



// essa função será executada ao entrar ou atualizar a página de carrinho, com o objetivo de permitir a entrada somente de usuários logados, caso o login ainda não tenha sido feito, o usuário será redirecionado para a página de login

function verificar_login_carrinho() { 

    if (dados === null || dados.status == 0) {  //se o login não foi efetuado redirecionará a pessoa para o login
    
        let timerInterval
        Swal.fire({
            icon: 'question',
            title: 'Você precisa fazer o login para acessar o carrinho',
            text: 'Antes de a gente ir pro carrinho, precisamos do seu login.',
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
    }

    else {     // se o login for efetuado aparecerá o nome do usuário como um dropdown, com funcionalidades sobre o perfil
        let id = dados.id
        let textin = `
            <div class="btn-group">
                <button type="button" class="btn-log btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    ${id}
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Editar perfil</a></li>
                    <li> <hr> </li>
                    <li><a class="dropdown-item" href="javascript:sair_login();">Sair</a></li>
                </ul>
            </div>
        `
        document.getElementById('perfilNon').innerHTML = textin
        document.getElementById('perfilRespon').innerHTML = textin
    }
}