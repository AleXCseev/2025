var landingFunctions = {
	init: function() {
		this.initLibraries()
		this.navigation()
		this.catalog()
		this.product()
		this.document()
	}, 

	initLibraries: function() {
		
		var owl = $('.gallery__slider').owlCarousel({
			items: 6,
			margin: 20,
			dots: false,
			nav: false,
			loop: true,
			autoHeight: false,
			stagePadding: 5,
			// autoplay: true,
			// autoplayTimeout: 5000,
			// autoplayHoverPause: true,
			responsive:{
				0: {
					items:5,
				},
				541: {
					items:6,
				}
			}
		});

		$('.gallery__btn-next').click(function() {
			owl.trigger('next.owl.carousel');
		})

		$('.gallery__btn-prev').click(function() {
			owl.trigger('prev.owl.carousel');
		})

		$('.news__slider').owlCarousel({
			items: 1,
			margin: 20,
			dots: false,
			nav: true,
			loop: true,
			autoHeight: false,
			stagePadding: 0,
			// autoplay: true,
			// autoplayTimeout: 5000,
			// autoplayHoverPause: true,
		});
	
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

		$(".nav__drop").click(function() {
			$(this).toggleClass("active")

			$(".nav__drop-menu").slideToggle()
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

	catalog: function() {
		$(".catalog__nav-btn.active").closest(".catalog__nav-item").find(".catalog__nav-list").slideDown()

		$(".catalog__nav-btn").click(function() {
			$(this).toggleClass("active")
			$(this).closest(".catalog__nav-item").find(".catalog__nav-list").slideToggle()
		})

		$(".catalog__nav-list a").click(function(e) {
			e.preventDefault()
			$(".catalog__nav-list a").removeClass("active")
			$(this).addClass("active")

			const item = $(this).data("catalog")
			$(".catalog__item").hide()
			$(`.catalog__item[data-item=${item}]`).fadeIn(300)
		})

		$(".catalog__info-btn").click(function() {
			$(".catalog__info").addClass("active")
		})
	},

	product: function() {
		$(".product__nav-btn").click(function() {
			if($(this).hasClass("active")) return

			$(".product__nav-btn").removeClass("active")
			$(this).addClass("active")

			const tab = $(this).data("tab")
			$(".product__tab").hide().removeClass("active")
			$(`.product__tab[data-tab=${tab}]`).fadeIn(300).addClass("active")
		})

		$(".dropdown__btn").click(function() {
			$(this).toggleClass("active");
			$(".drop__menu").slideToggle();
		})
	},

	document: function() {
		$(".document__btn").click(function() {
			if($(this).hasClass("active")) return

			$(".document__btn").removeClass("active")
			$(this).addClass("active")

			const tab = $(this).data("tab")
			$(".document__tab").hide().removeClass("active")
			$(`.document__tab[data-tab=${tab}]`).fadeIn(300).addClass("active")
		})

		$(".document__dropdown-btn").click(function() {
			$(this).toggleClass("active");
			$(this).closest(".document__dropdown").find(".document__dropdown-menu").slideToggle();
		})

		$(".document__select").on("change", function() {
			const val = $(this).val()
			$(".document__tab").hide().removeClass("active")
			$(`.document__tab[data-tab=${val}]`).fadeIn(300).addClass("active")
		})
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

