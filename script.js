/* ==========================================
   NEXTSTEP SERVICES
   script.js
========================================== */

// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.style.display = "none";

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Sticky Header Shadow

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 3px 15px rgba(0,0,0,.10)";

    }

});

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function () {

    if (navbar.style.display === "block") {

        navbar.style.display = "none";

    } else {

        navbar.style.display = "block";

    }

});

// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Contact Form

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();

        const email = form.querySelector('input[type="email"]').value.trim();

        const mobile = form.querySelector('input[type="tel"]').value.trim();

        const message = form.querySelector("textarea").value.trim();

        if (

            name === "" ||

            email === "" ||

            mobile === "" ||

            message === ""

        ) {

            alert("Please fill all the fields.");

            return;

        }

        alert(

            "Thank you, " +

            name +

            "! Your message has been submitted."

        );

        form.reset();

    });

}

// Fade Animation

const cards = document.querySelectorAll(

    ".service-card, .why-card, .testimonial-card"

);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {

        threshold: 0.2

    }

);

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.6s";

    observer.observe(card);

});

// Footer Year

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML =

        "© " +

        new Date().getFullYear() +

        " NextStep Services. All Rights Reserved.";

}

console.log("NextStep Services Website Loaded Successfully");