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
			$(".modal__overlay").addClass("active")
		})

		$(".close__modal").click(function() {
			$(".modal__overlay").removeClass("active")
		})

		$(".modal__overlay").click(function(e) {
			if (!$(e.target).hasClass("modal__overlay")) {
				return
			}
			$(".modal__overlay").removeClass("active")
		})

		var owl = $(".modal__slider").owlCarousel({
			items: 1,
			margin: 20,
			dots: false,
			nav: true,
			// loop: true,
			// mouseDrag: false,
			// touchDrag: false,
			// animateIn: 'fadeIn',
			// animateOut: 'fadeOut',
			smartSpeed: 100,
		});

		$(".modal__navigation-item").each(function() {
			$(this).click(function() {
				$(".modal__navigation-item").removeClass("active")
				var position = $(this).data("slide") - 1
				owl.trigger("to.owl.carousel", [position, 100])
				$(`[data-slide='${Number(position) + 1}']`).addClass("active")
			})
		})

		owl.on('changed.owl.carousel', function(event) {
			var newPosition = event.item.index + 1;
			$(this).closest(".modal").find(".modal__navigation-item").removeClass("active")
			$(this).closest(".modal").find(`[data-slide='${String(newPosition)}']`).addClass("active")
		})
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

