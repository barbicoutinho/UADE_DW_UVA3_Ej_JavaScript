// Crear formulario
document.getElementById("contenido").innerHTML = `
  <h2>Ingrese sus datos</h2>
  <form id="formulario">
    Nombre: <input type="text" id="nombre"><br>
    Apellido: <input type="text" id="apellido"><br>
    Ciudad: <input type="text" id="ciudad"><br>
    <button type="submit">Enviar</button>
  </form>
  <h1 id="mensaje"></h1>
`;

// Manejar el envío
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let ciudad = document.getElementById("ciudad").value;

  document.getElementById("mensaje").textContent =
    `¡Bienvenida ${nombre} ${apellido} desde ${ciudad}!`;
});
