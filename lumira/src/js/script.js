var landingFunctions = {
	init: function() {
		this.initLibraris()
		this.time()
		this.getPrice()
		this.card()
		this.modal()
	}, 

	getPrice: function() {
		$('.new__price').each(function () {
			var p = parseInt($(this).text());
	        var currency = $(this).text().replace(/[0-9]/g, '');
			p = p * 100 / 50;
			p2 = Math.ceil(p);
			$(this).closest('.price').find('.old__price').text(p2 + ' ' + currency);
		});
	},

	initLibraris: function() {
		
		$('[href*="#"]').on('click', function (e) {
			var fixedOffset = 0;

			if($(window).width() <= 1080) {
				var cardHeight = $(".card").outerHeight(false)
				var windowHeight = $(window).height()

				$('html, body')
					.stop()
					.animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
					// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
				e.preventDefault();
			} else {
				$('html, body')
					.stop()
					// .animate({ scrollTop: $(this.hash).offset().top + fixedOffset + (cardHeight - windowHeight)}, 1000);
					.animate({ scrollTop: $(this.hash).offset().top + fixedOffset}, 1000);
				e.preventDefault();
			}
		})

		$('.header__slider').owlCarousel({
			items: 1,
			margin: 20,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
		});

		var show = true;
		var countbox = ".advantage__content";
		$(window).on("scroll load resize", function () {
			if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
			var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
			var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
			var w_height = $(window).height(); // Высота окна браузера
			var d_height = $(document).height(); // Высота всего документа
			var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
			if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
				$('.advantage__list-item span').css('opacity', '1');
				$('.advantage__list-item span').spincrement({
					thousandSeparator: "",
					duration: 2000
				});
				 
				show = false;
			}
		});

		$('.gallery__slider').owlCarousel({
			items: 1,
			margin: 20,
			dots: true,
			dotsEach: true,
			nav: false,
			loop: true,
			autoHeight: true,
			// autoplay: true,
			// autoplayTimeout: 3000,
			// autoplayHoverPause: true,
		});

		$('.card__slider').owlCarousel({
			items: 1,
			margin: 20,
			dots: false,
			dotsEach: true,
			nav: true,
			loop: true,
			autoHeight: true,
			// autoplay: true,
			// autoplayTimeout: 3000,
			// autoplayHoverPause: true,
		});

		$('.review__slider').owlCarousel({
			items: 3,
			margin: 20,
			dots: false,
			dotsEach: true,
			nav: true,
			loop: true,
			autoHeight: false,
			// autoplay: false,
			// autoplayTimeout: 5000,
			// autoplayHoverPause: true,
			responsive:{
				0:{
					items:1,
					autoHeight: true,
				},
				1281:{
					items:3,
					autoHeight: false,
				}
			}
		});

		$.raty.path = $("body").data("path") +  '/img/raty';

		$('.modal__raiting').raty({
			half: true,
			space: false,
			number: 5,
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
			// return dayNum + "." + monthNum;
		}

		// $(".date__1").text(getDate(-5));
    	$(".date__1").text(getDate(0));
		$(".date__2").text(getDate(-1));
		$(".date__3").text(getDate(-2));
		$(".date__4").text(getDate(-3));

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

	card: function() {

		const getPrice = this.getPrice

		$(".card__open-form").click(function() {
			$(".card__form").removeClass("active")
			$(this).closest(".card").find(".card__form").addClass("active")
		})

		$(".card__close-btn").click(function() {
			$(this).closest(".card").find(".card__form").removeClass("active")
		})

		$(".card__color").click(function() {
			if($(this).hasClass("active")) return

			const color = $(this).data("color")

			$(this).closest(".card").find(".card__color").removeClass("active")
			$(this).addClass("active")

			$(this).closest(".card").find(".card__slider").removeClass("active")
			$(this).closest(".card").find(".card__color-" + color).addClass("active")

			// const id = $(this).data("id")
			// const price = $(this).data("price")
			// const currency = $(this).data("currency")

			// $(this).closest(".card").find(".new__price").text(price + " " + currency)
			// getPrice()
		})
	},

	
}

$(document).ready(function() {
	landingFunctions.init();
});

