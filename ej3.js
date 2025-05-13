// Crear formulario completo
document.getElementById("contenido").innerHTML = `
  <h2>Ingrese sus datos</h2>
  <form id="formulario">
    Nombre: <input type="text" id="nombre"><br>
    Apellido: <input type="text" id="apellido"><br>
    Ciudad: <input type="text" id="ciudad"><br>
    Fecha de nacimiento: <input type="date" id="fechaNacimiento"><br>
    <button type="submit">Enviar</button>
  </form>
  <h1 id="mensaje"></h1>
  <h2 id="diasVividos"></h2>
`;

// Calcular días vividos
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let ciudad = document.getElementById("ciudad").value;
  let fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
  let hoy = new Date();

  let diferencia = hoy - fechaNacimiento;
  let diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  document.getElementById("mensaje").textContent =
    `¡Bienvenida ${nombre} ${apellido} desde ${ciudad}!`;
  document.getElementById("diasVividos").textContent =
    `Has vivido aproximadamente ${diasVividos} días.`;
});
