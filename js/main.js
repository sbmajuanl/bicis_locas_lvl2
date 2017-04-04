    function validateForm(){
      var nombre=document.getElementById("name");
      var apellido=document.getElementById("lastname");
      var email=document.getElementById("input-email");
      var contrasena=document.getElementById("input-password");
      var seleccionar= document.getElementById("control");
      var twiter=document.getElementById("input-social");
      var span = document.getElementsByTagName("span");
      var slLetras = /^([a-zñA-Zá-ú+\s])*$/;
      var vemail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     function validacionInput(elemento){
      		var arrDato = elemento.value.split(" ");//split division
      		var datoConMayusculas = "";
      		  for(var i = 0; i<arrDato.length;i++){
      			datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
      			}
      			elemento.value=datoConMayusculas;
        	}

  //Validacion en el nombre en caso este vacio bloquearlo
        if(nombre.value.length==""){
          span[0].style.display="block";
        }
  //validacion en caso no sean letras bloquearlo
        else {
          if(!slLetras.test(nombre.value)){
            span[0].innerHTML="Ingrese solo letras"
            span[0].style.display="block";
          }else{
            validacionInput(nombre);
            span[0].style.display = "none";
          }
        }

  //Validacion en el apellido en caso este vacio
        if(apellido.value.length==""){
          span[1].style.display="block";
        }
  //Validacion en el apellido en caso no sean letras bloquearlo
        else{
          if(!slLetras.test(apellido.value)){
            span[1].innerHTML="Ingrese solo letras";
            span[1].style.display="block";
          }else{
            validacionInput(apellido);
            span[1].style.display = "none";
          }
        }

  //Validacion en el email en caso este vacio el campo bloquearlo
        if(email.value.length=""){
          span[2].style.display="block";
        }
  //Validacion de un email caso contratio bloquearlo
        else{
          if(!vemail.test(email.value)){
          span[2].innerHTML="Ingrese un email valido"
          span[2].style.display="block";
         }
         else {
          span[2].style.display = "none";
        }
       }
  //Validacion de la contraseña
        if(contrasena.value.length<6){
          span[3].innerHTML="Ingrese un password con 6 caracteres como minimo";
          span[3].style.display="block";
        }
        else if(contrasena.value=="password" || contrasena.value=="123456" || contrasena.value=="098765"){
          span[3].innerHTML="La contraseña no puede ser " +contrasena.value+ " ,no es segura";
          span[3].style.display="block";
        }
        else {
         span[3].style.display = "none";
       }
  //Validacion del seleccionar
        if(seleccionar.value==""){
         span[4].style.display="block";
         //span[4].innerHTML="Debe seleccionar un tipo de bicicleta";
        }else {
          span[4].style.display = "none";
        }
  }
