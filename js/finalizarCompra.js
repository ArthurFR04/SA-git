let containerR = document.querySelector('.container-r')
let select = containerR.querySelector('select')
let containerLmid = document.querySelector('.container-l-mid')
let inputs = containerLmid.querySelectorAll('input')
let li = containerLmid.querySelectorAll('li')


function validaçao() {
    let send = true;

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];

        if (input.value == '') {
            input.style.border = 'red solid 2px'

            li[i].innerHTML = 'Preencha os campos!'

            send = false;
        }

    }

    if(send !== true) {
        return false
    }
}

select.addEventListener('change', formaPagamento)

function formaPagamento() {
   
    let opcao = select.value

    if (opcao == 1) {
        
        containerLmid.innerHTML = `
        <div class="top-l">
        <div class="input-grande">
            <label for="">Nome completo</label>
            <input type="text">
            
        </div>
        <div class="inputs-pequeno">
            <div class="input-pequeno">
                <label for="">Data de Nascimento</label>
                <input  placeholder="MM/AA" type="date">
            </div>

            <div class="input-pequeno input1-pequeno">
                <labe for="">CPF</label>
                <input placeholder="_ _ _._ _ _._ _ _-_ _" type="number">
            </div>


        </div>

        <div class="input-grande">
            <label for="">E-mail</label>
            <input type="text">
        </div>

        <div class="inputs-pequeno">
            <div class="input-pequeno">
                <label for="">Rua e nº</label>
                <input type="text">
            </div>

            <div class="input-pequeno input1-pequeno">
                <label for="">Complemento</label>
                <input type="text">
            </div>


        </div>

        <div class="inputs-pequeno">
            <div class="input-pequeno">
                <label for="">Bairro</label>
                <input type="text">
            </div>

            <div class="input-pequeno input1-pequeno">
                <label for="">Cidade</label>
                <input type="text">
            </div>


        </div>

    </div>

    <div class="bot-l">
    
    </div>`
    } else if (opcao == 0) {

               
         containerLmid.innerHTML = ` <div class="top-l">
         <div class="input-grande">
             <label for="">Número do cartão</label>
             <input type="text">
         </div>
         <div class="inputs-pequeno">
             <div class="input-pequeno">
                 <label for="">Validade</label>
                 <input  placeholder="MM/AA" type="date">
             </div>

             <div class="input-pequeno input1-pequeno">
                 <label for="">Cód. Segurança</label>
                 <input type="number">
             </div>


         </div>

         <div class="input-grande">
             <label for="">Nome completo do titular</label>
             <input type="text">
         </div>
         <div class="inputs-pequeno">
             <div class="input-pequeno">
                 <label for="">CPF</label>
                 <input placeholder="_ _ _._ _ _._ _ _-_ _" type="text">
             </div>
         </div>
     </div>

     <div class="bot-l">
     
     </div>` 
    }
}