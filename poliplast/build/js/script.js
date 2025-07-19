var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.navigation()
	}, 

	initLibraris: function() {
		
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

	navigation: function() {
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

		$(".catalog__modal").click(function() {
			$(".nav__catalog").toggleClass("active");
		})

		$("body").on("keydown", function(e) {
			const key = e.code
			if(key === "Escape") {
				$(".nav__catalog").removeClass("active");
			}
		})

		$(".nav__brend-item").click(function() {
			$(".nav__brend-item").removeClass("active")
			$(this).addClass("active")
			const curentCategory = $(this).data("category");

			$(".nav__category").removeClass("active")
			$(`.nav__category[data-category=${curentCategory}]`).addClass("active")

			
		})


		$(".nav__category-item").hover(
			function() {
				$(this).closest(".nav__category").find(".nav__category-item").removeClass("active")
				$(this).addClass("active")
				const item = $(this).data("item")
				$(this).closest(".nav__category").find(".nav__item").removeClass("active");
				$(this).closest(".nav__category").find(`.nav__item[data-item=${item}]`).addClass("active");
			},
			function() {

			}
		)

		$(".mobile__menu-btn").click(function() {
			$("body").css("overflow", "hidden")
			$(".mobile__menu").addClass("active")
		})

		$(".close__modal").click(function() {
			$("body").css("overflow", "auto")
			$(".mobile__menu").removeClass("active")
		})

		$(".mobile__catalog-btn").click(function() {
			if(!$(this).hasClass("active")) {
				$(this).addClass("active");
				$(".mobile__catalog-list").removeClass("active").slideUp()
				$(this).closest(".mobile__catalog-item").find(".mobile__catalog-list").slideDown().addClass("active")
			} else {
				$(".mobile__catalog-btn").removeClass("active")
				$(".mobile__catalog-list").removeClass("active").slideUp()
			}
		})

		$(".mobile__menu-btn").click(function() {
			$("body").css("overflow", "hidden")
			$(".mobile__menu").addClass("active")
		})

		$(".mobile__catalog-open").click(function() {
			$("body").css("overflow", "hidden")
			$(".mobile__catalog").addClass("active")
		})

		$(".mobile__catalog-close").click(function() {
			$("body").css("overflow", "auto")
			$(".mobile__catalog").removeClass("active")
		})
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

