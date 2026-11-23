
// Wait until the webpage is loaded
document.addEventListener("DOMContentLoaded", function () {

    // Select all sections
    const sections = document.querySelectorAll("section");

    // Select navigation links
    const navLinks = document.querySelectorAll(".nav-links a");

    // Add fade-in animation to sections
    sections.forEach(function (section) {
        section.classList.add("fade-in");
    });

    // Observe sections while scrolling
    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    // Start observing each section
    sections.forEach(function (section) {
        observer.observe(section);
    });

    // Highlight the active navigation link
    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });

    // Automatically update footer year
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            "© " + new Date().getFullYear() +
            " Jeevanesh R. All Rights Reserved.";
    }

});
