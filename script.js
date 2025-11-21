// Animación de las secciones al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    function showSections() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", showSections);
    showSections();
});
