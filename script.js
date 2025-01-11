// Loader
window.addEventListener("load", function () {
    document.querySelector(".loader").classList.add("hidden");
});

// Owl Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    // Mobile Menu
    $(".menu-toggle").on("click", function () {
        $("nav ul").toggleClass("active");
    });

    // Smooth Scrolling
    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 100);
    });
});
