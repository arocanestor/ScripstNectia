intereses = document.querySelectorAll('.Programa_de_interes_Colegios');
    checks = intereses[0].querySelectorAll('input[type=checkbox]');
    console.log("arrays");
    
    
    for(var i=0; i<checks.length; i++){
        
        checks[i].setAttribute("onclick","revisar()");
    }
    
    function revisar(){
        var contador=0;
        for(var i=0; i<checks.length; i++){
            if (checks[i].checked){
                contador++;
            }
        }
         console.log(contador);
         if(contador>2){
             inhabilitar();
         }else{
             habilitar();
         }
    }
    
    function inhabilitar(){
        for(var i=0; i<checks.length; i++){
            if (!checks[i].checked){
                checks[i].setAttribute("disabled","true");
            }
        }
    }
    
    function habilitar(){
        for(var i=0; i<checks.length; i++){
            checks[i].removeAttribute("disabled");
            
        }
    }