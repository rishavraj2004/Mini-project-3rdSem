/* ========================== INITIAL PAGE LOAD ANIMATIONS ========================== */
var tl = gsap.timeline({
    defaults: { ease: "power2.out" }
});

/* ----- NAVBAR ----- */
tl.from(".logo-bar .icon-bar", { opacity: 0, y: -20, duration: 0.4 })
    .from(".navh2", { opacity: 0, y: -20, duration: 0.4 })
    .from(".navpart h4", { opacity: 0, y: -20, duration: 0.4, stagger: 0.15 })
    .from(".nav .btn", { opacity: 0, scale: 0.8, duration: 0.4 });

/* ----- HERO SECTION ----- */
tl.from(".top-head", { opacity: 0, y: 25, duration: 0.5 })
    .from(".down-head", { opacity: 0, y: 30, duration: 0.5 })
    .from(".para-head", { opacity: 0, y: 30, duration: 0.5 })
    .from(".button-div .btn", { opacity: 0, scale: 0.8, duration: 0.4, ease: "back.out(1.6)" })
    .from(".pro-video", { opacity: 0, y: 40, duration: 0.8 });

/* ========================== SCROLLTRIGGER ANIMATIONS ========================== */
gsap.registerPlugin(ScrollTrigger);

/* ----- ABOUT SECTION ----- */
gsap.from("#about .page2-head, #about .about-head", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    stagger: 0.2
});

gsap.from("#about .about-img", {
    scrollTrigger: {
        trigger: "#about .about-img",
        start: "top 85%",
    },
    opacity: 0,
    x: -60,
    duration: 0.8
});

gsap.from("#about .description", {
    scrollTrigger: {
        trigger: "#about .description",
        start: "top 85%",
    },
    opacity: 0,
    x: 60,
    duration: 0.8
});

/* Icon boxes fade + pop */
gsap.from("#about .icons-des", {
    scrollTrigger: {
        trigger: "#about .number-description",
        start: "top 85%",
    },
    opacity: 0,
    scale: 0.7,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)"
});

/* ----- HOW IT WORKS SECTION ----- */
gsap.from("#works .page2-head", {
    scrollTrigger: {
        trigger: "#works",
        start: "top 80%",
    },
    opacity: 0,
    y: 40,
    duration: 0.6
});

gsap.from("#works .box-pad", {
    scrollTrigger: {
        trigger: "#works .work-box",
        start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.5,
    stagger: 0.2
});

/* ----- FOOTER SECTION ----- */
gsap.from("footer .footer-grid > div", {
    scrollTrigger: {
        trigger: "footer",
        start: "top 85%",
    },
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.2
});

// Js for mobile
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".mobile-menu-icon");
    const navPart = document.querySelector(".navpart");

    menuIcon.addEventListener("click", () => {
        navPart.classList.toggle("active");
        menuIcon.name = navPart.classList.contains("active") ? "close-outline" : "menu-outline";
    });
});