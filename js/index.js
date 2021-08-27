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

