function actualizarContador() {
  const pendientes = TAREAS.filter(function (t) {
    return !t.hecha;
  }).length;
  document.querySelector("#contador").textContent = pendientes + " pendientes";
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
}

render();