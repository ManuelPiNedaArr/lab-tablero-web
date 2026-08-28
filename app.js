const TAREAS = [
  { id: 1, texto: "Aprender Git", hecha: true },
  { id: 2, texto: "Crear ramas", hecha: false },
  { id: 3, texto: "Resolver conflictos", hecha: false }
];

function actualizarContador() {
  const pendientes = TAREAS.filter(function (t) {
    return !t.hecha;
  }).length;
  document.querySelector("#contador").textContent = pendientes + " pendientes";
}

function mostrarEstadoVacio() {
  const aviso = document.querySelector("#vacio");
  aviso.hidden = TAREAS.length > 0;
}

function render() {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
  TAREAS.forEach(function (t) {
    const li = document.createElement("li");
    li.textContent = (t.hecha ? "[x] " : "[ ] ") + t.texto;
    lista.appendChild(li);
  });
  actualizarContador();
  mostrarEstadoVacio();
}

render();