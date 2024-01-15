

$(function () {
    // Открытие / закрытие мобильного меню
    // 									 - [all]
    $('.js-burger, .js-context-close, .js-context-overlay').click(function () {
        if(!$('.context__content').hasClass('context__content_open')) {
            $('.context__content').addClass('context__content_open');
            $('.context__overlay').addClass('context__overlay_open');
            $('.burger').addClass('burger_open');
            $('html').addClass('no-scroll');
        }
        else {
            $('.context__content').removeClass('context__content_open');
            $('.context__overlay').removeClass('context__overlay_open');
            $('.burger').removeClass('burger_open');
            $('html').removeClass('no-scroll');
        }
        $('.js-burger').blur();
    });

    // слайдер проектов
    // 					 - [all]
    var owlProjects = $('.js-projects');
    if(owlProjects.length > 0) {
        owlProjects.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false
                },
                420: {
                    items: 2,
                    nav: true,
                    dots: false
                },
                992: {
                    items: 3,
                    nav: true,
                    dots: false
                },
                1200: {
                    dots: false,
                    nav: true,
                },
            },
            nav: true,
            loop: true,
            smartSpeed: 900,
            slideBy: 1,
            navContainerClass: 'owl-nav projects__nav',
            navClass: [
                'owl-prev projects__button projects__button_prev',
                'owl-next projects__button projects__button_next'
            ],
            navText: [
                '<i class="altic altic-arrow-my-right rotate"></i>',
                '<i class="altic altic-arrow-my-right"></i>',
            ],
            dotsClass: 'owl-dots default__dots projects__dots',
            dotClass: 'owl-dot default__dot',
            autoplay: false,
        });
    }

    var owlExperts = $('.js-experts');

    if(owlExperts.length > 0) {
        owlExperts.owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                420: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            },
            loop: true,
            smartSpeed: 900,
            slideBy: 1,
            nav: true,
            navContainerClass: 'owl-nav default__nav',
            navClass: [
                'owl-prev default__button default__button_prev',
                'owl-next default__button default__button_next'
            ],
            navText: [
                '<i class="icon icon-arrow_left"></i>',
                '<i class="icon icon-arrow_right"></i>',
            ],
            dots: false,
            dotsClass: 'owl-dots default__dots',
            dotClass: 'owl-dot default__dot',
            autoplay: false,
            mouseDrag: false,
        });
    }

    // слайдер клиентов
    // 				  - [all]
    var owlClients = $('.js-clients');
    if(owlClients.length > 0 ) {
        owlClients.owlCarousel({
            responsive: {
                600: {
                    items: 2,
                    nav: true,

                },

                768: {
                    items: 3,
                    nav: true,
                },
            },
            items: 1,
            nav: true,
            loop: true,
            smartSpeed: 900,
            slideBy: 1,
            navContainerClass: 'owl-nav default__nav',
            navClass: [
                'owl-prev default__button default__button_prev default__button_big',
                'owl-next default__button default__button_next default__button_big'
            ],
            navText: [
                '<i class="icon icon-arrow_left"></i>',
                '<i class="icon icon-arrow_right"></i>',
            ],
            dots: false,
            dotsClass: 'owl-dots default__dots clients__dots',
            dotClass: 'owl-dot default__dot',
            autoplay: false,
        });
    }

    // Показ/скрытие подробной информации в специалистах
    // 				  								   - [all]
    $('.js-expert').click(function () {
        $(this).toggleClass('experts__item_active');
    });

    // Прижатие подвала
    // 				  - [all]
    setTimeout(function () {
        var main = $(window).height(),
            body = $('body').height();
        if(body < main) {
            $('footer').css('margin-top', main - body);
        }
    }, 100);

    // добавление маски в телефонные поля
    // 								    - [all]
    $('input[type="tel"]').inputmask('+7 (\999) 999 99 99', {
        clearMaskOnLostFocus: true,
    });

    // механизм прокрутки по странице (навигация, кнопки) [all]
    $('.js-scroll-to').click(function (e) {
        if($(this).hasClass('context__link')) {

            $('.context__content').removeClass('context__content_open');
            $('.context__overlay').removeClass('context__overlay_open');
            $('.burger').removeClass('burger_open');
            $('html').removeClass('no-scroll');
        }
        var href = $(this).attr('href'),
            offsetTop = href === '#' ? 0 : $(href).offset().top;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000);
        e.preventDefault();
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
    var req_rules = {
        //site: /^[A-Za-zА-Яа-яЁё0-9.-_].{1}[A-Za-zА-Яа-яЁё0-9.-_]$/,
        //name:     /^[A-Za-zА-Яа-яЁё0-9.-_]+$/,
        name :/^[A-Za-zА-Яа-яЁё0-9.-_]+$/,///[-a-zA-Zа-яА-ЯЁё0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-iZ0-9@:%_\+.~#?&\/=]*)?/,
        /*/[-a-zA-Zа-яА-ЯЁё0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-iZ0-9@:%_\+.~#?&\/=]*)?/,*/
        site :/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/,
        phone:    /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        mail:     /^[a-zA-Z0-9._\-]+@\w+-{0,1}\w+-{0,1}\w+.\w{2,5}$/
        //[a-zA-Z0-9_\-]+
    }
    // отправка формы и показ благодарности
    // 						 		      - index
    $('.js-form-send').submit(function (e) {
        e.preventDefault();


        var form = $(this);

        //if(form.find('[name=name]'))
        if(form.find('[name=name]').val()==""){form.find('[name=name]').val('Имя пользователя');}
        form.find('*[data-req]').each(function () {
            var name = $(this).attr('name'),
                value = $(this).val(),
                object = $(this);

            if(req_rules[name].test(value)) {
                object.removeClass('form__field_invalid');
            }
            else {
                object.addClass('form__field_invalid');
            }
        });
        if(form.find('.form__field_invalid').length) {
            if(window.innerWidth <= 768) {
                $('html, body').animate({
                    scrollTop: $('.form__field_invalid:eq(0)').offset().top - 10,
                }, 300);
            }
        }
        else {
            var form = $(this);
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/send/callback',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) {
                    /*$.magnificPopup.open({
                        type: 'inline',
                        items: {
                            src: '#thanks'
                        },
                        closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close_orange"><i class="icon icon-remove2 experts__close"></i></button>',
                        mainClass: 'mfp-fade',
                        removalDelay: 300,
                    });*/
                    console.log(data);
                    location='/thanks';


                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $.magnificPopup.open({
                        type: 'inline',
                        items: {
                            src: '#error-popup'
                        },
                        closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close_orange"><i class="icon icon-remove2 experts__close"></i></button>',
                        mainClass: 'mfp-fade',
                        removalDelay: 300,
                    });
                    console.log(xhr, ajaxOptions, thrownError);

                },
                complete: function (data) {
                    form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
                    form.find('[name=name]').val('');
                }

            });
        }
    });
    $('.js-form-footer-send').submit(function (e) {
        e.preventDefault();
        var form = $(this);
        form.find('*[data-req]').each(function () {
            var name = $(this).attr('name'),
                value = $(this).val(),
                object = $(this);
            if(req_rules[name].test(value)) {
                object.removeClass('form__field_invalid');
            }
            else {
                object.addClass('form__field_invalid');

            }
        });
        if(form.find('.form__field_invalid').length) {
            if(window.innerWidth <= 768) {
                $('html, body').animate({
                    scrollTop: $('.form__field_invalid:eq(0)').offset().top - 10,
                }, 300);
            }
        }
        else {
            var form = $(this);
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/send/callback-footer',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) { // сoбытиe пoслe удaчнoгo oбрaщeния к сeрвeру и пoлучeния oтвeтa
                    /*$.magnificPopup.open({
                        type: 'inline',
                        items: {
                            src: '#thanks'
                        },
                        closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close_orange"><i class="icon icon-remove2 experts__close"></i></button>',
                        mainClass: 'mfp-fade',
                        removalDelay: 300,
                    });*/
                    console.log(data);
                    $("input[name='phone']").val('');
                    $("input[name='name']").val	('');
                    location='/thanks';


                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $.magnificPopup.open({
                        type: 'inline',
                        items: {
                            src: '#error-popup'
                        },
                        closeMarkup: '<button title="%title%" type="button" class="mfp-close mfp-close_orange"><i class="icon icon-remove2 experts__close"></i></button>',
                        mainClass: 'mfp-fade',
                        removalDelay: 300,
                    });

                },
                complete: function (data) { // сoбытиe пoслe любoгo исхoдa
                    form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
                }
            });
        }
    });

    $('.js-form-send').on('input', '.form__field_invalid[data-req]', function () {
        var name = $(this).attr('name'),
            value = $(this).val(),
            object = $(this);//.closest('.form__field');
        if(req_rules[name].test(value)) {
            object.removeClass('form__field_invalid');
        }
    });
});


/*function changeHeight() {
    var newHeight = $("#maestro-mov").height();
    //console.log(newHeight);
    $(".promo.main-promo").css('height', newHeight + 'px');
}

setInterval(changeHeight, 10);*/



//go back

function goBack(link) {

    if(link === "http://celado-media.ru/digital-case/robo-sapiens-case.php" || link === "http://celado-media.ru/digital-case/robo-sapiens-creation.blade.php" || link === '' ) {

        location.href="http://celado-media.ru/#projects";
        return true;
    } else {
        location.href=link+"#projects";
    }
}




function Height() {
    var newHeight = $("#maestro-mov").height();
    $(".promo.main-promo").css('height', newHeight + 'px');
}
setInterval(Height, 10);


function innerTimeout(i) {
    if(i > 2) {
        if(i > 4) {
            $(".js-anim-text:nth-of-type(1)").css({
                "display": "none"
            });
            $(".js-anim-text:nth-of-type(2)").css({
                "display": "none"
            });
            $(".js-anim-text:nth-of-type(3)").css({
                "display": "none"
            });
            $(".js-anim-text:nth-of-type(4)").css({
                "display": "none"
            });
        } else {
            $(".js-anim-text:nth-of-type(1)").css({
                "display": "none"
            });
            $(".js-anim-text:nth-of-type(2)").css({
                "display": "none"
            });
        }
    }
    $(".js-anim-text:nth-of-type("+i+")").fadeIn(500);


}
function hideIt() {
    $(".js-anim-text").css({
        "display":"none"
    });
}
function digitalRenew() {
    var time = 500;
    for(var i = 1; i <= 6; i++) {
        time += 1500;
        // $(".js-anim-text:nth-of-type("+i+")").fadeIn(500);

        setTimeout(innerTimeout, time, i);
    }
    setTimeout(hideIt, 12000);
    setTimeout(digitalRenew, 12001);
}
digitalRenew();

$(document).ready(function() {

    /*setTimeout(miniText, 3000);*/
    /*setTimeout(ppcAnim, 3000);*/
    /*setTimeout(btnsChange, 3000);*/
    /*function miniText() {
        console.log(2);
        if(window.matchMedia("(min-width: 1192px)").matches) {
            $(".mini-text-appears").animate({
                opacity: 1,
                marginTop: "177px"
            }, 1000)
        } else if(window.matchMedia("(min-width: 767px)").matches)  {
            $(".mini-text-appears").animate({
                opacity: 1,
                marginTop: "131px"
            }, 1000);

        }else if(window.matchMedia("(min-width: 450px)").matches)  {
            $(".mini-text-appears").animate({
                opacity: 1,
                marginTop: "90px"
            }, 1000);

        }        else {
            $(".mini-text-appears").animate({
                opacity: 1,
                marginTop: "145px"
            }, 1000);
        }

    }*/
   /* function ppcAnim() {

        if(window.matchMedia("(min-width: 600px)").matches) {
            $("#left_btn").animate({
                opacity: 1,
                marginLeft: "-250"
            }, 700);
            $("#right_btn").animate({
                opacity: 1,
                marginLeft: "10"
            }, 700);
        } else {
            $("#left_btn").animate({
                opacity: 1,
                marginTop: "40"
            }, 700);
            $("#right_btn").animate({
                opacity: 1,
                marginTop: "120"
            }, 700);
        }

    }*/
    function btnsChange() {

        $(".float-change-left-js").addClass("right");
        $(".float-change-right-js").addClass("left");
    }
    $('.input-word').each(function(e) {
        $(this).on('input', function(event) {
            $(this).removeClass("input-word__error");
            $('.error-text').hide();
            $numberInput = $(this).data("count");
            $('.btn-' + $numberInput).show();
            $('.btn-' + $numberInput).css('background-color', '#27AE60');
        });
    })

    $('.btn-show-result').on('click', function(event) {
        event.preventDefault();
        $('.item-result').hide();
        //запрос
        var answers = [];
        $('.input-word').each(function(e) {
            answers[e] = $('.input-word')[e].value;
        });
        var textResult = {
            'en': {
                'result1': {
                    'h1': 'Not very creative',
                    'rating': "Maybe you're tired and not in very good shape.",
                    'description': "<p>Get some rest, and then read about the development of creativity, for example, <a href='https://ideas.ted.com/3-science-based-strategies-to-increase-your-creativity/'>here</a></p>",
                },
                'result2': {
                    'h1': "Not bad",
                    'rating': "You are more creative than ",
                    'rating2': "% of the others",
                    'description': "<p>Routine diminishes creativity, so make sure to make time for something new. Maybe start painting? Here some more <a href='https://www.inc.com/larry-kim/9-ways-to-dramatically-improve-your-creativity.html'>advices</a></p>",
                },
                'result3': {
                    'h1': "You have great potential, use it!",
                    'rating': "You are more creative than ",
                    'rating2': "% of the others",
                    'description': "<p>Use your opportunities more often and they will become even wider. By the way, jogging helps creativity too!</p>",
                },
                'result4': {
                    'h1': "Exceptional creativity",
                    'rating': "You are more creative than ",
                    'rating2': "% of the others",
                    'description': "<p>We are delighted, you are great, keep it up!</p>",
                }
            },
            'lit': {
                'result1': {
                    'h1': "Nelabai kūrybingas",
                    'rating': "Galbūt esate pavargęs ir nelabai geros formos.",
                    'description': "<p>Pailsėkite, o tada skaitykite, pavyzdžiui, apie kūrybiškumo ugdymą, <a href='https://ideas.ted.com/3-science-based-strategies-to-increase-your-creativity/'>čia</a></p>",
                },
                'result2': {
                    'h1': "Neblogai",
                    'rating': "Esate kūrybiškesnis nei ",
                    'rating2': "% likusių",
                    'description': "<p>Rutina mažina kūrybiškumą, todėl būtinai skirkite laiko kažkam naujam. Gal pradėti tapyti? Štai dar keletas <a href='https://www.inc.com/larry-kim/9-ways-to-dramatically-improve-your-creativity.html'>patarimų</a></p>",
                },
                'result3': {
                    'h1': "Turite didelį potencialą, išnaudokite jį!",
                    'rating': "Esate kūrybiškesnis nei ",
                    'rating2': "% likusių",
                    'description': "<p>Dažniau pasinaudokite savo kūrybiškumo galimybėmis ir jos taps dar labiau išplėtotos. Beje, bėgimas padeda būti kūrybiškesniu!</p>",
                },
                'result4': {
                    'h1': "Turite didelį potencialą, išnaudokite jį!",
                    'rating': "Esate kūrybiškesnis nei ",
                    'rating2': "% likusių",
                    'description': "<p>Džiaugiamės, esate labai kūrybiškas!</p>",
                }
            }
        }
        var language = window.location.pathname.split('/')[1];
        var arr;
        var resText;
        if(language == 'en') {
            arr = { words: answers, language: "english" };
            resText = textResult.en;
        } 
        if(language == 'lit') {
            arr = { words: answers, language: "lithuanian" };
            resText = textResult.lit;
        } 
        var dat_score;
        var better_than;
        $.ajax({
            url: '/nlp/get_words_divergence',
            type: 'POST',
            data: arr,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(msg) {
                var links = msg[1];
                var language = window.location.pathname.split('/')[1];
                msg = JSON.parse(msg[0]);
                dat_score = Math.round(msg.dat_score);
                better_than = Math.round(msg.better_than * 100);
                $('.result').css("display","flex");
                if(dat_score > 100) {
                    dat_score = 100;
                }
                var score_x_desktop = [170,175,179,184,188,193,198,202,207,211,216,221,225,230,234,239,244,248,253,257,262,267,271,276,280,285,290,294,299,303,308,313,317,322,326,331,336,340,345,349,354,359,363,368,372,377,382,386,391,395,400];
                var score_y_desktop = [20,20,23,23,25,25,25,25,23,25,29,45,64,71,85,102,114,125,142,156,165,177,196,206,228,253,275,292,305,318,326,323,318,306,283,264,239,209,186,153,120,100,64,56,33,20,20,16,12,12,12];
                var score_x_mobile = [112,116,119,121,124,127,130,132,135,138,141,143,146,149,152,154,157,160,163,165,171,172,173,176,179,182,184,187,190,193,202,206,211,215,217,219,219,222,224,227,232,234,237,243,244,250,251,253,255,260,264];
                var score_y_mobile = [16,20,20,22,22,22,22,22,22,22,20,31,37,45,55,64,72,82,93,101,116,109,117,123,131,143,155,172,190,198,218,222,211,194,184,175,175,158,114,124,96,84,62,36,25,18,18,16,16,16,16];
                if ($(window).width() > 1020){
                    if(language == 'lit') {
                        $('.result').css('height', '575px');
                    }
                    if(dat_score <= 20) {
                        $('.score__circle').css('bottom', '12px');
                        $('.score__circle').css('left', (2.3 * dat_score - 14) + 'px');
                    } else if(dat_score < 40) {
                        $('.score__circle').css('bottom', '12px');
                        $('.score__circle').css('left', (32 + 4.6 * (dat_score - 20)) + 'px');
                    }else if(dat_score < 50) {
                        $('.score__circle').css('bottom', '16px');
                        $('.score__circle').css('left', (32 + 4.6 * (dat_score - 20)) + 'px');
                    } else if (dat_score >= 50) {
                        $('.score__circle').css('bottom', score_y_desktop[dat_score - 50]+ 'px');
                        $('.score__circle').css('left', score_x_desktop[dat_score - 50] + 'px');
                        if(dat_score <= 82) {
                            $('.score__red-line').css('display', 'block');
                            $('.score__red-line').css('height', score_y_desktop[dat_score - 50] - 20 + 'px');
                            $('.score__red-line').css('bottom', '20px');
                            $('.score__red-line').css('left', score_x_desktop[dat_score - 50] + 13 + 'px');
                        }
                    }
                } else {
                    if(dat_score <= 20) {
                        $('.score__circle').css('bottom', '14px');
                        $('.score__circle').css('left', (1.37 * dat_score - 5.5) + 'px');
                    } else if(dat_score <= 30) {
                        $('.score__circle').css('bottom', '14px');
                        $('.score__circle').css('left', (24 + 2.74 * (dat_score - 20)) + 'px');
                    }else if(dat_score < 50) {
                        $('.score__circle').css('bottom', '16px');
                        $('.score__circle').css('left', (28 + 2.74 * (dat_score - 20)) + 'px');
                    } else if (dat_score >= 50) {
                        $('.score__circle').css('bottom', score_y_mobile[dat_score - 50] + 2 + 'px');
                        $('.score__circle').css('left', score_x_mobile[dat_score - 50] + 2 +'px');
                        if(dat_score <= 82 && dat_score >60) {
                            $('.score__red-line').css('display', 'block');
                            $('.score__red-line').css('height', score_y_mobile[dat_score - 50] - 18 + 'px');
                            $('.score__red-line').css('bottom', '20px');
                            $('.score__red-line').css('left', score_x_mobile[dat_score - 50] + 10 + 'px');
                        }
                        if(dat_score >= 80) {
                            $('.score__circle').css('bottom', score_y_mobile[dat_score - 50] + 'px');
                            $('.score__circle').css('left', score_x_mobile[dat_score - 50] +'px');
                            if(dat_score <= 82 && dat_score > 60) {
                                $('.score__red-line').css('display', 'block');
                                $('.score__red-line').css('height', score_y_mobile[dat_score - 50] - 20 + 'px');
                                $('.score__red-line').css('bottom', '20px');
                                $('.score__red-line').css('left', score_x_mobile[dat_score - 50] + 8 + 'px');
                            }
                        }
                    }
                }
                $('.score__text-h3 > span').text(dat_score);
                $('.score__text-p > span').text(msg.placement - msg.quantity < 0 ? (msg.placement - msg.quantity)*(-1) : (msg.placement - msg.quantity));
                if (better_than < 40) {
                    $('.result__content-h1').text(resText.result1.h1);
                    $('.result-img-desktop').css('background-image', 'url("' + window.location.origin + '/img/nlp/result1.png")');
                    $('.result-img-mobile').css('background-image', 'url("' + window.location.origin + '/img/nlp/result1-mobile.png")');
                    $('.result__content-rating').text(resText.result1.rating);
                    $('.result__content-description').append($(resText.result1.description));
                }
                if (better_than >= 40 && better_than < 60) {
                    $('.result-img-desktop').css('background-image', 'url("' + window.location.origin + '/img/nlp/result2.png")');
                    $('.result-img-mobile').css('background-image', 'url("' + window.location.origin + '/img/nlp/result2-mobile.png")');
                    $('.result__content-h1').text(resText.result2.h1);
                    $('.result__content-rating').text(resText.result2.rating +  Math.round(better_than) + resText.result2.rating2);
                    $('.result__content-description').append($(resText.result2.description));
                }
                if (better_than >= 60 && better_than < 80) {
                    $('.result-img-desktop').css('background-image', 'url("' + window.location.origin + '/img/nlp/result3.png")');
                    $('.result-img-mobile').css('background-image', 'url("' + window.location.origin + '/img/nlp/result3-mobile.png")');
                    $('.result__content-h1').text(resText.result3.h1);
                    $('.result__content-rating').text(resText.result3.rating +  Math.round(better_than) + resText.result3.rating2);
                    $('.result__content-description').append($(resText.result3.description));
                }
                if (better_than >= 80) {
                    $('.result-img-desktop').css('background-image', 'url("' + window.location.origin + '/img/nlp/result4.png")');
                    $('.result-img-mobile').css('background-image', 'url("' + window.location.origin + '/img/nlp/result4-mobile.png")');
                    $('.result__content-h1').text(resText.result3.h1);
                    $('.result__content-rating').text(resText.result4.rating +  Math.round(better_than) + resText.result4.rating2);
                    $('.result__content-description').append($(resText.result4.description));
                }
                $('.nlp-share-facebook').prop("href", links.facebook);
                $('.nlp-share-telegram').prop("href", links.telegram);
                $('.nlp-share-twitter').prop("href", links.twitter);
                $('.nlp-share-whatsapp').prop("href", links.whatsapp);
            }
        });
        $('.questionnaire-header').hide();
        $('.questionnaire-text').hide();
        $('.back-img_1').hide();
        $('.back-img_2').hide();
        $('.back-img_2_mobile').hide();
        $('.block-mobile-img').hide();
        $('.back-img_1-mobile').hide();
        $('.nlp-h1').hide();
        $('.nlp-h3').hide();
        $('.show_languages').css('display', 'none');
        $('.select-language').addClass('select-language_without-line');
        $('html, body').animate({
            scrollTop: $(".item-result").offset().top - 400
        }, 1000);

    });
    var showScore = true;
    $('.btn-show-score').on('click', function() {
        var language = window.location.pathname.split('/')[1];
        var buttontext;
        if(language == 'en') {
            buttontext = ['HIDE SCORE', 'SHOW SCORE'];
        } 
        if(language == 'lit') {
            buttontext = ['Parodyti rezultatus', 'Pabandykite dar kartą'];
        } 
        if(showScore) {
            $('.result-images').hide();
            $('.score').show();
            $('.btn-show-score').text(buttontext[0]);
            showScore = false;
        } else {
            $('.result-images').show();
            $('.score').hide();
            $('.btn-show-score').text(buttontext[1]);
            showScore = true;
        }
    })

    $('.btn-try-again').on('click', function(event) {
        event.preventDefault();
        $('.result').css("display","none");
        $('.questionnaire-header').show();
        $('.questionnaire-text').show();
        $('.item-1').css('display', 'flex');
        $('.result__content-description > p').remove();
        $('.nlp-h1').show();
        $('.nlp-h3').show();
        if ($(window).width() <= 720) {
            $('.block-mobile-img').show();
            $('.back-img_1-mobile').show();
            $('.back-img_2_mobile').show();
        } else {
            $('.back-img_2').show();
            $('.back-img_1').show();
        }
        $('.score__red-line').css('display', 'none');
        $('.show_languages').css('display', 'block');
        $('.select-language').removeClass('select-language_without-line');
    });
    $('.input-word-1').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $(".item").offset().top
        }, 1000);
    });
    $('.btn-next').each(function(e) {
        $(this).on('click', function(event) {
            let language = window.location.pathname.split('/')[1];
            var arr;
            var answer = false;
            var numberInput = $(this).data("count");
            var word = $('.input-word-' + numberInput).val();
            if(language == 'en') {
                arr = { word: word, language: "english" };
            } 
            if(language == 'lit') {
                arr = { word: word, language: "lithuanian" };
            } 
            $.ajax({
                url: '/nlp/check_word',
                type: 'POST',
                data: arr,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function(msg) {
                    msg = JSON.parse(msg);
                    answer = msg.word_exists;
                    if (answer == true) {
                        if (numberInput !== $('.input-word').length) {
                            $('.item-' + (numberInput + 1)).css('display', 'flex');
                            $('.item-' + numberInput).css('display', 'none');
                        } else {
                            $('.item-' + numberInput).css('display', 'none');
                            $('.item-result').css('display', 'flex');
                        }
                    } else {
                        $('.input-word-' + numberInput).addClass("input-word__error");
                        $('.error-text').show();
                    }
                }
            });
           
        });
    })
    $( ".language" ).hover( 
        function(event) {
            $(this).addClass('select-language_active');
            var list = $('.select-language__list');
            list.removeClass('select-language__list').addClass('select-language__list_active');
        },
        function(event) {
            $(this).removeClass('select-language_active');
            var list = $('.select-language__list_active');
            list.removeClass('select-language__list_active').addClass('select-language__list');
        }
    );
    // $('.select-language').on('click', function(event) {
    //     event.preventDefault();
    //     $(this).addClass('select-language_active');
    //     var list = $('.select-language__list');
    //     list.removeClass('select-language__list').addClass('select-language__list_active');
    // });
    // $('.content').on('click', function(event) {
    //     event.preventDefault();
    //     var list = $('#array-languages');
    //     console.log(list)
    //     if(list.hasClass("select-language__list_active")) {
    //         list.removeClass('select-language__list_active').addClass('select-language__list');
    //     }
    //     event.stopPropagation();
    // });

    // $('.array-languages li').each(function(e){
    //     $(this).on('click', function(event) {
    //         event.preventDefault();
    //         lang = $(this).data("language");
    //         activeLanguage = $(".language_active");
    //         activeLanguage.removeClass('language_active');
    //         switch(lang) {
    //             case 'lt':
    //                 $.get(window.location.origin + '/setlocal/lit');
    //                 break;
    //             case 'ru': 
    //                 break;
    //             case 'en': 
    //                 $.get(window.location.origin + '/setlocal/en');
    //                 break;
    //             default: $(".select-language").text('English');
    //         }
    //     });
    // });  
});