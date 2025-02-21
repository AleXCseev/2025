var landingFunctions = {
	init: function() {
		this.initLibraries()
		this.time()
		this.bar()
	}, 

	initLibraries: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;
			// var cardHeight = $(".card").outerHeight(false)
			// var windowHeight = $(window).height()

			$('html, body')
			.stop()
			// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		
		let data = [{
			title: "घायल कुसुमा",
			content: "ऑर्डर सफल",
			time: "10 कुछ मिनट पहले"
		}, {
			title: "एफेंदी कुर्नियावान",
			content: "ऑर्डर सफल",
			time: "7 कुछ मिनट पहले"
		}, {
			title: "रहमा मुस्तिका",
			content: "ऑर्डर सफल",
			time: "12 कुछ मिनट पहले"
		}, {
			title: "नुरुल अदिंदा पुत्री",
			content: "ऑर्डर सफल",
			time: "8 कुछ मिनट पहले"
		}, {
			title: "डोनी हरमावन",
			content: "ऑर्डर सफल",
			time: "15 कुछ मिनट पहले"
		}, {
			title: "मेलिसा करीम",
			content: "ऑर्डर सफल",
			time: "3 कुछ मिनट पहले"
		}, {
			title: "उनका हुदा सलीम",
			content: "ऑर्डर सफल",
			time: "6 कुछ मिनट पहले"
		}, {
			title: "पुत्रियन मांडा",
			content: "ऑर्डर सफल",
			time: "5 कुछ मिनट पहले"
		}, {
			title: "रियाल्डो बुस्टोमी",
			content: "ऑर्डर सफल",
			time: "16 कुछ मिनट पहले"
		}, {
			title: "ऑगस्टीन में",
			content: "ऑर्डर सफल",
			time: "20 कुछ मिनट पहले"
		}, {
			title: "इवान फैडिला",
			content: "ऑर्डर सफल",
			time: "18 कुछ मिनट पहले"
		}];

		function info() {
			let counter = 0;

			// setTimeout(() => {
			// 	$(".message").removeClass("active");
			// }, 5000);

			setInterval(() => {

				$(".message__name").text(data[counter].title)
				$(".message__text").text(data[counter].content)

				counter++

				if(counter == data.length) {
					counter = 0;
				}

				$(".message").addClass("active");

				setTimeout(() => {
					$(".message").removeClass("active");
				}, 5000);
				
			}, 10000);

		}

		info()

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

		function getDate(plusDays, divider = ".") {
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
			
			return dayNum + divider + monthNum + divider + now.getFullYear();
			// return dayNum + divider + monthNum + divider + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
		}

		// $(".date__1").text(getDate(-5));
    	$(".date").text(getDate(0, "/"));
		$(".date-1").text(getDate(1, "/"));
	},

	bar: function() {
		const wheel = document.querySelector('.bar img');
		const resultWrapper = document.querySelector('.card__block');

		$('.start').click(function () {
			if (wheel.classList.contains('rotated')) {
				resultWrapper.style.display = "block";
			} else {
				wheel.classList.add('super-rotation');
				setTimeout(function () {
					$('.bar__block').slideUp(1000);
					$('.card__block').slideDown(1000);
					start_timer();
				}, 8000);
				setTimeout(function () {
					$(".card__decor img").addClass("active")
				}, 9000);
				wheel.classList.add('rotated');
			}
		});

		var time = 600;
		var intr;

		function start_timer() {
			intr = setInterval(tick, 1000);
		}

		function tick() {
			time = time - 1;
			var mins = Math.floor(time / 60);
			var secs = time - mins * 60;
			if (mins == 0 && secs == 0) {
				clearInterval(intr);
			}
			secs = secs >= 10 ? secs : "0" + secs;
			mins = mins >= 10 ? mins : "0" + mins;
			$("#min").html(mins);
			$("#sec").html(secs);
		}
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

