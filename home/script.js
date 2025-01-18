
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })
});

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => myObserver.observe(element));



document.addEventListener("DOMContentLoaded", () => {
    
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

            contactForm.reset();
        });
    }

});
