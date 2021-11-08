$(document).ready(() => {
    $(".owl-carousel").owlCarousel();

    $('.carouselPrev').eq(0).click(() => {
        $('.owl-carousel').eq(0).trigger('prev.owl.carousel');
    });
    $('.carouselNext').eq(0).click(() => {
        $('.owl-carousel').eq(0).trigger('next.owl.carousel');
    });

    $('.carouselPrev').eq(1).click(() => {
        $('.owl-carousel').eq(1).trigger('prev.owl.carousel');
    });
    $('.carouselNext').eq(1).click(() => {
        $('.owl-carousel').eq(1).trigger('next.owl.carousel');
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
