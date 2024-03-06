$(() => {


	// Ширина окна для ресайза
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
	BODY = document.getElementsByTagName('body')[0]
	OVERLAY = document.querySelector('.overlay')


	// Моб. меню
	$('header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').addClass('active')
		$('body').addClass('menu_open')
		$('header .menu').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header .close_btn, header .menu .item a, .overlay').click((e) => {
		e.preventDefault()

		$('header .mob_menu_btn').removeClass('active')
		$('body').removeClass('menu_open')
		$('header .menu').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		Fancybox.close(true)
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline',
		}]);
	})


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

	// Показать контент 
	$(".link-more").click(function (e) {
		e.preventDefault();
		$(".vacancy_item").removeClass("hide");
		$(".link-more").addClass("active");
	});



	$('select').on('change', function () {
		if (this.value == 6) {
			$('.select-input').css('display', 'block');
		}
		else {
			$('.select-input').css('display', 'none');
		}
	});



	const gallerySliders = [],
		gallery = document.querySelectorAll('.gallery .swiper')

	gallery.forEach(function (el, i) {
		el.classList.add('gallery_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 0,
					slidesPerView: 1
				}
			},
			pagination: {
				el: '.gallery .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.gallery .swiper-button-next',
				prevEl: '.gallery .swiper-button-prev'
			}
		}

		gallerySliders.push(new Swiper('.gallery_s' + i, options))
	})


	const modalSliders = [],
		modal = document.querySelectorAll('.modal .swiper')

	modal.forEach(function (el, i) {
		el.classList.add('modal_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 0,
					slidesPerView: 1
				}
			},
			pagination: {
				el: '.modal .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.modal .swiper-button-next',
				prevEl: '.modal .swiper-button-prev'
			}
		}

		modalSliders.push(new Swiper('.modal_s' + i, options))
	})


	const candidateSliders = [],
		candidate = document.querySelectorAll('.candidate .swiper')

	candidate.forEach(function (el, i) {
		el.classList.add('candidate_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				479: {
					spaceBetween: 17,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 17,
					slidesPerView: 3
				}
			},
			pagination: {
				el: '.candidate .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.candidate .swiper-button-next',
				prevEl: '.candidate .swiper-button-prev'
			}
		}

		candidateSliders.push(new Swiper('.candidate_s' + i, options))
	})



	const clientSliders = [],
		client = document.querySelectorAll('.client .swiper')

	client.forEach(function (el, i) {
		el.classList.add('client_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				479: {
					spaceBetween: 17,
					slidesPerView: 2
				},
				768: {
					spaceBetween: 17,
					slidesPerView: 3
				}
			},
			pagination: {
				el: '.client .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.client .swiper-button-next',
				prevEl: '.client .swiper-button-prev'
			}
		}

		clientSliders.push(new Swiper('.client_s' + i, options))
	})




	// $('input[type=tel]').inputmask('+7 (999) 999-99-99')


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


	// Кастомный select
	$('select').niceSelect()



	$(document).ready(function () {
		var phoneInputID = "#phone1";
		var input = document.querySelector(phoneInputID);
		var iti = window.intlTelInput(input, {
			formatOnDisplay: true,
			hiddenInput: "full_number",
			separateDialCode: true,
			preferredCountries: ['es'],
			utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
		});
		$(phoneInputID).on("countrychange", function (event) {
			var selectedCountryData = iti.getSelectedCountryData();
			newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL),
				iti.setNumber("");
			mask = newPlaceholder.replace(/[1-9]/g, "0");
			$(this).mask(mask);
		});

		iti.promise.then(function () {
			$(phoneInputID).trigger("countrychange");
		});
	});


	$(document).ready(function () {
		var phoneInputID = "#phone2";
		var input = document.querySelector(phoneInputID);
		var iti = window.intlTelInput(input, {
			formatOnDisplay: true,
			hiddenInput: "full_number",
			separateDialCode: true,
			preferredCountries: ['es'],
			utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
		});
		$(phoneInputID).on("countrychange", function (event) {
			var selectedCountryData = iti.getSelectedCountryData();
			newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL),
				iti.setNumber("");
			mask = newPlaceholder.replace(/[1-9]/g, "0");
			$(this).mask(mask);
		});

		iti.promise.then(function () {
			$(phoneInputID).trigger("countrychange");
		});
	});



	$(document).ready(function () {
		var phoneInputID = "#phone3";
		var input = document.querySelector(phoneInputID);
		var iti = window.intlTelInput(input, {
			formatOnDisplay: true,
			hiddenInput: "full_number",
			separateDialCode: true,
			preferredCountries: ['es'],
			utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.14/js/utils.js"
		});
		$(phoneInputID).on("countrychange", function (event) {
			var selectedCountryData = iti.getSelectedCountryData();
			newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL),
				iti.setNumber("");
			mask = newPlaceholder.replace(/[1-9]/g, "0");
			$(this).mask(mask);
		});

		iti.promise.then(function () {
			$(phoneInputID).trigger("countrychange");
		});
	});



	// Скрол к пунктам меню
	$(".scroll").on("click", function (e) {
		e.preventDefault();
		let id = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(id).offset().top - 0
		}, {
			duration: 400,
			easing: "swing"
		});
	});




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