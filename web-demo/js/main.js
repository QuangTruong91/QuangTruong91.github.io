$(document).ready(function() {
    $('#slider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 5000,
        pauseOnHover: false,
        controlNav: false,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>'
    });

    $("#women-slider, #footwear-slider").owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 3000,
    });

    $('#product-tabs li').on('click', function() {
        var product_tab = $(this).find("h3").attr('class');
        $("#product-tabs li").removeClass("active");
        $(this).addClass("active");
        $("#" + product_tab + "-tab").slideDown(400).siblings().slideUp(400);
    });

    $("#bestseller-tab, #sale-tab").owlCarousel({
        items: 5,
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 3000,
    });

    $("#blog-slider").owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 3000,
    });

    $("#brand-slider").owlCarousel({
        items: 4,
        margin: 30,
        loop: true,
        dots: false,
        smartSpeed: 3000,
    });
});
