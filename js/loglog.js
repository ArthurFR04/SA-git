
function entrar_login() {
    localStorage.setItem('Login', JSON.stringify(1));
}

function sair_login() {
    localStorage.setItem('Login', JSON.stringify(0));
}



function verificar_login() {
    
    let status_login = JSON.parse(localStorage.getItem('Login'));
    let div_login = document.getElementById('div_login')

    if (status_login == 0 || status_login === null) {
        document.getElementById('div_login').innerHTML=`<a class="navbar-brand" href="tela_cadastro.html">Cadastro</a>
        <a class="navbar-brand" href="tela_login.html">Login</a>`
        
    }

    else {
        
        document.getElementById('div_login').innerHTML=`Lucas`

    }
}
