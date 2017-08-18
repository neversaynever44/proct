$(document).ready(function() {
// slider ingridients
	$('.js-slider2').owlCarousel({
		autoplay: true,
		autoplayTimeout: 6000,
		center: true,
		loop: true,
		smartSpeed: 550,
		slideSpeed: 500,
		nav: false,
		// stagePadding: 30,	
		// margin: 30,
    items: 5,
    mouseDrag: false,
    touchDrag: true,
    onInitialized: carouselInitialized2,
    onTranslate: carouselInitialized2,
    responsive:{
    	0:{
    		items:1,
    		autoWidth: true,
    		nav: true,
		    navContainerClass: 'customNav',
		    navText: [$('.js-prev'),$('.js-next')],
    	},
    	480:{
    		items:3,
    	},
    	767:{
    		items:3,
    	},
    	768:{
    		items:5,
    	}
    }
  }).on('click', '.owl-item', function(e) {
		var carousel = $('.js-slider2').data('owl.carousel');
		e.preventDefault();
		carousel.to(carousel.relative($(this).index()));
	});

	function carouselInitialized2(e){
		var item = e.item.index;
		$('.js-slider2 .owl-item.siblings').removeClass('siblings');
		$('.js-slider2 .owl-item').eq(item-1).addClass('siblings');
		$('.js-slider2 .owl-item').eq(item+1).addClass('siblings');
	};

});