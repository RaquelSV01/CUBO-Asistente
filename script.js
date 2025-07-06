const pages = {
  inicio: `
    <h2>Bienvenido a CUBO</h2>
    <p>Tu asistente estudiantil inteligente. Usa el menú para navegar.</p>
  `,
  tareas: `
    <h2>Tareas</h2>
    <ul>
      <li>Pendiente: Terminar el informe</li>
      <li>En proceso: Exposición de historia</li>
      <li>Completada: Actividad de matemáticas</li>
    </ul>
  `,
  agenda: `
    <h2>Agenda</h2>
    <p>Aquí podrás agregar eventos y recordatorios académicos.</p>
  `,
  tutoriales: `
    <h2>Tutoriales</h2>
    <ul>
      <li>Cómo usar Word</li>
      <li>Crear presentaciones en PowerPoint</li>
      <li>Insertar citas en trabajos académicos</li>
    </ul>
  `,
  notas: `
    <h2>Notas</h2>
    <textarea rows="8" cols="50" placeholder="Escribe tus notas aquí..."></textarea>
    <br /><button>Guardar</button>
  `,
  perfil: `
    <h2>Perfil</h2>
    <form>
      <label>Nombre: <input type="text" /></label><br /><br />
      <label>Rol: 
        <select>
          <option>Estudiante</option>
          <option>Catedrático</option>
        </select>
      </label><br /><br />
      <label>Escuela: <input type="text" /></label><br /><br />
      <button type="submit">Guardar cambios</button>
    </form>
  `,
};

// 👉 2. Cargar la sección principal
const mainContent = document.getElementById("main-content");
mainContent.innerHTML = pages.inicio;

// 👉 3. Habilitar navegación de las secciones
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");
    if (pages[page]) {
      mainContent.innerHTML = pages[page];
    }
  });
});

// 👉 4. Mostrar/Ocultar menú lateral (sidebar)
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

if (toggleBtn && sidebar) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
}
