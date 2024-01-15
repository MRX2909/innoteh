let enableAnimCurrentMenuBlock = true;
let startHeaderMenu = function () {
    let burgerButton = $('.burger-button');
    let headerMenu = $('.header-menu');
    let listLanguage = $('.language-block-mobile');
    let menuAnimationStatus = false;
    let openMenu = function () {
        headerMenu.css({'display': 'block'});
        listLanguage.css({'display': 'flex'});
        setTimeout(function () {
            headerMenu.css({opacity: '1'});
        }, 50);
        $('.burger-button').addClass('active');
        headerMenu.removeClass('closed');
        setTimeout(function () {
            menuAnimationStatus = false;
        }, 300);
    };
    let closeMenu = function () {
        headerMenu.css({opacity: '0'});
        setTimeout(function () {
            headerMenu.css({display: 'none'});
            listLanguage.css({'display': 'none'});
        }, 300);
        $('.burger-button').removeClass('active');
        headerMenu.addClass('closed');
        setTimeout(function () {
            menuAnimationStatus = false;
        }, 300);
    };
    burgerButton.on("click", function () {
        menuAnimationStatus = true;
        if (headerMenu.hasClass('closed')) {
            openMenu();
        } else {
            closeMenu();
        }
    });
    // $(window).resize(function () {
    //     if ($(window).width() > 922) {
    //         headerMenu.css({display: 'flex'});
    //         headerMenu.css({opacity: '1'});
    //         headerMenu.addClass('closed');
    //         $('.burger-button').removeClass('active');
    //     } else {
    //         headerMenu.css({display: 'none'});
    //         headerMenu.css({opacity: '0'});
    //     }
    // });
    //$(window).on('scroll', function () {
        // if (!menuAnimationStatus) {
        //     if ($(window).width() <= 922 && !headerMenu.hasClass('closed')) {
        //         closeMenu();
        //     }
        // }
        //Выделение активного пункта меню в зависимости от видимого блока
       /* if (enableAnimCurrentMenuBlock) {
            let currentScroll = $(window).scrollTop();
            let screenHeight = $(window).height();
            $('.header-menu-button').removeClass('active');
            $('.menu-projection').each(function (i, element) {
                if (currentScroll + screenHeight / 1.5 > $(element).position().top) {
                    let idElement = $(element).attr('id');
                    $('.header-menu-button').removeClass('active');
                    $('.header-menu-button[href$=' + idElement + ']').addClass('active');
                    return;
                }
            });
        } */
    //});
};


let startBackgroundStars = function () {
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 160, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {"enable": true, "speed": 4, "opacity_min": 0.2, "sync": false}
            },
            "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 4, "size_min": 0.3, "sync": false}},
            "line_linked": {"enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 0.3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 600}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "bubble"},
                "onclick": {"enable": true, "mode": "repulse"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3},
                "repulse": {"distance": 400, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });
    $('#particles-js').css({opacity: 1});
};

let startRocket = function () {
    let animComplete = false;
    let currentScroll = $(window).scrollTop();
    let screenHeight = $(window).height();
    let countSteps = $('.step-block').length;
    $('.step-block').each(function (i, element) {
        if (currentScroll + screenHeight / 1.5 > $(element).position().top) {
            $(element).css({opacity: 1});
            $('.rocket-step:eq(' + i + ')').addClass('show');
        }
        if ((i + 1) === countSteps) {
            if (currentScroll + screenHeight / 3 > $(element).position().top) {
                $('.rocket-fire').addClass('fire');
            }
        }
    });
    setTimeout(function () {
        $('.rocket-step').css({
            'display': 'flex',
            'transition': 'all 1s'
        });
        $('.rocket-fire').css({
            'display': 'flex',
            'transition': 'all 1s'
        });
    }, 40);

    $(window).on('scroll', function () {
        if (!animComplete) {
            let currentScroll = $(window).scrollTop();
            let screenHeight = $(window).height();
            $('.step-block').each(function (i, element) {
                if (currentScroll + screenHeight  > $(element).position().top) {
                    $(element).css({opacity: 1});
                    $('.rocket-step:eq(' + i + ')').addClass('show');
                }
                if ((i + 1) === countSteps) {
                    if (currentScroll + screenHeight / 3 > $(element).position().top) {
                        $('.rocket-fire').addClass('fire');
                        animComplete = true;
                    }
                }
            });
        }
    });
};

// Выполняется всякий раз, когда карусель с кейсами будет потревожина, выделит активный кейс в блоке названий

$('.tab-content').on('afterChange', function(event, slick, direction){
        $('.tab-client-item').each(function(){
            $(this).removeClass('active-client-item') ;
        });
        $('.tab-client-item[id="' + $('.tab-content').slick('slickCurrentSlide') + '"]').addClass('active-client-item');
        let whereAreYou = getModCount($('.tab-content').slick('slickCurrentSlide'));
        ClickToArrowCasesName(whereAreYou);
});

// Клик по стрелочке)))

$('.arrow-cases-name').on('click',function(){
    let lastChild = 0;
    if($('.client-active').prop('id') != undefined){
        if( $('.client-active').length > 1){
            lastChild = $('.client-active').eq(-1).prop('id');
            ClickToArrowCasesName(Number(lastChild) + 1);

        } else {
            ClickToArrowCasesName(0);
            // console.log("VTOROE");
        }
        // console.log("last ID = " + lastChild );

    }else{
        ClickToArrowCasesName(0);
    }

});

// Клик по названию кейса

$('.tab-client-item').on('click',function(){
    $('.tab-client-item').each(function(){
        $(this).removeClass('active-client-item') ;
    });
    $(this).addClass('active-client-item');
    $('.tab-content').slick('slickGoTo',  $(this).prop('id'));
});

// Перемещение активного окна на 5 элементов вперед. (Все кейсы сдвинуться на 5 вперед или назад)

let ClickToArrowCasesName = function(lastChild = -1) {
        let WidthToScroll = 0;
        if( lastChild == 0 ){
            $('.client-active').each(function () {
                WidthToScroll += $(this).width() + 37;

            });
            CaseBlockWidth(0);
            $('.tab-clients-cases').css({'left': '0'});
            if($('.tab-client-item').length < 6){
                $('.arrow-cases-name').css({"display":"none"});
            }
        }else{
            if ((Number($('.client-active').eq(-1).prop('id')) + 1) > Number($('.tab-client-item').eq(-1).prop('id'))) {
                ClickToArrowCasesName(0);
                // console.log((Number($('.client-active').eq(-1).prop('id')) + 1) + '    >   ' + Number($('.tab-client-item').eq(-1).prop('id')));
            } else {
                for( let i = 0; i <= lastChild - 1; i++ ){
                    WidthToScroll -= $('.tab-client-item[id="' + i + '"]').width() + 37;
                    // console.log("IDTH " + WidthToScroll);
                }
                // console.log("IDTH " + WidthToScroll + "  lastChild" + lastChild);
                $('.tab-clients-cases').css({'left': WidthToScroll});
                CaseBlockWidth(lastChild);
            }
        }
}

let getModCount = function(count){
    let x = Math.trunc(count / 5);
    let point = x * 5;
    return  point;
}

// Блок по ширине 5-ти текстовых полей (названий кейсов)

let CaseBlockWidth = function(last = 0, where = 0) {
        let lastChildItem = $('.tab-client-item').eq(-1).prop('id');
        let Width = 0;
        $('.tab-client-item').each(function () {
            $(this).removeClass('client-active');
        });
        let start = Number(last)  ;
        let end = Number(last) + 4;

        // console.log("start = " + start + " end = " + end);
        for (let i = start; i <= end; i++){
            if($('.tab-client-item').eq(i) != undefined){
                // console.log($('.tab-client-item').eq(i).prop('id') + "  " + i);
                $('.tab-client-item').eq(i).addClass('client-active');
                Width += $('.tab-client-item').eq(i).width() + 37;
            }
        }
    // console.log("RAB - " + Width);
        $('.tabs-overflow-hidden').width(Width);
}



let GetWidthCasesNamesBlock = function(){
    let WidthCasesNames = 0;
    $('.tab-client-item').each(function(){
        WidthCasesNames+= $(this).width() + 150;
        // console.log($(this).width() + 37);
    });
    $('.tab-clients-cases').width(WidthCasesNames);
}
let GetWidthCasesBlock = function() {
    $('.tab-cases-item').width($('.tab-content').width());
}

let startPublicationsSlider = function () {
    let CasesSliderElement = $(".publications-wrapper");
    let slickCreated = false;
    let currentScreenWidth = 0;
    // console.log("tyt");
    let slickFuncProp = function () {
        CasesSliderElement.slick({
            infinite: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow:"<span class='slick-arrow-prev-publication'></span>",
            nextArrow:"<span class='slick-arrow-next-publication'></span>"
        });
    };
    let slickIt = function () {
        if (slickCreated) {
            CasesSliderElement.slick({
                infinite: false,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                prevArrow:"<span class='slick-arrow-prev-publication'></span>",
                nextArrow:"<span class='slick-arrow-next-publication'></span>"
            });
            slickFuncProp();
        } else {
            slickFuncProp();
            slickCreated = true;
        }
    };
    let unSlickIt = function () {
        if (slickCreated) {
            CasesSliderElement.slick('unslick');
            slickCreated = false;
        }
    };
    let startOrUpdateSlick = function () {
        let newScreenWidth = $(window).width();
        if (newScreenWidth !== currentScreenWidth) {
            if (newScreenWidth <= 1200) {
                slickIt();
            } else {
                unSlickIt();
            }
            currentScreenWidth = newScreenWidth;
        }
    };
    startOrUpdateSlick();
    $(window).resize(function () {
        startOrUpdateSlick();
    });
};
let startCasesClientNamesSlider = function () {
    let CasesSliderElement = $(".tabs-clients");
    let slickCreated = false;
    let currentScreenWidth = 0;
    let slickFuncProp = function () {
        CasesSliderElement.slick({
            infinite: false,
            centerMode: false,
            slidesToShow: 5,
            slidesToScroll:5,
            variableWidth: true,
            arrows: false,
            focusOnSelect: false,
        });
        // console.log(GetWidthCasesBlock());
        GetWidthCasesBlock();
    };
    let slickIt = function () {
        if (slickCreated) {
            CasesSliderElement.slick('unslick');
            slickFuncProp();
        } else {
            slickFuncProp();
            slickCreated = true;
        }
    };
    let unSlickIt = function () {
        if (slickCreated) {
            CasesSliderElement.slick('unslick');
            slickCreated = false;
        }
    };
    let startOrUpdateSlick = function () {
        let newScreenWidth = $(window).width();
        if (newScreenWidth !== currentScreenWidth) {
            slickIt();
            currentScreenWidth = newScreenWidth;
        }
    };
    startOrUpdateSlick();
    $(window).resize(function () {
        startCasesClientNamesSlider();
    });
};
let startCasesSlider = function () {
    let CasesSliderElement = $(".tab-content");
    let slickCreated = false;
    let currentScreenWidth = 0;
    // console.log("tyt");
    let slickFuncProp = function () {
        CasesSliderElement.slick({
            infinite: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: false,
            dots:true,
        });
    };
    let slickIt = function () {

            CasesSliderElement.slick({
                infinite: false,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                prevArrow:"<span class='slick-arrow-prev-cases'></span>",
                nextArrow:"<span class='slick-arrow-next-cases'></span>"
            });
    };
    let unSlickIt = function () {
        if (slickCreated) {
            CasesSliderElement.slick('unslick');
            slickCreated = false;
        }
    };
    let startOrUpdateSlick = function () {
        let newScreenWidth = $(window).width();
        if (newScreenWidth !== currentScreenWidth) {
            if (newScreenWidth <= 768) {
                slickIt();
            } else {
                slickFuncProp();
            }
            currentScreenWidth = newScreenWidth;
        }
    };
    startOrUpdateSlick();
    $(window).resize(function () {
        startCasesSlider();
    });
};
let startRoboSlider = function () {
    let RoboSliderElement = $(".solutions-collection");
    let slickCreated = false;
    let currentScreenWidth = 0;
    // console.log("tyt");
    let slickFuncProp = function () {
        RoboSliderElement.slick({
            infinite: false,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow:"<span class='slick-arrow-prev'></span>",
            nextArrow:"<span class='slick-arrow-next'></span>"
        });
    };
    let slickIt = function () {
        if (slickCreated) {
            RoboSliderElement.slick({
                infinite: false,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                prevArrow:"<span class='slick-arrow-prev'></span>",
                nextArrow:"<span class='slick-arrow-next'></span>"
            });
            slickFuncProp();
        } else {
            slickFuncProp();
            slickCreated = true;
        }
    };
    let unSlickIt = function () {
        if (slickCreated) {
            RoboSliderElement.slick('unslick');
            slickCreated = false;
        }
    };
    let startOrUpdateSlick = function () {
        let newScreenWidth = $(window).width();
        if (newScreenWidth !== currentScreenWidth) {
            if (newScreenWidth <= 922) {
                slickIt();
            } else {
                unSlickIt();
            }
            currentScreenWidth = newScreenWidth;
        }
    };
    startOrUpdateSlick();
    $(window).resize(function () {
        startOrUpdateSlick();
    });
};
function startPopup() {
    // Открытие модальных окон
    $('.js-popup').magnificPopup({
        type: 'inline',
        midClick: true,
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><div class="close_inner"><div class="close-line"></div><div class="close-line"></div></div></button>',
        mainClass: 'mfp-fade',
        removalDelay: 290,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 768) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
    $(document).on('click', '.mfp-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
}

let startValidation = function () {
    $('input[type="tel"]').inputmask('+7 (\999) 999 99 99', {
        clearMaskOnLostFocus: true,
    });
    // правила валидации
    var req_rules = {
        //site: /^[A-Za-zА-Яа-яЁё0-9.-_].{1}[A-Za-zА-Яа-яЁё0-9.-_]$/,
        //name:     /^[A-Za-zА-Яа-яЁё0-9.-_]+$/,
        name: /^[A-Za-zА-Яа-яЁё0-9.-_]+$/,///[-a-zA-Zа-яА-ЯЁё0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-iZ0-9@:%_\+.~#?&\/=]*)?/,
        /*/[-a-zA-Zа-яА-ЯЁё0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-iZ0-9@:%_\+.~#?&\/=]*)?/,*/
        site: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/,
        phone: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        mail: /^[a-zA-Z0-9._\-]+@\w+-{0,1}\w+-{0,1}\w+.\w{2,5}$/
        //[a-zA-Z0-9_\-]+
    };

    $('.js-form-send').submit(function (e) {
        e.preventDefault();
        var form = $(this);
        // if (form.find('[name=name]').val() == "") {
        //     form.find('[name=name]').val('Имя пользователя');
        // }
        form.find('*[data-req]').each(function () {
            var name = $(this).attr('name'),
                value = $(this).val(),
                object = $(this);

            if (req_rules[name].test(value)) {
                object.removeClass('form__field_invalid');
            }
            else {
                object.addClass('form__field_invalid');
            }
        });
        if (form.find('.form__field_invalid').length) {
            if (window.innerWidth <= 768) {
                $('html, body').animate({
                    scrollTop: $('.form__field_invalid:eq(0)').offset().top - 10,
                }, 300);
            }
        }
        else {
            var form = $(this);
            var data = form.serialize();
            // console.log(data);
            $.ajax({
                type: 'POST',
                url: './send/index.php',
                data: data,
                beforeSend: function (data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function (data) {
                    // console.log(data);
                    // location = '/thanks';
                    $.magnificPopup.open({
                        type: 'inline',
                        items: {
                            src: '#thanks-popup'
                        },
                        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><div class="close_inner"><div class="close-line"></div><div class="close-line"></div></div></button>',
                        mainClass: 'mfp-fade',
                        removalDelay: 300,
                    });
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    $.magnificPopup.open({
                        type: 'inline',
                        items: {
                            src: '#error-popup'
                        },
                        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><div class="close_inner"><div class="close-line"></div><div class="close-line"></div></div></button>',
                        mainClass: 'mfp-fade',
                        removalDelay: 300,
                    });
                    // console.log(xhr, ajaxOptions, thrownError);
                },
                complete: function (data) {
                    form.find('input[type="submit"]').prop('disabled', false); // в любoм случae включим кнoпку oбрaтнo
                    form.find('[name=name]').val('');
                }
            });
        }
    });
};

let startAdvantages = function () {
    let animComplete = false;
    let currentScroll = $(window).scrollTop();
    let screenHeight = $(window).height();
    $('.advantage-item').each(function (i, element) {
        if (currentScroll + screenHeight / 1.5 > $(element).offset().top) {
            $(element).addClass('open');
        }
    });
    $(window).on('scroll', function () {
        if (!animComplete) {
            let currentScroll = $(window).scrollTop();
            let screenHeight = $(window).height();
            $('.advantage-item').each(function (i, element) {
                if (currentScroll + screenHeight / 1.5 > $(element).offset().top) {
                    $(element).addClass('open');
                }
            });
            if ($('.advantage-item.open').length === $('.advantage-item').length) {
                animComplete = true;
            }
        }
    });
};

let startHoverAdvantages = function () {
    $('.agnet-item_outer').hover(function() {
        let elY = $( this ).offset().top;
        let elX = $( this ).offset().left;
        let elWidth = $( this ).width();
        let elHeight = $( this ).height();
        let telescope = $('#telescopeid');
        let telY = telescope.offset().top;
        let telX = telescope.offset().left;
        let telWidth = telescope.width();
        let telHeight = telescope.height();
        let deltaY = telY + (telHeight/2) - (elY + (elHeight / 2));
        let deltaX = telX + (telWidth/2) - (elX + (elWidth / 2));
        let telDeg = Math.atan2( deltaY, deltaX ) * 54 + 5;
        // console.log(deltaY + '  ' +  deltaX  +  '   ' + telDeg);
        telescope.css({'transform': 'rotate(' + telDeg + 'deg)'})
    });
};

let modalHeight = 0;

$(document).ready(function () {
    startHeaderMenu();
    startBackgroundStars();
    startRocket();
    startRoboSlider();
    startPopup();
    startValidation();
    startAdvantages();
    startHoverAdvantages();
    clickLetsGo();
    startCasesSlider();
   // startCasesClientNamesSlider();
    startPublicationsSlider();
    GetWidthCasesBlock();
    CaseBlockWidth(0, 0);
    GetWidthCasesNamesBlock();
    // Открытие модального окна "Связаться с нами"
    $('.tab-client-item[id="'+ 0 +'"]').click();

    $('.contact-us__button').on("click",function () {
        $("html").css("overflow-y","hidden");
        $('.container-fluid__contact-us').css({"display":"flex"});
        $('.container-fluid__contact-us').animate({"opacity":"1"},300);
        $('.contact-us__modal').css({"display":"flex"});
        $('.contact-us__modal').animate({"top":"0%"},250);
        // const selector = document.getElementById("contact_us__phone");
        // Inputmask({"mask": "+7 (999) 999-9999"}).mask(selector);

    });

    $('.contact-us__phone-number').inputmask({
        mask: '9{*}',
    });
    
    $('.href__language').on('click',function(){
        $('.href__language').removeClass('href__language-active');
        $(this).addClass('href__language-active');
    });

    // Закрытие модального окна "Связаться с нами"

    $(".exit_button").on("click",function () {
        modalHeight = $('.contact-us__modal').height();
        $("html").css("overflow-y","auto");
        let heightWindow = ($(window).height()/2) + modalHeight/2;
        //$('.contact-us__modal').animate({"transform":"translateY("+ heightWindow + "px)"},200,function () {
            $('.contact-us__modal').animate({"top":"100%"},250,function(){
                $('.contact-us__modal').css({"display":"none"});
            });
            $('.container-fluid__contact-us').animate({"opacity":"0"},200, function () {
                $('.container-fluid__contact-us').css({"display":"none"});
            });
        //});
    });
    let modalHeight = 0;

    // отправка данных на сервер, по клику на кнопку "Отравить заявку"
    function validation(...arg) {
        var req_rules = {
            phone: /[0-9]+/,
            email: /^[a-zA-Z0-9._\-]+@\w+-{0,1}\w+-{0,1}\w+.\w{2,5}$/
        };
        var valid = 0;
        arg.forEach(element => {
            var val = element.val(),
                name = element.attr('name');
            if(req_rules[name].test(val)) {
                element.removeClass('contact-us_invalid');
            }
            else {
                element.addClass('contact-us_invalid');
                valid++;
            }
        });
        if(valid == 0) {
            valid = 0;
            return true;
        } else {
            valid = 0;
            return false;
        }
    }
    $(".contact-us__contact-button").on("click",function () {
        let resp = " sasa";
        let nameInput = $(".contact-us__name");
        let phoneInput = $(".contact-us__phone-number");
        let emailInput = $(".contact-us__email");
        let messageInput = $(".contact-us__text");

        if(validation(phoneInput, emailInput) == true) {
            nameInput = nameInput.val();
            phoneInput = phoneInput.val();
            emailInput = emailInput.val();
            messageInput = messageInput.val();
            $.ajax({
                url: window.location.origin + '/feedback',
                type: "POST",
                data: {
                    name:nameInput,
                    phone:phoneInput,
                    email:emailInput,
                    text:messageInput
                },
                success: function (data) {
                    console.log(data);
                },
                error: function (msg) {
                    console.log(msg + 'Ошибка');
                },
                beforeSend: function () {
                    $('.hide-block__contact-us').css({'display':"flex" }) ;
                    $('.hide-block__contact-us').animate({'opacity':"1"},200);
                    modalHeight = $(".contact-us__modal").height();
                },
                complete: function() {
                    $('.hide-block__contact-us').animate({'opacity':"0"},200, function () {
                        $('.hide-block__contact-us').css({'display':"none"}) ;
                        $(".contact-us__form").css({'display':"none"});
                        $(".contact-us__modal").height(modalHeight);
                        $(".contact-us__modal").css({"padding-right":"86px"});
                        $(".success-block_contact-us").css({'display':"flex"});
                        $(".success-block_contact-us").animate({'opacity':"1"},300);
                    });
                    let heightCosmo =  $('.photo-block__img').height();
                    $('.photo-block__img').animate({"bottom":0 + "px)"},150,function () {
                        $('.photo-block__img').css({"display":"none"});
                        $(".photo-block__img-ok").css({"display":"block"})
                        $(".photo-block__img-ok").animate({"top":-heightCosmo + "px"},150);
                    });
                }
            });
        }
    });


    $(window).on("scroll",function () {
        let currentScroll = $(window).scrollTop();

        if(currentScroll > 600){
            $(".publications_arrow").css({
                top: 800 + 'px',
                opacity: 1
            });
        }else{
            $(".publications_arrow").css({
                top: 1000 + 'px',
                opacity: 0
            });
        }

    });


    $(".tab-item").not(":first").hide();
    $(".tabs-wrapper .tab").click(function () {
        $(".tabs-wrapper .tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
        $(".tab-item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active-tab");
    $('.owl-carousel__cases').owlCarousel({
        items: 1,
        dots:true,
        dotsEach: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        slideTransition: 'easy-in-out',
    });
    let tabsWrapperWidth = $(".tabs-wrapper").width();

    let tabsWidth = function () {
        let count = 0;
        $(".tab").each(function () {
            count += $(this).width() + 50;
        });
        return count;
    };
    // console.log("WIDTH TAB BLOCK = " + tabsWidth());
    // console.log("WIDTH TAB-OVERFLOW HIDDEN BLOCK = " + tabsWrapperWidth);
    $(".tabs").width(tabsWidth());

    let transformX = Number($(".tabs").css("transform").match(/matrix\(\d+, ?\d+, ?\d+, ?\d+, ?(\d+)/)[1]);

    $(".arrow").on("click",function () {
        if((transformX - tabsWrapperWidth - 30) < (-tabsWidth())){
            $(".tabs").css({ "transform" : "translateX(" + 0 +  "px)"});
            transformX = 0;
        }else{
            transformX += -tabsWrapperWidth - 30;
            $(".tabs").css({ "transform" : "translateX(" + transformX +  "px)"});
        }
    });
    $(".publications_arrow").on("click",function () {
        // console.log("cliclclasc");
        $('html').animate({ scrollTop: 0 }, 400);
    });

});

let clickLetsGo = function() {
    $(".scroll-down").on("click",function () {
        let offset = $("#rocket").offset().top - 10;
        $("body,html").animate({ "scrollTop" :  offset },600);
    });
};

function setEqualHeight(cards) {
    let tallest = 0;
    cards.each(function(i, e) {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    cards.each(function(i, e) {
        $(this).height(tallest);
    }
)}
$(window).on('load resize', function() {
    setEqualHeight($('.publication-item'));
});

// $(window).on("resize",function () {
//     let windowWidth = $(window).width()/2;
//     let tabContainerWidth = $(".tab-item-main").width();
//     let left = windowWidth - tabContainerWidth/2;
//     console.log(left + " left" + "  windowWidth " + windowWidth);
//     $(".tab-content-main").css({"left": "calc(50% - " + tabContainerWidth/2 + "px)"});
// });

// let tabItem_width = $(".tab-item-main").eq(0).width();
// let tabContainer_width = 0;
// let transformLeft_tab = 0;
// let count = 0;

// $(".tab-item-main").each(function () {
//     tabContainer_width += $(this).width();
// });

// $(".arrow-main").on("click",function () {
//     transformLeft_tab  = $(".tab-content-main").position().left;
//     count = transformLeft_tab - tabItem_width - 64;
//     if( count < -tabContainer_width - 64){
//         $(".tab-content-main").animate({"left":"0px"},300);
//         $(".active-tab").removeClass("active-tab");
//         $(".tab").eq(0).addClass("active-tab");
//         $(".tab-item-main__active").removeClass("tab-item-main__active");
//         $(".tab-item-main").eq(0).addClass("tab-item-main__active");
//         count = 0;
//         console.log("TABITEM__WIDTH = "+ tabItem_width +"    КОНЕЧНЫЙ КАУНТ : "+ count);
//     }else{
//         console.log("TABITEM__WIDTH = "+ tabItem_width +"    КОНЕЧНЫЙ КАУНТ : "+ count);
//         $(".active-tab").removeClass("active-tab").next().addClass("active-tab");
//         $(".tab-item-main__active").removeClass("tab-item-main__active").next().addClass("tab-item-main__active");
//         $(".tab-content-main").animate({
//             "left": "" + count + "px"
//         }, 300);
//     }
// });

// $(".tab-main").on("click",function () {
//     let id =  $(this).attr("id");
//     let tabContainerWidth = $(".tab-item-main").width()/2;
//     let count = $(window).width() - tabContainerWidth;
//     let translateX = -(id*(tabItem_width ) + 64*id);
//     if (id == 0){
//         translateX = 0;
//     }
//     if($(window).width() <= 922){
//         let windowWidth = $(window).width();
//         translateX = -id*windowWidth + 64*id + (tabContainerWidth - 64)*id;
//         if( id == 0){
//             translateX = 128;
//         }
//         $(".tab-item-main__active").removeClass("tab-item-main__active");
//         $(".tab-item-main").eq(id).addClass("tab-item-main__active");
//         $(".tab-content-main").animate({"left":translateX},300);
//     } else {
//         $(".tab-item-main__active").removeClass("tab-item-main__active");
//         $(".tab-item-main").eq(id).addClass("tab-item-main__active");
//         $(".tab-content-main").animate({"left":""+ translateX +"px"},300);
//     }
// });

