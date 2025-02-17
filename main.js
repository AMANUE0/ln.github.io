let menuButton = document.querySelector(".menu");
let navBar = document.querySelector(".nav-content");

menuButton.addEventListener("click", () => {
    navBar.classList.toggle("hidden-menu");
});

let btnTheme = document.querySelector(".btn-theme");

// Comprobar si hay un tema guardado en LocalStorage
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

btnTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Guardar la preferencia en LocalStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem("theme", "light");
        btnTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});
