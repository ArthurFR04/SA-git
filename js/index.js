var toastTrigger = document.querySelector('#liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    msg_add()
  })
}
function msg_add() {
    console.log('é o papi ?');
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  }