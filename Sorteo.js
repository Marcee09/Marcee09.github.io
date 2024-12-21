document.addEventListener("DOMContentLoaded", function () {
  const customAlert1 = document.getElementById('customAlert1');
  customAlert1.style.display = 'none';

  const customAlert2 = document.getElementById('customAlert2');
  customAlert2.style.display = 'none';

  const confeti = document.getElementById('confeti');
  confeti.style.display = 'none';
});

function obtenerNombreAleatorio() {
  const nombres = Array.from(document.querySelectorAll('.nombre-input'))
      .map(input => input.value.trim())
      .filter(nombre => nombre !== "");

  const cantidadGanadores = parseInt(document.getElementById('cantidadGanadores').value) || 0;
  const cantidadSuplentes = parseInt(document.getElementById('cantidadSuplentes').value) || 0;

  if (nombres.length < cantidadGanadores + cantidadSuplentes) {
      document.getElementById('alertMessage1').innerHTML = "No hay suficientes nombres registrados para el sorteo.";
      const customAlert1 = document.getElementById('customAlert1');
      customAlert1.style.display = 'block';
      return;
  }

  const seleccionados = [];
  while (seleccionados.length < cantidadGanadores && nombres.length > 0) {
      const indice = Math.floor(Math.random() * nombres.length);
      seleccionados.push(nombres.splice(indice, 1)[0]);
  }

  const suplentes = [];
  while (suplentes.length < cantidadSuplentes && nombres.length > 0) {
      const indice = Math.floor(Math.random() * nombres.length);
      suplentes.push(nombres.splice(indice, 1)[0]);
  }

  document.getElementById('alertMessage2').innerHTML = `
      <strong>Ganadores:</strong><br>${seleccionados.join('<br>') || 'Sin ganadores'}<br><br>
      <strong>Suplentes:</strong><br>${suplentes.join('<br>') || 'Sin suplentes'}
  `;
  document.getElementById('customAlert2').style.display = 'block';
  document.getElementById('confeti').style.display = 'block';
  document.getElementById('primeraParte').style.display = 'none';
}

function hideCustomAlert1() {
  document.getElementById("customAlert1").style.display = "none";
}

function hideCustomAlert2() {
  document.getElementById("customAlert2").style.display = "none";
}

function agregarCampo() {
  // Eliminar el botón del último campo
  const ultimoCampo = document.querySelector('.nombre-row:last-child');
  if (ultimoCampo) {
      const boton = ultimoCampo.querySelector('button');
      if (boton) {
          boton.remove();
      }
  }

  // Crear un nuevo campo al final
  const container = document.getElementById('nombresContainer');
  const nuevoRow = document.createElement('div');
  nuevoRow.classList.add('nombre-row');
  nuevoRow.innerHTML = `
      <input type="text" placeholder="Ingrese un nombre" class="nombre-input">
      <button type="button" onclick="agregarCampo()">+</button>
  `;
  container.appendChild(nuevoRow);
}




