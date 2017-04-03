window.addEventListener('load',function() {
var listado=[];// Guarda los datos del formulario
boton.addEventListener('click',function(evento) {// Evento del boton al hacerle click
evento.preventDefault();

function validateForm(){
      var nombre=document.getElementById("name");
      var apellido=document.getElementById("lastname");
      var email=document.getElementById("input-email");
      var contraseña=document.getElementById("input-password");
      var control = document.getElementById('control');
      var selecc = control.options[control.selectedIndex].value;
      var twiter=document.getElementById("input-social");
    }
});
});
var nombre=document.getElementById("name");
var apellido=document.getElementById("lastname");
    var soloLetras=function(e){
      var codigoTecla=e.keyCode;//document.write(codigoTecla);
      if ((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)||(codigoTecla==32 || codigoTecla==39 )){
        return true;
      }
      else{
        return false;
      }
    }
    nombre.onkeypress=soloLetras;
    apellido.onkeypress=soloLetras;
