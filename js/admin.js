
function cadastroProdutos() {
    let inputs = document.querySelectorAll('input');
    let textArea = document.querySelectorAll('textarea');
    let li = document.querySelectorAll('li');           
    let send = true;

    clear();
    clean();

    for (let i = 0; i < inputs.length; i++) {

        if (inputs[0].value == '' || inputs[1].value == '' || inputs[2].value == '') {
           
            inputs[i].style.border = 'red solid 2px'
            li[i].innerHTML = 'Preencha todos os campos!'
            


            send = false;
        }   

    }
    for (let i= 0; i < textArea.length; i++){
        if (textArea[i].value == '') {
           
            textArea[i].style.border = 'red solid 2px'
    
            send = false;
        }
    }
  
  
    var produtoCadastro = JSON.parse(localStorage.getItem('Produto'))

    if (send !== true) {
        return false
    }

    //FUNCÕES
    function clear() {
        for (let i = 0; i < inputs.length; i++) {       //FUNCÃO LIMPAR OS ERROS DOS INPUTS
            li[i].innerHTML = '';
            inputs[i].style = '';
           
            
            
        }
    }
    function clean() {
        for (let i= 0; i < textArea.length; i++){
            textArea[i].style.border = '';
           
        }
    }

    let produto = {
        nome: inputs[0].value,
        codigo: inputs[1].value,
        preco: inputs[2].value,
        descricao: textArea[0].value,
        foto: inputs[3].value
    }
    let produtos = []

    if (produtoCadastro != null) {

        produtoCadastro.push(produto)
        localStorage.setItem('Produto', JSON.stringify(produtoCadastro))


    } else if (produtoCadastro == null) {


        produtos.push(produto)
        localStorage.setItem('Produto', JSON.stringify(produtos))

    }
};