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
  mostrarEstadoVacio();
}

render();