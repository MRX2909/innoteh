// добавление маски в телефонные поля
// 								    - [all]
$('input[type="tel"]').inputmask('+7 (\999) 999 99 99', {
	clearMaskOnLostFocus: true
});

// Открытие / закрытие мобильного меню
$('.js-burger, .js-context-close, .js-context-overlay').click(function () {
	if(!$('.context__content').hasClass('context__content--open')) {
		$('.context__content').addClass('context__content--open');
		$('.context__overlay').addClass('context__overlay--open');
		$('.burger').addClass('burger--open');
		$('html').addClass('no-scroll');
	}
	else {
		$('.context__content').removeClass('context__content--open');
		$('.context__overlay').removeClass('context__overlay--open');
		$('.burger').removeClass('burger--open');
		$('html').removeClass('no-scroll');
	}
	$('.js-burger').blur();
});

// механизм прокрутки по странице (навигация, кнопки) [all]
$('.js-scroll-to').click(function (e) {
	if($(this).hasClass('context__link')) {
		$('.context__content').removeClass('context__content--open');
		$('.context__overlay').removeClass('context__overlay--open');
		$('.burger').removeClass('burger--open');
		$('html').removeClass('no-scroll');
	}
	let href = $(this).attr('href');
	let id = href.replace(/(?:.+?)#([\w\d_-]+)/g, '#$1');
	$('html, body').stop().animate({
		scrollTop: $(id).offset().top
	}, 1000);
	e.preventDefault();
});

//мобильный раздел Услуги - Сферы применения
$(".drop-down__card").click(function () {
	if(!$(this).hasClass("drop-down__card--active")){
		$('.drop-down__card').removeClass("drop-down__card--active");
		$('.drop-down__content').slideUp(600);
		$(this).addClass("drop-down__card--active");
		$(this).find(".drop-down__content").slideDown(600);
	}
	else {
		$('.drop-down__card').removeClass("drop-down__card--active");
		$('.drop-down__content').slideUp(600);
	}
});

let sliderAnimate = (direction) => {
	let first = direction == 'left' ? 'right' : direction;
	let second = direction == 'right' ? 'right' : direction;

	$('.slider .slider__item--'+first).addClass('slider__item--'+first+'-hide');
	$('.slider__item--main').addClass('hide--'+second);
	setTimeout(function () {
		$('.slider__item--main').removeClass('hide--'+second);
		$('.slider .slider__item--'+first).removeClass('slider__item--'+first+'-hide');
	}, 1000)
};

$(function () {
	$('.js-item').click(function () {
		if($(this).hasClass('slider__item--active')) {
			return null
		}
		$('.slider__item').removeClass("slider__item--active");
		$(this).addClass("slider__item--active");

		let direction = $(this).hasClass('slider__item--left') ? 'left' : 'right';
		sliderAnimate(direction);
		if(direction == 'left') {
			$('.slider').removeClass('industry');
			$('.slider').addClass('service');
		}
		else {
			$('.slider').removeClass('service');
			$('.slider').addClass('industry');
		}

		let block = $('.js-slider-block');
		let item = $('.data-'+direction).find('.drop-down__card').eq($(this).index());
		let title = item.find('.drop-down__header').text();
		let text = item.find('.drop-down__text').html().replace(/drop-down__paragraph/g, 'slider__par');
		let list = item.find('.drop-down__list').html().replace(/drop-down__link/g, 'slider__tag');
		setTimeout(function() {
			block.find('.slider__title').html(title);
			block.find('.slider__text').html(text);
			block.find('.slider__list').html(list);
		}, 1000 / 2);
	});
	$('.js-item').eq(0).trigger('click');
});

// Открытие модальных окон
// 						 - [all]
$('.js-popup').magnificPopup({
	type: 'inline',
	midClick: true,
	closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close_orange"><i class="icon icon-remove2 experts__close"></i></button>',
	mainClass: 'mfp-fade',
	removalDelay: 300,
});

// правила валидации
let req_rules = {
	name :/^[A-Za-zА-Яа-яЁё0-9.-_]+$/,
	phone:    /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
	email:     /^[a-zA-Z0-9._\-]+@\w+-{0,1}\w+-{0,1}\w+.\w{2,5}$/
}
//js-form-send
$('.js-form-send').submit(function (e) {
	e.preventDefault();
	var form = $(this);
	if(form.find('.form__field_invalid').length) {
		if(window.innerWidth <= 768) {
			$('html, body').animate({
				scrollTop: $('.form__field_invalid:eq(0)').offset().top - 200,
			}, 300);
		}
	}
	else {
		let data = form.serialize();
		$.ajax({
			type: 'POST',
			url: form.attr('action'),
			data: data,
			beforeSend: function (data) {
				form.find('input[type="submit"]').attr('disabled', 'disabled');
			},
			success: function (data) {
				$.magnificPopup.open({
					type: 'inline',
					items: {
						src: '#thanks'
					},
					closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close_orange"><i class="icon icon-remove2 experts__close"></i></button>',
					mainClass: 'mfp-fade',
					removalDelay: 300,
				});
				console.log(data);
				form.find('.form__input').each(function () {
					let name = $(this).attr('name'),
						value = $(this).val(),
						object = $(this);

					object.val("");
				})
			},
			error: function (xhr, ajaxOptions, thrownError) {
				$.magnificPopup.open({
					type: 'inline',
					items: {
						src: '#error'
					},
					closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close_orange"><i class="icon icon-remove2 experts__close"></i></button>',
					mainClass: 'mfp-fade',
					removalDelay: 300,
				});
				console.log(xhr, ajaxOptions, thrownError);

			},
			complete: function (data) {
				form.find('input[type="submit"]').prop('disabled', false);
				form.find('[name=name]').val('');
			}

		});
	}
});
