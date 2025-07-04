var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
	}, 

	initLibraris: function() {

		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			var cardHeight = $("#card").outerHeight(false)
			var windowHeight = $(window).height()

			$('html, body')
				.stop()
				.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
				// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		});

		function priceWithDiscount (targetPrice, discount) {
			let re = /[0-9\s.,]+/g;
			let result = targetPrice.match(re);
			if (result.length > 0) {
				let hasDots = result[0].indexOf(".") > -1;
				let priceNumber = result[0].replace(/(\.|,|\s)/g, "");
				console.log(priceNumber)
				let discountPrice = Math.ceil(priceNumber * 100 / (100 - discount));
				let newPrice = hasDots
					? ("" + discountPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
					: discountPrice;
				return targetPrice.replace(re, newPrice);
			}
			return targetPrice;
		}

		$(".new__price").each(function() {
			var price = $(this).text().trim()
			$(this).closest(".price").find(".old__price").text(priceWithDiscount(price, 50))
			$(this).text(priceWithDiscount(price, 0))
		})

		var owl = $(".review__slider").owlCarousel({
			loop: true,
			margin: 40,
			nav: true,
			items: 1,
			dots: false,
			dotsEach: true,
			autoHeight: true,
			// autoplay: true,
			// autoplayTimeout: 5000,
			// autoplayHoverPause: true
			onInitialized: function(e) {
				$('.slider__number').text(this.items().length)
			}

		})

		owl.on("changed.owl.carousel", function(e) {
			var index = e.relatedTarget.relative(e.item.index);
			$(this).closest(".review__section").find(".slider__number-current").html(index + 1);
		});

		$('[data-fancybox]').fancybox({
			loop: true,
			infobar: false,
			animationEffect: false,
			backFocus: false,
			hash: false,
		});
	},

	time: function() {
		Date.prototype.daysInMonth = function () {
			return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
		};
		
		if (!String.prototype.padStart) {
			String.prototype.padStart = function padStart(targetLength, padString) {
				targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
				padString = String((typeof padString !== 'undefined' ? padString : ' '));
				if (this.length > targetLength) {
					return String(this);
				}
				else {
					targetLength = targetLength - this.length;
					if (targetLength > padString.length) {
						padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
					}
					return padString.slice(0, targetLength) + String(this);
				}
			};
		}

		function timer () {
			function runMultiple(hoursSelector, minutesSelector, secondsSelector, milisecondsSelector) {
				var d = new Date();
				var h = String(23 - d.getHours()).padStart(2, "0");
				var m = String(59 - d.getMinutes()).padStart(2, "0");
				var s = String(60 - d.getSeconds()).padStart(2, "0");
				// var ms = String(1000 - d.getMilliseconds()).padStart(3, "0");
				$(hoursSelector).text(h)
				$(minutesSelector).text(m)
				$(secondsSelector).text(s)
				// $(milisecondsSelector).text(ms)
			}
			setInterval(function () {
				runMultiple(".hours", ".minutes", ".seconds")
			}, 1000);
		}
	
		timer()

		function getDate(plusDays) {
			var now = new Date;
			now.setDate(now.getDate() + plusDays);
			var dayNum = "";
			if (now.getDate() < 10) {
				dayNum = "0"
			}
			dayNum += now.getDate();
			var monthNum = "";
			if (now.getMonth() + 1 < 10) {
				monthNum = "0"
			}
			monthNum += now.getMonth() + 1;
			
			// return dayNum + "." + monthNum + "." + now.getFullYear();
			return dayNum + "." + monthNum + "." + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
		}

		$(".date").text(getDate(7))
	},

}

$(document).ready(function() {
	landingFunctions.init();
});

