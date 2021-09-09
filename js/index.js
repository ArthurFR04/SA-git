var toastTrigger = document.querySelector('#liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    msg_add()
  })
}
function msg_add() {

  if (dados !== null) {

    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  }
}


// função que puxa todos os ID's dos produtos relacionados ao tema



const disney = () => {
  
  const arrayTemas = [];
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  window.location.href="temas_produtos.html";
  
  for (let i = 0; produtos.length; i++) {
    
    if (produtos[i].id >= 300 && produtos[i].id <= 399) {
      
      arrayTemas.push(produtos[i]);
      localStorage.setItem('produtosTemas', JSON.stringify(arrayTemas));
      
    }
  }
};

const marvel = () => {
  
  const arrayTemas = [];
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  window.location.href="temas_produtos.html";
  
  for (let i = 0; produtos.length; i++) {
    
    if (produtos[i].id >= 200 && produtos[i].id <= 299) {
      
      arrayTemas.push(produtos[i]);
      localStorage.setItem('produtosTemas', JSON.stringify(arrayTemas));
      
    }
  }
};

const harryPotter = () => {
  
  const arrayTemas = [];
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  window.location.href="temas_produtos.html";
  
  for (let i = 0; produtos.length; i++) {
    
    if (produtos[i].id >= 100 && produtos[i].id <= 199) {
      
      arrayTemas.push(produtos[i]);
      localStorage.setItem('produtosTemas', JSON.stringify(arrayTemas));
      
    }
  }
};

const programacao = () => {
  
  const arrayTemas = [];
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  window.location.href="temas_produtos.html";
  
  for (let i = 0; produtos.length; i++) {
    
    if (produtos[i].id >= 400 && produtos[i].id <= 499) {
      
      arrayTemas.push(produtos[i]);
      localStorage.setItem('produtosTemas', JSON.stringify(arrayTemas));
      
    }
  }
};

var produtosTemas = JSON.parse(localStorage.getItem('produtosTemas'));

function caneca(id) {

  for (let i = 0; i < produtosTemas.length; i++) {
      if (id == produtosTemas[i].id) {
          localStorage.setItem('canecaIndividualTema', JSON.stringify(produtosTemas[i]));
          window.location.href = "produtoIndividualTema.html"
      }
  }
};

function hist_in() {
  let hist = 'index.html'
  localStorage.setItem('histórico' , JSON.stringify(hist))
}