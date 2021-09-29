// Slick SLIDE ACTION

$(document).ready(function(){
    $('.category').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;"><img src="assets/img/icon/arrow-left.png" alt=""></button>',
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;"><img src="assets/img/icon/arrow-right.png" alt=""></button>',
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
            },
            {
            breakpoint: 980,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    })
});
