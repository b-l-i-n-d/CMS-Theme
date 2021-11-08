$(document).ready(() => {
    $(".owl-carousel").owlCarousel();

    $('.trendingPrev').click(() => {
        $('.trending-carousel').trigger('prev.owl.carousel');
    });
    $('.trendingNext').click(() => {
        $('.trending-carousel').trigger('next.owl.carousel');
    });

    $('.memberPrev').click(() => {
        $('.member-carousel').trigger('prev.owl.carousel');
    });
    $('.memberNext').click(() => {
        $('.member-carousel').trigger('next.owl.carousel');
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
            items:3,
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
            items:3,
        },
        1024: {
            items: 4,
        },
    },
});
