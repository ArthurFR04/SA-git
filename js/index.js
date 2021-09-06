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
  
  const arrayDisney = [];
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  window.location.href="temas_produtos.html";
  
  for (let i = 0; produtos.length; i++) {
    
    if (produtos[i].id >= 300 && produtos[i].id <= 399) {
      
      arrayDisney.push(produtos[i]);
      localStorage.setItem('produtosDisney', JSON.stringify(arrayDisney));
      
    }
  }
};

var produtosDisney = JSON.parse(localStorage.getItem('produtosDisney'));

function caneca(id) {

  for (let i = 0; i < produtosDisney.length; i++) {
      if (id == produtosDisney[i].id) {
          localStorage.setItem('produtosDisney', JSON.stringify(produtosDisney[i]));
          window.location.href = "tema_produtos.html"
      }
  }
};