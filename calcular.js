// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        else{
            event.preventDefault ()
            const numero = document.querySelector('totalValor').value;
            const total = document.querySelector('#totalCompra');
            total.innerHTML = numero;
            }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  //Calcular ''

  const valorTicket= 200;

  //porcentajes

  let descuentoEstudiante = 0.80;
  let descuentoTrainee = 0.50;
  let descuentoJunior = 0.15;

  //valores

  const cantidad = document.getElementById('cantidadEntradas');
  const categoria = document.getElementById('selectCategoria');
  const botonCalcular = document.getElementById('calcular');
  const botonReset = document.getElementById('reset');
  const total = document.getElementById('totalCompra');



  function totalPagar(){

    let totalValor = (cantidad.value) * valorTicket;
    if(categoria.value ==1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (categoria.value == 3){
        totalValor = totalValor - (totalValor * descuentoJunior);
    }else{
        totalValor = totalValor;
    }

    total.innerHTML = `Total a pagar : $${totalValor}`; 
  }


  botonCalcular.addEventListener('click', totalPagar);

  botonReset.addEventListener('click', ()=>{
    total.innerHTML = `Total a pagar : $`; 

  });
  