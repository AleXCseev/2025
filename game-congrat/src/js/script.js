var landingFunctions = {
	init: function() {
		this.utils();
		this.preloader();
		this.carousel();
		this.animations();
		this.modals();
		this.play();
		this.range();
		this.shop();
	},
	
	utils: function() {
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

		$(".balance__section td").each(function() {
			str = $(this).text().trim();

			if (str.length < 10) {
				return
			}

			str = str.substring(0,10) + '...';
			$(this).text(str);
		})

		function referal() {
			$('.referal__btn').click(function(e) {
				const link = $(".referal__link").val()
				navigator.clipboard.writeText(link);
				console.log(link)

				var tooltip = $("#myTooltip");
  				tooltip.text("Скопировано: " + link);
			})

			$(".referal__link").hover(
				function() {
					var tooltip = $("#myTooltip");
					tooltip.text("Скопировать ссылку");
				},
				function() {
					
				}
			)

			let summ = [];
			let currency = ''

			$(".ref__res").each(function() {
				const item = parseInt($(this).text());
				currency = $(this).text().replace(/[0-9]/g, '');
				summ.push(item)
			})
			
			const res = summ.reduce((accum, item) => {
				return accum + item
			}, 0)

			$(".ref__summ-result").text(res + " " + currency)
		}
		
		referal()

		let timer;

		function alertItem(success) {
			if($('.alert').hasClass("active")) {
				$('.alert').removeClass("active")
				clearTimeout(timer)
			}

			if(success) {
				$(".alert-success").addClass("active");

				timer = setTimeout(function() {
					$(".alert-success").removeClass("active");
				}, 4000);
			} else {
				$(".alert-warning").addClass("active");

				timer = setTimeout(function() {
					$(".alert-warning").removeClass("active");
				}, 4000);
			}
		}

		$("#add-balance").click(function() {
			alertItem(true)
		})
		
		$("#withdrawal").click( function() {
			alertItem()
		})

		$(".info__checkbox .checkbox__input").change(function() {  
			if (this.checked) {
				$(this).closest('.modal__section').find(".btn__play").attr("disabled", false);
			} else {
				$(this).closest('.modal__section').find(".btn__play").attr("disabled", true);
			}
		});
	},

	preloader: function() {
		setTimeout(function() {
			$(".preload__section").hide();
			$(".main__page").addClass("active");
		}, 5000);

		setTimeout(function() {
			$(".bg__light").addClass("show");
		}, 500)
	},

	carousel: function() {
		const owl = $('.modal__avatar-slider').owlCarousel({
			items: 1,
			margin: 0,
			dots: false,
			dotsEach: false,
			nav: true,
			loop: true,
			mouseDrag: false,
			touchDrag: false,
			animateOut: 'fadeOut',
			responsive: {
				0: {
					mouseDrag: true,
					touchDrag: true,
				},
				1025: {
					mouseDrag: false,
					touchDrag: false,
				}
			}
		});

		const owlInfo = $('.modal__info-slider').owlCarousel({
			items: 1,
			margin: 0,
			dots: false,
			dotsEach: false,
			nav: false,
			loop: true,
			mouseDrag: false,
			touchDrag: false,
			animateOut: 'fadeOut'
		});


		owl.on('changed.owl.carousel', function(event) {
			const index = event.relatedTarget.relative(event.item.index);
			owlInfo.trigger("to.owl.carousel", [index, 300])

			const color = $(".avatar__slide-" + (+index + 1)).data("color");

			$(".modal__wrapper-shadow").removeClass().addClass("modal__wrapper-shadow")
			$(".modal__wrapper-shadow").hide().addClass(color).fadeIn(300)
		})	


		const shopOwl = $('.shop__slider').owlCarousel({
			items: 3,
			dots: false,
			dotsEach: false,
			nav: true,
			loop: true,
			center: true,
			mouseDrag: false,
			touchDrag: false,
			animateOut: 'fadeOut',
			responsive: {
				0: {
					items: 1,
					center: false,
					mouseDrag: true,
					touchDrag: true,
				},
				431: {
					items: 3,
					center: true,
					mouseDrag: false,
					touchDrag: false,
				}
			}
		});

		const owlShop = $('.shop__slider-info').owlCarousel({
			items: 1,
			margin: 0,
			dots: false,
			dotsEach: false,
			nav: false,
			loop: true,
			mouseDrag: false,
			touchDrag: false,
			animateOut: 'fadeOut',
		});

		$(".owl__nav-prev").click(function() {
			shopOwl.trigger('prev.owl')
		})

		$(".owl__nav-next").click(function() {
			shopOwl.trigger('next.owl')
		})

		shopOwl.on('changed.owl.carousel', function(event) {
			const index = event.relatedTarget.relative(event.item.index);
			owlShop.trigger("to.owl.carousel", [index, 300])
		})	
		
		$(document).on("keydown", function(e) {
			if($("#profile").hasClass("active")) {
				if(e.keyCode == 37) {
					owl.trigger('prev.owl.carousel');
				};
				if(e.keyCode == 39) {
					owl.trigger('next.owl.carousel');
				};
			}
			if($("#shop").hasClass("active")) {
				if(e.keyCode == 37) {
					shopOwl.trigger('prev.owl.carousel');
				};
				if(e.keyCode == 39) {
					shopOwl.trigger('next.owl.carousel');
				};
			}
		});
	},

	animations: function() {
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
				moveRandomlyWithTransform($(this), 100);
			})
		}, 2000);

		setInterval(function() {
			$(".autorization__section .character__icon").each(function() {
				moveRandomlyWithTransform($(this), 0);
			})
		}, 6000);

		$(".preloader__section .character__icon").each(function() {
			moveRandomlyWithTransform($(this), 0);
		})
	},

	modals: function() {

		const timer = this.timer

		$(".modal-open-triggle").click(function() {
			$(".modal__section").removeClass("active");
			$(".modal__wrapper-shadow").hide()
			$(".main__page").hide();
			$(".main").addClass("hide");

			const id = $(this).data("modal");
			$(`#${id}`).addClass("active");	
			$(".modal__wrapper-shadow").removeClass().addClass("modal__wrapper-shadow main")
			$(".modal__wrapper-shadow").delay(500).fadeIn(1000)


			if(id == "exit") {
				timer();
			}

			if(id == "autorization") {
				$(".main").removeClass("hide");
			}

			setTimeout(function() {
				$(".modal__section").find(".progress__bar").addClass("active");
			}, 500)
		})	

		$(".btn__back").click(function() {
			if($(this).hasClass("modal-open-triggle")) return;
			$(".main__page").show();
			$(".main").removeClass("hide");
			$(".progress__bar").removeClass("active")
			
			$(this).closest(".modal__section").removeClass("active");
		})

		document.addEventListener("keydown", function(e) {
			if(e.key === "Escape" || e.code === "Escape") {
				$(".modal__section").removeClass("active");
				$(".main__page").show();
				$(".main").removeClass("hide");
				$(".progress__bar").removeClass("active")
			}
		})
	},

	play: function() {

		$(".btn__mode").click(function() {
			$(".play__item-text").show();
			$(".play__item-description").hide();

			$(this).closest(".play__item").find(".play__item-text").hide();
			$(this).closest(".play__item").find(".play__item-description").fadeIn(300);

			$(".play__item").removeClass("active");
			$(this).closest(".play__item").addClass("active");

			
			const mode = $(this).data("mode");
			$(".btn__mode").removeClass("active");
			$(this).addClass("active");

			$(".play__info-item").hide().removeClass("active");
			$(`.play__info-item[data-mode="${mode}"]`).fadeIn(300).addClass("active");
			$(`.play__info-item[data-mode="${mode}"]`).find(".play__info-text").show()

			
		})

		$(".play__info-btn").click(function() {
			$(".play__info-btn").removeClass("active");
			$(this).addClass("active");

			const mode = $(this).data("complexity");

			$('.play__info-list').removeClass("active");
			$(`.play__info-list-${mode}`).addClass("active");
		})
	},

	range: function() {
		function rangeCallback() {
			const value = $(this).val();
			$(this).closest(".settings__range").find(".range__track").css("width", value + "%");
			$(this).closest(".settings__range").find(".range__value").text(value + "%");
		}

		$(".input__range").on("input", rangeCallback);

		$(".input__range").each(rangeCallback);
	},

	timer: function() {

		$(".exit__block-small").hide();
		$(".exit__section").removeClass("mini");

		let intervalId
		let timer = 30;

		function timerEnd() {
			timer = 30;
			$(".exit__timer span").text(String(timer).padStart(2, '0'));
			$(".exit__block-small").hide();
		}

		$(".btn__exit-yes").click(function() {
			$(".exit__timer span").text(String(timer).padStart(2, '0'));
			const time = $(".exit__timer span");
			$(".exit__section").addClass("mini");

			$(".exit__block-small").fadeIn(1000);

			intervalId = setInterval(timerDecrement, 1000);
		
			function timerDecrement() {
				timer = timer - 1;
				time.text(String(timer).padStart(2, '0'));
			
				if(timer === 0) {
					timerEnd()
					clearInterval(intervalId);
					$(".exit__section").removeClass("mini");
				} 

			}
		})

		$(".btn__exit-no").click(function() {
			timerEnd()
			clearInterval(intervalId);
		})

		document.addEventListener("keydown", function(e) {
			if(e.key === "Escape" || e.code === "Escape") {
				clearInterval(intervalId);
			}
		})
	}, 

	shop: function() {

		$(".shop__nav-item").click(function() {
			$(".shop__nav-item").removeClass("active")
			$(this).addClass("active");
			const tab = $(this).data('shop')

			$(".shop__item").removeClass("active");
			$(".shop__item-" + tab).addClass("active");
		})

		$(".shop__item-btns .btn__price").click(function() {
			const val = $(this).find("span").text()
			$("#buy-gram").val(val)
		})

		const cftStarsToGram = 0.1;
		const cftGramToStars = 10;

		$("#exchange-stars").on("input", function() {
			const val = Number($(this).val())
			$("#exchange-gram").val((val * cftStarsToGram).toFixed(2))
		})

		$("#exchange-gram").on("input", function() {
			const val = Number($(this).val())
			$("#exchange-stars").val((val * cftGramToStars).toFixed(2))
		})
	}
}

$(document).ready(function() {
	landingFunctions.init();
});

