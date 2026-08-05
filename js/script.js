/*
==========================================================
Israeli Fantasy Football League
Office of the Commissioner
Version 1.0
==========================================================
*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("IFFL Office of the Commissioner Loaded");

    /* ---------------------------------------------
       Active Navigation Highlight
    --------------------------------------------- */

    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".navigation a");

    navLinks.forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });

    /* ---------------------------------------------
       Footer Year
    --------------------------------------------- */

    const year = new Date().getFullYear();

    const copyright = document.querySelector("#copyright");

    if (copyright) {

        copyright.innerHTML =
            "&copy; " +
            year +
            " Israeli Fantasy Football League. All Rights Reserved.";

    }

    /* ---------------------------------------------
       Fade-In Animation
    --------------------------------------------- */

    const cards = document.querySelectorAll(
        ".card, .quick-card, .official, .notice-card, .office-mission"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    cards.forEach(card => {

        card.classList.add("hidden");

        observer.observe(card);

    });

});
