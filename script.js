document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("nav-links");

    // SAFETY CHECK (VERY IMPORTANT)
    if (menuToggle && mobileNav) {

        menuToggle.addEventListener("click", () => {
            mobileNav.classList.toggle("active");
        });

    } else {
        console.log("Menu toggle or nav links not found");
    }

});