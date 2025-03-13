var landingFunctions = {
	init: function() {
		this.initLibraries()
	}, 

	initLibraries: function() {
		function lang() {
			$(".lang__block").click(function() {
				$(".lang__wrapper").toggleClass("active");
			});

			$(".btn__lang-item").click(function() {
				const imgSrc = $(this).find("img").attr("src");
				const lang = $(this).find("span").text();

				$(".btn__lang").find("img").attr("src", imgSrc);
				$(".btn__lang").find("span").text(lang);

				$(".lang__block").removeClass("active");
			})

			$(document).click(function(e) {
				if (!$(e.target).closest(".lang__block").length) {
					$(".lang__wrapper").removeClass("active");
				}
			});
		}

		lang()

		function moveRandomlyWithTransform(element, step) {
			const $element = $(element);
		
			const distance = Math.floor(Math.random() * 51) + step;
		
			const angle = Math.random() * 360;
		
			const deltaX = Math.cos(angle * Math.PI / 180) * distance;
			const deltaY = Math.sin(angle * Math.PI / 180) * distance;
		
			$element.css({
				transform: `translate(${deltaX}px, ${deltaY}px)`
			});
		}

		setInterval(function() {
			$(".bg__light").each(function() {
				moveRandomlyWithTransform($(this), 50);
			})
		}, 2000);


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

