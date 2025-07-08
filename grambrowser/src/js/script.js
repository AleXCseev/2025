var landingFunctions = {
	init: function() {
		this.initLibraries()
		this.modal()
	}, 

	initLibraries: function() {
		$(".header__lang").click(function() {
			$(this).toggleClass("active")
			$(".lang__modal").toggleClass("active")
		})

		$(".lang__modal-btn").click(function() {
			const imgSrc = $(this).find("img").attr("src");

			$(".header__lang-flag").attr("src", imgSrc);

			$(".lang__modal").removeClass("active");
			$(".header__lang").removeClass("active")
		})

		$(document).click(function(e) {
			if (!$(e.target).closest(".header__lang-wrapper").length) {
				$(".lang__modal").removeClass("active");
				$(".header__lang").removeClass("active")
			}
		});

		$(".social__link").click(function() {
			$(".social__modal").toggleClass("active")
		})
		$(".navigation__link").click(function() {
			$(".navigation__link").removeClass("active")
			$(this).addClass("active")
		})
		$(document).click(function(e) {
			const target = e.target
			if(!target.classList.contains("social__link")) {
				$(".social__modal").removeClass("active")
			}
		})
	},	

	modal: function() {
		$(".main__gamepad-link").click(function() {
			$(".modal__overlay").fadeIn(300)
		})

		$(".close__modal").click(function() {
			$(".modal__overlay").fadeOut(300)
		})

		$(".modal__overlay").click(function(e) {
			if (!$(e.target).hasClass("modal__overlay")) {
				return
			}
			$(".modal__overlay").fadeOut(300)
		})

		var owl = $(".modal__slider").owlCarousel({
			items: 1,
			margin: 20,
			dots: false,
			nav: false,
			loop: true,
			mouseDrag: false,
			touchDrag: false,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			smartSpeed: 0,
		});

		$(".modal__navigation-item").each(function() {
			$(this).click(function() {
				$(".modal__navigation-item").removeClass("active")
				var position = $(this).data("slide") - 1
				owl.trigger("to.owl.carousel", [position, 300])
				$(`[data-slide='${Number(position) + 1}']`).addClass("active")
			})
		})

		$(".modal__nav-prev").click(function() {
			var position = $(this).closest(".modal").find(".modal__navigation-item.active").data("slide")
			$(this).closest(".modal").find(".modal__navigation-item.active").removeClass("active")
			if (Number(position) - 1 !== 0) {
				$(this).closest(".modal").find(`[data-slide='${Number(position) - 1 }']`).addClass("active")
			} else {
				$(this).closest(".modal").find("[data-slide='7']").addClass("active")
			}
			owl.trigger('prev.owl.carousel');
		})

		$(".modal__nav-next").click(function() {
			var position = $(this).closest(".modal").find(".modal__navigation-item.active").data("slide")
			$(this).closest(".modal").find(".modal__navigation-item.active").removeClass("active")
			if (Number(position) + 1 > 7) {
				$(this).closest(".modal").find(`[data-slide='1']`).addClass("active")
			} else {
				$(this).closest(".modal").find(`[data-slide='${Number(position) + 1 }']`).addClass("active")
			}
			owl.trigger('next.owl.carousel');
		})
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

