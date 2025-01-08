// JavaScript Functionality for Real Estate Frontend

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".navbar nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Form submission logic
    const contactForm = document.querySelector(".contact form");

    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const data = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            alert("Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso.");

            // Optionally reset the form
            contactForm.reset();
        });
    }

});
