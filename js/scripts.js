$(() => {


	// Ширина окна для ресайза
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
	BODY = document.getElementsByTagName('body')[0]
	OVERLAY = document.querySelector('.overlay')



	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		Fancybox.close(true)
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline',
		}]);
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $('.tabs button[data-content=' + locationHash + ']'),
			$activeTabContent = $(locationHash),
			$parent = $activeTab.closest('.tabs_container'),
			level = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Показать контент 
	$(".link-more").click(function (e) {
		e.preventDefault();
		$(".reviews_item").removeClass("hide");
		$(".link-more").addClass("active");
	});

	$(".link-more").click(function (e) {
		e.preventDefault();
		$(".result_item").removeClass("hide");
		$(".link-more").addClass("active");
	});



	$('.price_item-btn').click(function (e) {
		e.preventDefault();
		$(this).prev().prev().css("display", "none");
		$(this).prev().css("display", "block");
	});

	if ($(window).width() < 768) {
		$('.footer_item-title-js').click(function (e) {
			e.preventDefault();
			$(this).next().slideToggle();
			$(this).toggleClass("active");
		});
	}



	let header = $('header');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			header.addClass('header_fixed');
		} else {
			header.removeClass('header_fixed');
		}
	});



	$(document).ready(function () {
		$('.table-responsive-stack').find("th").each(function (i) {

			$('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">' + $(this).text() + ':</span> ');
			$('.table-responsive-stack-thead').hide();
		});

		function flexTable() {
			if ($(window).width() < 768) {

				$(".table-responsive-stack").each(function (i) {
					$(this).find(".table-responsive-stack-thead").show();
					$(this).find('thead').hide();
				});

			} else {
				$(".table-responsive-stack").each(function (i) {
					$(this).find(".table-responsive-stack-thead").hide();
					$(this).find('thead').show();
				});
			}
		}
		flexTable();

		window.onresize = function (event) {
			flexTable();
		};
	});



	$('.content_toggle').click(function (e) {
		e.preventDefault();
		$(this).css("display", "none");	
		$(this).prev().removeClass('hide');			
	});				




	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<img src=images/close.svg>',
		// spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		// main: null
	}


	const sertificatSliders = [],
		sertificat = document.querySelectorAll('.sertificat .swiper')

	sertificat.forEach(function (el, i) {
		el.classList.add('sertificat_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			breakpoints: {
				0: {
					spaceBetween: 12,
					slidesPerView: 1.12
				},
				510: {
					spaceBetween: 12,
					slidesPerView: 2.1
				},
				768: {
					spaceBetween: 12,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 24,
					slidesPerView: 3
				},
				1300: {
					spaceBetween: 24,
					slidesPerView: 4
				}
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		}

		sertificatSliders.push(new Swiper('.sertificat_s' + i, options))
	})





	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(400)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(400)

			$item.addClass('active').find('.data').slideDown(400)
		}
	})



	window.addEventListener('resize', function () {
		WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

		let windowW = window.outerWidth

		if (typeof WW !== 'undefined' && WW != windowW) {


			// Перезапись ширины окна
			WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


			// Моб. версия
			if (!fakeResize) {
				fakeResize = true
				fakeResize2 = false

				document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
			}

			if (!fakeResize2) {
				fakeResize2 = true

				if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
			} else {
				fakeResize = false
				fakeResize2 = true
			}
		}
	})



})