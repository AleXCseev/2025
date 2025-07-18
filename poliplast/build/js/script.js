var landingFunctions = {
	init: function() {
		this.initLibraris()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 20;
			var cardHeight = $(".card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
			// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		$(".header__item").hover(
			function() {
				const text = $(this).find(".header__item-text").text()
				setTimeout(() => {
					$(".header__info").text(text).addClass("active")
				}, 100)
			},
			function() {
				$(".header__info").removeClass("active")
			}
		)

		$(".nav__brend-item").click(function() {
			$(".nav__brend-item").removeClass("active")
			$(this).addClass("active")
			const curentCategory = $(this).data("category");

			$(".nav__category").removeClass("active")
			$(`.nav__category[data-category=${curentCategory}]`).addClass("active")
		})

		const initialItem = $(".nav__category-item.active").data("item")

		$(".nav__category-item").hover(
			function() {
				$(".nav__category-item").removeClass("active")
				$(this).addClass("active")
			},
			function() {

			}
		)

		// $('.review__slider').owlCarousel({
		// 	items: 3,
		// 	margin: 30,
		// 	dots: true,
		// 	dotsEach: true,
		// 	nav: true,
		// 	loop: true,
		// 	autoHeight: true,
		// 	// autoplay: true,
		// 	// autoplayTimeout: 5000,
		// 	// autoplayHoverPause: true,
		// 	responsive:{
		// 		0: {
		// 			items: 1,
		// 		},
		// 		1081: {
		// 			items: 2,
		// 		},
		// 		1281:{
		// 			items: 3,
		// 		}
		// 	}
		// });
	
		AOS.init({
			disable : function() {
				if( $(window).width() <= 1080) {
					return true;
				}
				return false
			},
			once: true,
			duration: 1000,
			offset : 0,
		});
	
		$(window).resize(function() {
			AOS.refresh();
		})

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

