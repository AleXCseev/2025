var landingFunctions = {
	init: function() {
		this.initLibraries()
		// this.card()
		this.time()
	}, 

	initLibraries: function() {
		
		// $('[href*="#"]').on('click', function (e) {
		// 	var fixedOffset = 0;
		// 	// var cardHeight = $(".card").outerHeight(false)
		// 	// var windowHeight = $(window).height()

		// 	$('html, body')
		// 	.stop()
		// 	// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
		// 	.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
		// 	e.preventDefault();
		// })

		// $(".header__section").on("mousemove", function(e) {
		// 	const x = e.pageX / $(window).width();
		// 	const y = e.pageY / $(window).height();

		// 	$(".header__prod").css(
		// 		'transform',
		// 		'translate(' + x * 20 + 'px, ' + y * 20 + 'px)'
		// 	);
		// })

		// $('.review__slider').owlCarousel({
		// 	items: 1,
		// 	margin: 40,
		// 	dots: false,
		// 	dotsEach: true,
		// 	nav: true,
		// 	loop: true,
		// 	autoHeight: true,
		// 	responsive:{
		// 		0:{
		// 			dots: true,
		// 		},
		// 		1080:{
		// 			dots: false,
		// 		}
		// 	}
		// });

		function menu() {
			$(".mobile__menu-open").click(function() {
				$(".header__nav-mobile").addClass("active");
				$("body").css("overflow", "hidden");
			})

			$(".nav__mobile-close").click(function() {
				$(".header__nav-mobile").removeClass("active");
				$("body").css("overflow", "auto");
			})

			$(".header__nav-mobile a").click(function() {
				$(".header__nav-mobile").removeClass("active");
				$("body").css("overflow", "auto");
			})
		}

		menu()

	
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
						padString += padString.repeat(targetLength / padString.length);
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

		// $(".date__1").text(getDate(-5));
    	$(".date").text(getDate(2));

	},

	
}

$(document).ready(function() {
	landingFunctions.init();
});

