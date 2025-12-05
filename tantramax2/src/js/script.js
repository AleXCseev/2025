var landingFunctions = {
  init: function () {
    this.initLibraries();
    this.time();
    this.review();
  },

  initLibraries: function () {
    $('[href*="#"]').on("click", function (e) {
      var fixedOffset = 0;

      $("html, body")
        .stop()
        .animate({ scrollTop: $(this.hash).offset().top + fixedOffset }, 1000);
      e.preventDefault();
    });

    // $('[data-fancybox]').fancybox({
    // 	loop: true,
    // 	infobar: false,
    // 	animationEffect: false,
    // 	backFocus: false,
    // 	hash: false,
    // });
  },

  time: function () {
    Date.prototype.daysInMonth = function () {
      return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };

    if (!String.prototype.padStart) {
      String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0; //truncate if number or convert non-number to 0;
        padString = String(typeof padString !== "undefined" ? padString : " ");
        if (this.length > targetLength) {
          return String(this);
        } else {
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
      var now = new Date();
      now.setDate(now.getDate() + plusDays);
      var dayNum = "";
      if (now.getDate() < 10) {
        dayNum = "0";
      }
      dayNum += now.getDate();
      var monthNum = "";
      if (now.getMonth() + 1 < 10) {
        monthNum = "0";
      }
      monthNum += now.getMonth() + 1;

      // return dayNum + "." + monthNum + "." + now.getFullYear();
      return dayNum + "." + monthNum + "." + String(now.getFullYear()).substr(String(now.getFullYear()).length - 2);
    }

    $(".date").text(getDate(2));

    $(".date-1").text(getDate(0));
    $(".date-2").text(getDate(-1));
    $(".date-3").text(getDate(-2));
  },

  review: function () {

	function endDifDate(countDays) {
		if (countDays || countDays === 0) {

			countDays = parseInt(countDays);

			const date = new Date(Date.now() - (86400000 * countDays));
			return pad(date.getDate()) + "." + pad(date.getMonth() + 1) + "." + date.getFullYear();
		}
	}

	function pad(num) {
		return ("0" + num).substr(-2);
	}

	function getDocumentScrollTop() {
		return $(document.scrollingElement || document.documentElement).scrollTop();
	}

	var $path = $('body').data("path");

	$(".data-date").each(function (index, item) {
		// console.log(item)
        var $countDays = $(item).data("date");
		// console.log($countDays)
        var currentDate = new Date().getTime() - (86400000 * $countDays);
        var newDate = new Date(currentDate);
        var dateStr = pad(newDate.getDate()) + "."
            + pad((newDate.getMonth() + 1)) + "."
            + newDate.getFullYear();
        $(item).html(dateStr);
    })

    $(".js-actual-date").each(function (index, item) {
        $(item).html(endDifDate($(item).data("dateEnd")));
		console.log(item)
    });

	function handleReviewScroll() {
		const offset = $(window).height() / 3;
		const $holder = $(".reviews");

		$(".review").eq(0).hide()

		if (getDocumentScrollTop() + $(window).height() >= $holder.offset().top) {
			setTimeout(function () {
				$(".review").eq(0).fadeIn(320);
			}, 640)

			window.removeEventListener('scroll', handleReviewScroll);
		}
	}

    $(".review").eq(0).hide();
    handleReviewScroll();
    window.addEventListener("scroll", handleReviewScroll);

    $(".form-reviews button").click(function (event) {
      var commentName = $(this).closest(".form-reviews").find("input").val();
      var commentText = $(this).closest(".form-reviews").find("textarea").val();
      var commentNamePlaseholder = $(this)
        .closest(".form-reviews")
        .find(".form-comment--name input")
        .attr("placeholder");

      if ($(this).closest(".form-reviews").find("textarea").val().length > 0) {
        if (commentName === "") {
          commentName = commentNamePlaseholder;
        }

        var el =
          '<div class="review">\n' +
          '       <div class="review-photo">\n' +
          '          <img src="' +
          $path +
          '/img/default-avatar.jpg" alt="img">\n' +
          "       </div>\n" +
          '       <div class="review-body">\n' +
          '          <div class="user-name"> ' +
          commentName +
          " </div>\n" +
          '          <div class="review-inner">' +
          commentText +
          "</div>\n" +
          '          <div class="rating">\n' +
          '             <p class="add-like">எனக்கு அது பிடிக்கும்</p>\n' +
          '             <span class="separator-point">‧</span>\n' +
          '             <a class="review-link js-scroll" href="#card">தயவுசெய்து பதில் சொல்லுங்கள்</a>\n' +
          '             <span class="separator-point">‧</span>\n' +
          '             <div class="rating-like">\n' +
          '                <img src="' +
          $path +
          '/img/like-btn.png" alt=""><div class="count">0</div>\n' +
          "             </div>\n" +
          "          </div>\n" +
          "       </div>\n" +
          " </div>";

        $(".reviews").prepend(el);
        scroll();
        $(this).closest(".form-reviews").find("input").val("");
        $(this).closest(".form-reviews").find("textarea").val("");
      }
    });

    $("body").click(function (e) {
      if ($(e.target).is("p.add-like")) {
        var $currentTarget = $(e.target).is("p.add-like");

        var countReviewLike = parseInt($(e.target).closest(".review").find(".rating-like .count").html());
        var reviewRatingCount = $(e.target).closest(".review").find(".rating-like .count");
        if ($(e.target).hasClass("active")) {
          $(e.target).removeClass("active");
          $(e.target).closest(".review").find(".rating-like");
          reviewRatingCount.eq(0).html(countReviewLike - 1);
        } else {
          $(e.target).addClass("active");
          reviewRatingCount.eq(0).html(countReviewLike + 1);
        }
      }

      // scroll

      // if ($(e.target).is("a.js-scroll") || $(e.target).closest(".js-scroll").length > 0) {
      //     var item = $(e.target).closest(".js-scroll").attr('href'),
      //         item_offset = $(item).offset().top;

      //     $('html, body').animate({scrollTop: item_offset}, 800);
      // }
    });
  },
};

$(document).ready(function () {
  landingFunctions.init();
});
