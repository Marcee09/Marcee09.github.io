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
        <button type="button" onclick="agregarCampo()">Agregar otro participante</button>
    `;
    container.appendChild(nuevoRow);
  }

  function obtenerNombreAleatorio() {
    const resultadosDiv = document.getElementById('resultados'); // Asegúrate de que existe
    const cantidadGanadores = parseInt(document.getElementById('cantidadGanadores').value, 10);
    const cantidadSuplentes = parseInt(document.getElementById('cantidadSuplentes').value, 10);
  
    if (isNaN(cantidadGanadores) || isNaN(cantidadSuplentes)) {
        alert('Por favor, ingresa números válidos.');
        return;
    }
  
    const participantes = Array.from(document.querySelectorAll('.nombre-input'))
        .map(input => input.value.trim())
        .filter(nombre => nombre !== '');
  
    if (participantes.length < cantidadGanadores) {
        alert('No hay suficientes participantes.');
        return;
    }
  
    const seleccionados = [];
    const suplentes = [];
  
    while (seleccionados.length < cantidadGanadores && participantes.length > 0) {
        const randomIndex = Math.floor(Math.random() * participantes.length);
        seleccionados.push(participantes.splice(randomIndex, 1)[0]);
    }
  
    while (suplentes.length < cantidadSuplentes && participantes.length > 0) {
        const randomIndex = Math.floor(Math.random() * participantes.length);
        suplentes.push(participantes.splice(randomIndex, 1)[0]);
    }
  
    resultadosDiv.innerHTML = `
        <h2>Resultados del Sorteo</h2><br>
        <div class="Lista-ganadores">
        <h3>Ganadores principales:</h3>
        <li>
            ${seleccionados.map(ganador => `<li>${ganador}</li>`).join('')}
        </li>
        <h3>Ganadores suplentes:</h3>
        <li>
            ${suplentes.map(suplente => `<li>${suplente}</li>`).join('')}
        </li><br>
        </div>
        <p>¡Felicidades a los ganadores!</p>
    `;
  }
  








