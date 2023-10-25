document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", validarDatos);
});

function validarDatos(evento) {
  evento.preventDefault();
  var nombre = document.getElementById("nombre").value;
  if (nombre.length == 0) {
    alert("El campo Nombre se encuentra sin completar.");
    return;
  }


  var patente = document.getElementById('patente').value;
  if (patente.length < 7) {
    alert('La Patente no es válida. La misma debe contener al menos siete caracteres alfanuméricos.');
    return;
  }

  var fecha = document.getElementById('fecha').value;
  if (fecha.length == 0) {
    alert('El campo Fecha / Horario se encuentra sin completar.');
    return;
  }

  this.submit();
  alert('Su turno se ha reservado correctamente. Muchas gracias.');
  return;
}

var telefono = document.getElementById("telefono").value;
var patente = document.getElementById("patente").value;
if (patente.length < 7) {
  alert("La Patente no es válida. La misma debe contener al menos siete caracteres alfanuméricos.");
  return;
}

var fecha = document.getElementById("fecha").value;
if (fecha.length == 0) {
  alert("El campo Fecha / Horario se encuentra sin completar.");
  return;
}

this.submit();
alert("Su turno se ha reservado correctamente. Muchas gracias.");



