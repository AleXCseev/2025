var landingFunctions = {
	init: function() {
		this.initLibraris()
		// this.bar()
		// this.time()
		// this.modal()
	}, 

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;

			// if($(window).width() <= 540) {
			// 	fixedOffset = 140;
			// }

			$('html, body')
			.stop()
			.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
			e.preventDefault();
		})

		// $(window).on("scroll", function(e) {
		// 	const height = $(document).outerHeight(true)
		// 	if(height - 2000 < $(window).scrollTop()) {
		// 		$(".fixed__btn").fadeOut(300)
		// 	} else {
		// 		$(".fixed__btn").fadeIn(300)
		// 	}
		// })

		// function showBtn() {
		// 	var $element = $('.card__section');

		// 	$(window).scroll(function() {
		// 		var scroll = $(window).scrollTop() + $(window).height();
		// 		var offset = $element.offset().top + $element.height();
		// 		var bodyOffset = $("body").offset().top + $("body").height();

		// 		if ((scroll > offset + 400 || scroll < offset - $element.height() - 200)) {
		// 			if(scroll + 800 > bodyOffset) {
		// 				$(".fixed__btn").hide();
		// 			} else {
		// 				$(".fixed__btn").show()
		// 			}
		// 		} else {
		// 			$(".fixed__btn").hide()
		// 		}

		// 	});
		// }

		// showBtn()

		// $('[data-fancybox]').fancybox({
		// 	loop: true,
		// 	infobar: false,
		// 	animationEffect: false,
		// 	backFocus: false,
		// 	hash: false,
		// });
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

		// function timer () {
		// 	function runMultiple(hoursSelector, minutesSelector, secondsSelector, milisecondsSelector) {
		// 		var d = new Date();
		// 		var h = String(23 - d.getHours()).padStart(2, "0");
		// 		var m = String(59 - d.getMinutes()).padStart(2, "0");
		// 		var s = String(60 - d.getSeconds()).padStart(2, "0");
		// 		// var ms = String(1000 - d.getMilliseconds()).padStart(3, "0");
		// 		$(hoursSelector).text(h)
		// 		$(minutesSelector).text(m)
		// 		$(secondsSelector).text(s)
		// 		// $(milisecondsSelector).text(ms)
		// 	}
		// 	setInterval(function () {
		// 		runMultiple(".hours", ".minutes", ".seconds")
		// 	}, 1000);
		// }
	
		// timer()

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
			
			return dayNum + "." + monthNum + "." + now.getFullYear();
			// return dayNum + "." + monthNum + "." + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
		}

		// $(".date__1").text(getDate(-5));
    	// $(".date").text(getDate(2));

		$(".date-1").text(getDate(0));
		$(".date-2").text(getDate(-1));
		$(".date-3").text(getDate(-2));
	},

	modal: function() {
		$(".add__review").click(function () {
			$(".modal__review").addClass("active")
		})

		function close() {
			$(".modal__review").removeClass("active")
		}

		$(".modal__review").click( function(e) {
			var target = e.target;
			if(target.classList.contains("modal__close")) {
				close()
			}
			if(target.classList.contains("modal")) {
				close()
			}
		})

		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				console.log(reader)
				reader.onload = function (e) {
					$('.file img').attr('src', e.target.result).css("display", "block");
				};
				reader.readAsDataURL(input.files[0]);
			}
		}

		$(".modal__review .input__file").on("change", function () {
			readURL(this);
		});

		$(".modal__review form").submit(function (e) {
			e.preventDefault()
			$(this).removeClass("active");
			$(".send__window").addClass("active");
			$(".modal__review .name__input").val("")
			$(".modal__review .modal__area").val("")
			$(".modal__review .file img").attr("src", "").css("display", "none")
			delayClose()
		})
		function delayClose() {
			setTimeout(function () {
				$(".modal__review form").addClass("active");
				$(".send__window").removeClass("active");
				close();
			}, 5000);
		}
	},
}

$(document).ready(function() {
	landingFunctions.init();
});

