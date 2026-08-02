(function ($) {
    "use strict";

    /*----------------------------------------
        Sticky Menu Activation
    ------------------------------------------*/
    // Cached selectors to optimize scroll performance
    var $window = $(window),
        $headerSticky = $('.header-sticky'),
        $scrollUp = $('#scroll-top'),
        lastScrollTop = 0;

    $window.on('scroll', function () {
        var currentScroll = $window.scrollTop();

        // Sticky Header logic
        if (currentScroll > 350) {
            $headerSticky.addClass('sticky');
        } else {
            $headerSticky.removeClass('sticky');
        }

        // Scroll Up Button logic (Integrated here to avoid multiple scroll listeners)
        if (currentScroll > lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
            if (currentScroll > 200) {
                $scrollUp.addClass('show');
            } else {
                $scrollUp.removeClass('show');
            }
        }
        lastScrollTop = currentScroll;
    });

    $scrollUp.on('click', function (evt) {
        $('html, body').animate({scrollTop: 0}, 600);
        evt.preventDefault();
    });
    
    /*-----------------------------------------
        Off Canvas Mobile Menu
    -------------------------------------------*/
    $(".header-action-btn-menu").on('click', function () {
        $("body").addClass('fix');
        $(".mobile-menu-wrapper").addClass('open');
    });

    $(".offcanvas-btn-close, .offcanvas-overlay").on('click', function () {
        $("body").removeClass('fix');
        $(".mobile-menu-wrapper").removeClass('open');
    });

    /*-----------------------------------------
        Off Canvas Search
    -------------------------------------------*/
    $(".header-action-btn-search").on('click', function () {
        $("body").addClass('fix');
        $(".offcanvas-search").addClass('open');
    });

    $(".offcanvas-btn-close, .body-overlay").on('click', function () {
        $("body").removeClass('fix');
        $(".offcanvas-search").removeClass('open');
    });
    
    /*-----------------------------------------
        Off Canvas Cart
    -------------------------------------------*/
    $(".header-action-btn-cart").on('click', function () {
        $("body").addClass('fix');
        $(".cart-offcanvas-wrapper").addClass('open');
    });

    $(".offcanvas-btn-close, .offcanvas-overlay").on('click', function () {
        $("body").removeClass('fix');
        $(".cart-offcanvas-wrapper").removeClass('open');
    });
    
    /*----------------------------------------
        Responsive Mobile Menu
    ------------------------------------------*/
    var $offCanvasNav = $('.mobile-menu, .category-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

    // Close Off Canvas Sub Menu initially
    $offCanvasNavSubMenu.slideUp();

    // Category Sub Menu Toggle
    $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        var $parentLi = $this.parent('li');
        
        if ($parentLi.attr('class') && $parentLi.attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $parentLi.removeClass('active');
                $this.siblings('ul').slideUp();
            } else {
                $parentLi.addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
    
    /*----------------------------------------
        Slider Activation
    ------------------------------------------*/

    /* Hero Slider Activation */
    var heroSlider = new Swiper('.hero-slider .swiper-container', {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.hero-slider .home-slider-next',
            prevEl: '.hero-slider .home-slider-prev'
        },
        pagination: {
            el: '.hero-slider .swiper-pagination',
            clickable: true
        },
        observer: true,
        observeParents: true
    });
        
    /* Product Carousel Activation */
    var productCarousel = new Swiper('.product-carousel .swiper-container', {
        loop: true,
        speed: 800,
        observer: true,
        observeParents: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.product-carousel .swiper-product-button-next',
            prevEl: '.product-carousel .swiper-product-button-prev'
        },
        pagination: {
            el: '.product-carousel .swiper-pagination',
            clickable: true
        },
        breakpoints: {
            0: {slidesPerView: 1, spaceBetween: 10},
            576: {slidesPerView: 2, spaceBetween: 15},
            992: {slidesPerView: 3, spaceBetween: 20},
            1200: {slidesPerView: 4, spaceBetween: 30}
        }
    });

    /* Modal Product Carousel Activation */
    var modalProductCarousel = new Swiper('.modal-product-carousel .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.modal-product-carousel .swiper-product-button-next',
            prevEl: '.modal-product-carousel .swiper-product-button-prev'
        }
    });

    /* Product Deal Carousel Activation */
    var productDealCarousel = new Swiper('.product-deal-carousel .swiper-container', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.product-deal-carousel .swiper-product-deal-next',
            prevEl: '.product-deal-carousel .swiper-product-deal-prev'
        },
        pagination: {
            el: '.product-deal-carousel .swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            575: { slidesPerView: 1 },
            768: { slidesPerView: 2 }
        }
    });

    /* Product List Carousel Activation */
    var productListCarousel1 = new Swiper('.product-list-carousel .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.product-list-carousel .swiper-product-list-next',
            prevEl: '.product-list-carousel .swiper-product-list-prev'
        }
    });

    var productListCarousel2 = new Swiper('.product-list-carousel-2 .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.product-list-carousel-2 .swiper-product-list-next',
            prevEl: '.product-list-carousel-2 .swiper-product-list-prev'
        }
    });

    var productListCarousel3 = new Swiper('.product-list-carousel-3 .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.product-list-carousel-3 .swiper-product-list-next',
            prevEl: '.product-list-carousel-3 .swiper-product-list-prev'
        }
    });

    /*-- Brand Logo Carousel --*/
    var brandCarousel = new Swiper('.brand-logo-carousel .swiper-container', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        slidesPerView: 5,
        effect: 'slide',
        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            992: { slidesPerView: 5, spaceBetween: 30 }
        }
    });

    /*-- Single Product Thumbnail Vertical -- */
    var zoomThumb = new Swiper('.product-thumb-vertical', {
        spaceBetween: 0,
        slidesPerView: 4,
        direction: 'vertical',
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            575: { slidesPerView: 3 },
            767: { slidesPerView: 3 },
            991: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });

    var zoomTop = new Swiper('.single-product-vertical-tab', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.product-thumb-vertical .swiper-button-vertical-next',
            prevEl: '.product-thumb-vertical .swiper-button-vertical-prev',
        },
        thumbs: {
            swiper: zoomThumb
        }
    });
    
    /*-- Single Product Thumbnail Horizontal -- */
    var galleryThumbs = new Swiper('.single-product-thumb', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: { slidesPerView: 2 },
            575: { slidesPerView: 3 },
            767: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
        }
    });

    var galleryTop = new Swiper('.single-product-img', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.single-product-thumb, .swiper-button-horizental-next',
            prevEl: '.single-product-thumb, .swiper-button-horizental-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    /*----------------------------------------
        Countdown
    ------------------------------------------*/
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        if(typeof $this.countdown === 'function') {
            $this.countdown(finalDate, function(event) {
                $this.html(event.strftime('<div class="single-countdown"><span class="single-countdown_time">%D</span><span class="single-countdown_text">Days</span></div><div class="single-countdown"><span class="single-countdown_time">%H</span><span class="single-countdown_text">Hours</span></div><div class="single-countdown"><span class="single-countdown_time">%M</span><span class="single-countdown_text">Min</span></div><div class="single-countdown"><span class="single-countdown_time">%S</span><span class="single-countdown_text">Sec</span></div>'));
            });
        }
    });

    /*----------------------------------------
        Aos Activation Js
    ------------------------------------------*/
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1500,
            disable: false,
            offset: 0,
            once: true,
            easing: 'ease',
        });
    }

    /*----------------------------------------
        Shop Grid Activation
    ------------------------------------------*/
    $('.shop_toolbar_btn > button').on('click', function (e) {
        e.preventDefault();
        
        $('.shop_toolbar_btn > button').removeClass('active');
        $(this).addClass('active');
        
        var parentsDiv = $('.shop_wrapper');
        var viewMode = $(this).data('role');
        
        parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

        if(viewMode == 'grid_3'){
            parentsDiv.children().addClass('col-lg-4 col-md-4 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');
        }
        if(viewMode == 'grid_4'){
            parentsDiv.children().addClass('col-xl-3 col-lg-4 col-md-4 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
        }
        if(viewMode == 'grid_list'){
            parentsDiv.children().addClass('col-12').removeClass('col-xl-3 col-lg-3 col-lg-4 col-md-6 col-md-4 col-sm-6 col-cust-5');
        }
    });

    /*----------------------------------------
        Nice Select
    ------------------------------------------*/
    $(document).ready(function () {
        if($.fn.niceSelect) {
            $('.nice-select').niceSelect();
        }
    });

    /*-----------------------------------------
        Price Slider Active
    ------------------------------------------- */
    if ($.fn.slider) {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 500,
            values: [ 0, 500 ],
            slide: function( event, ui ) {
                $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
           " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    }

    /*----------------------------------------
        Cart Plus Minus Button
    ------------------------------------------*/
    $('.cart-plus-minus').append(
        '<div class="dec qtybutton"><i class="fa fa-minus"></i></div><div class="inc qtybutton"><i class="fa fa-plus"></i></div>'
    );
    
    $('.qtybutton').on('click', function () {
        var $button = $(this);
        var $input = $button.parent().find('input');
        var oldValue = parseFloat($input.val()) || 1;
        var newVal;

        if ($button.hasClass('inc')) {
            newVal = oldValue + 1;
        } else {
            newVal = (oldValue > 1) ? oldValue - 1 : 1;
        }
        $input.val(newVal);
    });

    /*----------------------------------------
        Lightgallery Active
    ------------------------------------------*/
    if ($.fn.lightGallery) {
        $(".popup-gallery").lightGallery({
            pager: false,
            thumbnail: false,
            fullScreen: true,
            zoom: true,
            rotateLeft: true,
            rotateRight: true
        });
    }

    /*-----------------------------------------
        Sticky Sidebar Activation
    -------------------------------------------*/
    if ($.fn.theiaStickySidebar) {
        $('#sticky-sidebar').theiaStickySidebar({
            additionalMarginTop: 150
        });
    }

    /*----------------------------------------
        Toggle Function Active
    ------------------------------------------*/
    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle(500);
    });
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle(500);
    });
    $('#cbox').on('click', function () {
        $('#cbox-info').slideToggle(500);
    });
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle(1000);
    });

    /*---------------------------------
        MailChimp
    -----------------------------------*/
    if ($.fn.ajaxChimp) {
        $('#mc-form').ajaxChimp({
            language: 'en',
            callback: mailChimpResponse,
            url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'
        });
    }
    
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

    /*-------------------------
        Ajax Contact Form 
    ---------------------------*/
    $(function() {
        var form = $('#contact-form');
        var formMessages = $('.form-messege');

        $(form).submit(function(e) {
            e.preventDefault();
            var formData = $(form).serialize();

            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                $(formMessages).removeClass('error').addClass('success').text(response);
                $('#contact-form input, #contact-form textarea').val('');
            })
            .fail(function(data) {
                $(formMessages).removeClass('success').addClass('error');
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occurred and your message could not be sent.');
                }
            });
        });
    });

})(jQuery);