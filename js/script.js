$(document).ready(function() {
    var button = $(".close_button");
    var navbar = $(".section-subheader");
    var body = $("body");

    $(button).click(function () {
    
        if (!navbar.is(':visible')) {
            navbar.slideDown('normal');
            body.css("overflow-y", "hidden");
        } 
        else {
            navbar.slideUp('normal');
            body.css("overflow-y", "");
        }
    });

    $('#work-slider').lightSlider({
        item:2,
        loop:false,
        slideMove:1,
        slideMargin:60,
        galleryMargin: 50,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:1052,
                settings: {
                    slideMargin:30
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                  }
            }
        ]
    }); 

    $('#reviews-slider').lightSlider({
        item:2,
        loop:false,
        slideMove:1,
        slideMargin:60,
        galleryMargin: 50,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:1052,
                settings: {
                    slideMargin:30
                  }
            },
            {
                breakpoint:768,
                settings: {
                    item:1,
                  }
            }
        ]
    });  
});