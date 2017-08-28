$(window).ready(function() {



		// var idx = currentIndex();
		var idx = function() {
			var idx = currentIndex();
			if(idx <= 0) return -1;
			return idx - 1;
		}
		const currentIdx = idx();
		console.log(currentIdx);

	// Slider people
	var slider = $('.js-slider1').owlCarousel({
		autoplay: true,
		autoplayTimeout: 6000,
		center: true,
		loop: true,
		smartSpeed: 350,
		slideSpeed: 500,
		nav: false,
		items: 5,
		mouseDrag: false,
		touchDrag: true,
		startPosition: currentIdx,
		onInitialized: carouselInitialized1,
		onTranslate: carouselInitialized1,
		responsive:{
			0:{
				dots: true,
				dotsContainer: '.dots',
				autoplayTimeout: 6000,
				autoplayHoverPause: true,
				items:1,
				nav: true,
				navContainerClass: 'customNav',
				navText: [$('.js-prev1'),$('.js-next1')],
			},
			480:{
				items: 5,
			},
			768:{
				items: 5,
			}
		}
	});
	slider.on('click', '.owl-item', function(e) {
		var carousel = $('.js-slider1').data('owl.carousel');
		e.preventDefault();
		carousel.to(carousel.relative($(this).index()));
			// carousel.to(carousel.relative(4));

		});

	$(document).scroll(function() {
		var carousel = $('.js-slider1').data('owl.carousel');
		var container = document.querySelector('.reviews');
		if(($(this).scrollTop() > 600) && !container.getAttribute('data-firstLoad') ) {
			carousel.to(carousel.relative(currentIndex()));
			container.setAttribute('data-firstLoad', 'true');
		} 
	});


// currentIndex
function currentIndex() {
	let items = document.querySelectorAll('.js-slider1 .reviews__item');
	var result = [];
	let locationParam = undefined;
	locationHandler('active_slide', function(data) {
		if (data) {
			locationParam = data;
		}
		else locationParam = undefined;
	});
	Array.prototype.forEach.call(items, function(item, idx) {
		// items.forEach(function(item, idx) {
			if(locationParam && item.getAttribute("data-slide") === locationParam) {
				result.push(idx);
			}
			if(!locationParam) {
				result.push(idx-1);
			}
		});
	return result[0];
		// console.log(items);
	}

// locationHandler
function locationHandler(action, callback) {
	let url = location.search,
	tmp = tmp2 = [],
	param = {},
	result = "",
	get = url;
	if(get !== "") {
		tmp = get.substr(1).split("&");
		if ( !(action instanceof Array) ) {
			for(let i = 0; i < tmp.length; i++) {
				tmp2 = tmp[i].split("=");
				if ( tmp2[0] === action && typeof action === "string" ) {
					callback(tmp2[1]);
					break;
				}
			}
		}
		else {
			for(let i = 0; i < tmp.length; i++) {
				tmp2 = tmp[i].split("=");
				for ( let j = 0; j < action.length; j++ ) {
					if ( action[j] === tmp2[0] ) param[tmp2[0]] = tmp2[1];
				}
			}
		}
		for (let key in param) result += "&" + key + "=" + encodeURIComponent(param[key]);
			return result.substr(1);
	}
	else return false;
}

	// console.log(currentIndex());

// carousel init
function carouselInitialized1(e){
	var item = e.item.index;
		// console.log(item);
		$('.js-slider1 .owl-item.animation').removeClass('animation'); 
		$('.js-slider1 .owl-item.siblings').removeClass('siblings');
		$('.js-slider1 .owl-item').eq(item).addClass('animation');
		$('.js-slider1 .owl-item').eq(item-1).addClass('siblings');
		$('.js-slider1 .owl-item').eq(item+1).addClass('siblings');

	};





// slider ingridients
$('.js-slider2').owlCarousel({
	autoplay: true,
	autoplayTimeout: 6000,
	center: true,
	loop: true,
	smartSpeed: 450,
	slideSpeed: 500,
	nav: false,
		// stagePadding: 30,	
		items: 5,
		mouseDrag: false,
		touchDrag: true,
		onInitialized: carouselInitialized2,
		onTranslate: carouselInitialized2,
		responsive:{
			0:{
				items:3,
				autoWidth: true,
				nav: true,
				navContainerClass: 'customNav',
				navText: [$('.js-prev'),$('.js-next')],
			},
			480:{
				items:3,
				autoWidth: true,
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
		$('.js-slider2 .owl-item.siblings').removeClass('siblings left right');
		$('.js-slider2 .owl-item').eq(item-1).addClass('siblings left');
		$('.js-slider2 .owl-item').eq(item+1).addClass('siblings right');
	};


});