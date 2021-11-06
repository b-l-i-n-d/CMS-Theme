$(document).ready(() => {
    $(".owl-carousel").owlCarousel();

    $('.carouselPrev').click(() => {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });
    $('.carouselNext').click(() => {
        $('.owl-carousel').trigger('next.owl.carousel');
    });
});

$(".owl-carousel").owlCarousel({
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
            items:3,
        },
        1024: {
            items: 4,
        },
    },
});
