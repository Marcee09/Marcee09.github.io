
document.addEventListener("DOMContentLoaded", function() {
  var customAlert1 = document.getElementById('customAlert1');
  customAlert1.style.display = 'none';
  var customAlert2 = document.getElementById('customAlert2');
  customAlert2.style.display = 'none';
  var confeti=document.getElementById('confeti');
  confeti.style.display='none'
});


function obtenerNombreAleatorio() {
    var nombres = document.getElementById('listaNombres').value;
    var nombresArray = nombres.split('\n').map(nombre => nombre.trim()).filter(nombre => nombre !== '');
  
   /* if (nombresArray.length === 0) {
        document.getElementById('resultado').innerHTML = 'No se han ingresado nombres.';
    } else {
        var nombreAleatorio = nombresArray[Math.floor(Math.random() * nombresArray.length)];
        document.getElementById('resultado').innerHTML = 'Ganador: '+ nombreAleatorio + '🎉🎉🎉';
        
    }

      if (nombresArray.length === 0) {
        document.getElementById('resultado').innerHTML = 'No se han ingresado nombres.';
    } else {
        var nombreAleatorio = nombresArray[Math.floor(Math.random() * nombresArray.length)];
        document.getElementById('resultado').innerHTML = 'Ganador: '+ nombreAleatorio + '🎉🎉🎉';
        
    }*/

    let boton= document.getElementById('btnPreparar');

    if ((boton.click)&&(nombresArray.length === 0)) {
       // alert("No se han ingresado nombres");
        var alert1= document.getElementById('alertMessage1').innerHTML="No se han registrado nombres";
        var customAlert1= document.getElementById('customAlert1');
        customAlert1.style.display = 'block';
      
    
    }else{
        
       // alert("Felicidades" + " "+ nombreAleatorio + " "+"ganaste!");
       
       var nombreAleatorio1 = nombresArray[Math.floor(Math.random() * nombresArray.length)];
       var nombreAleatorio2 = nombresArray[Math.floor(Math.random() * nombresArray.length)];
       var nombreAleatorio3 = nombresArray[Math.floor(Math.random() * nombresArray.length)];
       var alert2 = document.getElementById('alertMessage2').innerHTML = "#1: " + nombreAleatorio1 + "<br>#2: " + nombreAleatorio2 + "<br>#3: " + nombreAleatorio3;

        var customAlert2= document.getElementById('customAlert2');
        customAlert2.style.display = 'block';
        var confeti=document.getElementById('confeti');
        confeti.style.display='block';
        var primeraParte=document.getElementById('primeraParte');
        primeraParte.style.display='none';
      
    }
}

/*function showCustomAlert1() {
    var customAlert1= document.getElementsById('customAlert1');
    customAlert1.style.display = 'block';
  }*/

 

  
  function hideCustomAlert1() {
    var customAlert = document.getElementById("customAlert1");
    customAlert.style.display = "none";
  }

  function hideCustomAlert2() {
    var customAlert = document.getElementById("customAlert2");
    customAlert.style.display = "none";
  }


