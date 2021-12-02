$(document).ready(() => {
    $(".owl-carousel").owlCarousel();

    $(".trendingPrev").click(() => {
        $(".trending-carousel").trigger("prev.owl.carousel");
    });
    $(".trendingNext").click(() => {
        $(".trending-carousel").trigger("next.owl.carousel");
    });

    $(".memberPrev").click(() => {
        $(".member-carousel").trigger("prev.owl.carousel");
    });
    $(".memberNext").click(() => {
        $(".member-carousel").trigger("next.owl.carousel");
    });

    $(".testimonialNext").click(() => {
        $(".testimonial-carousel").trigger("next.owl.carousel");
    });

    $(".blogThreeColumnPrev").click(() => {
        $(".blog-three-column-carousel").trigger("prev.owl.carousel");
    });
    $(".blogThreeColumnNext").click(() => {
        $(".blog-three-column-carousel").trigger("next.owl.carousel");
    });

    const counterUp = window.counterUp.default;
    const el = document.querySelectorAll(".counter");
    el.forEach((element) => {
        new Waypoint({
            element: element,
            handler: function () {
                counterUp(element, {
                    duration: 2000,
                    delay: 16,
                });
                this.destroy();
            },
            offset: "bottom-in-view",
        });
    });

    $(".gallery-flex").isotope({
        itemSelector: ".gallery-item",
        percentPosition: true,

        // layout mode options
        masonry: {
            columnWidth: 0,
            horizontalOrder: true,
        },
    });

    $(".filter-btns").on("click", "div", function () {
        var filterValue = $(this).attr("data-filter");
        $(".gallery-flex").isotope({ filter: filterValue });
    });
});

$(".trending-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        },
    },
});

$(".member-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        },
    },
});

$(".testimonial-carousel").owlCarousel({
    items: 1,
    loop: true,
    dotsEach: true,
    stagePadding: 0,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayHoverPause: true,
});

$(".blog-breaking-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    stagePadding: 0,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayHoverPause: true,
});

$(".blog-three-column-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 2,
        },
        768: {
            items: 3,
        },
    },
});
