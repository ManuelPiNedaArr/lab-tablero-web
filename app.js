const TAREAS = [
  { id: 1, texto: "Aprender Git", hecha: true },
  { id: 2, texto: "Crear ramas", hecha: false },
  { id: 3, texto: "Resolver conflictos", hecha: false }
];

function render() {
  const lista = document.querySelector("#lista");
  lista.innerHTML = "";
  TAREAS.forEach(function (t) {
    const li = document.createElement("li");
    li.textContent = (t.hecha ? "[x] " : "[ ] ") + t.texto;
    lista.appendChild(li);
  });
}

render();