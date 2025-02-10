var landingFunctions = {
	init: function() {
		this.initLibraries()
		// this.time()
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

		setTimeout(function(){
			$(".header__review-icons").addClass("active");
		}, 1000)

		let data = {
			winnersCounter: 5000,
			winnersInfo: [
				{
					name: "Алексей",
					cash: "50$",
				},
				{
					name: "Алексей",
					cash: "20$",
				},
				{
					name: "Алексей",
					cash: "500$",
				},
			]
		}

		function info() {
			let counter = 0;

			setTimeout(() => {
				$(".winners").removeClass("active");
			}, 5000);

			setInterval(() => {

				$(".name").text(data.winnersInfo[counter].name)
				$(".cash").text(data.winnersInfo[counter].cash)
				counter++
				$(".counter").text(data.winnersCounter = data.winnersCounter + counter)

				if(counter == data.winnersInfo.length) {
					counter = 0;
				}

				$(".winners").addClass("active");

				setTimeout(() => {
					$(".winners").removeClass("active");
				}, 5000);
				
			}, 7000);

		}

		info()
	
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

