      
      
       function suma(){
       
        const select = document.querySelector('.select').value
       const monto = document.querySelector('.monto').value
       const personas = document.querySelector('.personas').value
       const total = document.querySelector('#total')
       const calcular = document.querySelector("#calcular")  
       let operaciones

         if(monto === "" || personas === ""){
             alert('Por favor ingresa un número')
             return;
         }
         if(monto < 1 || personas < 1){
             alert('Debe registar un número correcto')
         }

          operaciones = Math.round((monto/personas) * select)
        
           total.innerHTML = `Total: $${operaciones}` 
       }


       calcular.onclick = function(){
           suma()
       }