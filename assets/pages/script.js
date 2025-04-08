function showContent(subject) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');

    // Mostrar la sección seleccionada
    const section = document.getElementById(subject);
    if (section) {
        section.style.display = 'block';
    }
}