// Referencias al botón y al contenedor
const botonGenerar = document.getElementById("generar-btn");
const contenedor = document.getElementById("contenedor-tarjetas");

// Clase Usuario
class Usuario {
  constructor(id) {
    this.id = id;
    this.nombre = `Usuario ${id}`;
    this.edad = this.generarEdad();
    this.ciudad = `Ciudad ${id}`;
    this.email = `usuario${id}@correo.com`;
    this.fechaRegistro = new Date();
  }

  // Método para generar una edad aleatoria
  generarEdad() {
    return Math.floor(Math.random() * (60 - 18 + 1)) + 18;
  }

  // Método para presentar al usuario
  presentar() {
    return `Soy ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
  }

  // Método para mostrar el tiempo desde su creación
  tiempoDesdeRegistro() {
    const ahora = new Date();
    const segundos = Math.floor((ahora - this.fechaRegistro) / 1000);
    return `${segundos} segundos desde el registro.`;
  }
}

// Función para generar un número de usuarios
function generarUsuarios(cantidad) {
  const usuarios = [];

  for (let i = 1; i <= cantidad; i++) {
    const nuevoUsuario = new Usuario(i);
    usuarios.push(nuevoUsuario);
  }

  return usuarios;
}

// Función para mostrar las tarjetas en el DOM
function mostrarTarjetas(usuarios) {
  contenedor.innerHTML = ""; // Limpia el contenedor

  usuarios.forEach((usuario) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    tarjeta.innerHTML = `
      <h2>${usuario.nombre}</h2>
      <p><strong>Edad:</strong> ${usuario.edad}</p>
      <p><strong>Ciudad:</strong> ${usuario.ciudad}</p>
      <p><strong>Email:</strong> ${usuario.email}</p>
      <p>${usuario.presentar()}</p>
      <p><em>${usuario.tiempoDesdeRegistro()}</em></p>
    `;

    contenedor.appendChild(tarjeta);
  });
}

// Evento del botón
botonGenerar.addEventListener("click", () => {
  let cantidad = parseInt(prompt("¿Cuántos usuarios deseas generar? (1-20)"));

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, introduce un número válido mayor que 0.");
    return;
  }

  const usuarios = generarUsuarios(cantidad);
  mostrarTarjetas(usuarios);
});
