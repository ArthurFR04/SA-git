

function sair_login() {
    localStorage.setItem('Login', JSON.stringify(0));    //tudo errado
}



function verificar_login() {
    
    let dados = JSON.parse(localStorage.getItem('Login'));
    // let div_login = document.getElementById('div_login')

    if (dados.status == 0 || dados === null) {

        document.getElementById('div_login').innerHTML=`
        <a class="navbar-brand" href="tela_cadastro.html">Cadastro</a>

        <a class="navbar-brand" href="tela_login.html">Login</a>`
    }

    else {

        let id = dados.id
        
        //document.getElementById('div_login').innerHTML=`${id}`

        document.getElementById('div_login').innerHTML=`
    
        <div class="navbar-brand dropdown">
                        <a class="navbar-brand dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ${id}
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Harry Potter</a></li>
                        <li><a class="dropdown-item" href="#">Star Wars</a></li>
                        <li><a class="dropdown-item" href="#">Marvel</a></li>
                        <li><a class="dropdown-item" href="#">DC</a></li>
                        </ul>
                    </div>
    `

    }
}
