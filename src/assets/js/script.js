$(function () {
    // if (localStorage.cookie) {
    //     $('.main__cookie').css('display','none');
    // }
	Ajax.csrf();
	Images.fancy();

	$('.carousel-for').owlCarousel({
		loop:true,
		margin: 60,
		smartSpeed: 700,
		nav: false,
		lazyLoad : true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:4
	        }
	    }
	});
	$('.carousel-partners').owlCarousel({
		margin: 60,
		smartSpeed: 700,
		nav: false,
		lazyLoad : true,
		dots: false,
		responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:4
	        }
	    }
	});

	$('.carousel-thanks').owlCarousel({
		smartSpeed: 700,
		nav: false,
		lazyLoad : true,
		dots: true,
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        }
	    }
	});

	
	//SET EQUAL HEIGHT
	$partnersH = $('.carousel-partners').height();
	$forH = $('.carousel-for').height();
	if ($forH > $partnersH) {
		$('.carousel-partners').height($forH);
	} else {
		$('.carousel-for').height($partnersH);
	}

    var countPublic = 3;
    var page = 1;
    var lengthPublications = $('.publication__item').length;
    var publics = $('.publication__item');
    showPublication();
	function showPublication() {
        for(var j = 0; j < publics.length; j++) {
            publics[j].style.display = 'none'
        }
        for(var i = 0; i < page * countPublic; i++) {
            if (publics[i]) {
                publics[i].style.display = 'block';
            }
        }
    }
	if (page * countPublic >= lengthPublications) {
        $('.js-show-publications').css('display','none');
    }
	$('.js-show-publications').on('click', function(event) {
        event.preventDefault();
        page += 1;
        showPublication();
        if (page * countPublic >= lengthPublications) {
            $('.js-show-publications').css('display','none');
        }
    });

	function validation(...arg) {
        var req_rules = {
            phone: /^\d+$/,
            email: /^[a-zA-Z0-9._\-]+@\w+-{0,1}\w+-{0,1}\w+.\w{2,5}$/
        };
        var valid = 0;
        arg.forEach(element => {
            console.log(element);
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
        if (valid == 0) {
            valid = 0;
            return true;
        } else {
            valid = 0;
            return false;
        }
    }
    $(".contact-us__contact-button-article").on("click",function () {
        let nameInput = $(".article-form-name");
        let phoneInput = $(".article-form-phone");
        let emailInput = $(".article-form-email");
        let messageInput = $(".article-form-text");
        if (validation(phoneInput, emailInput) == true) {
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
					$(".contact-us__contact-button-article").attr('disabled', true);
					$(".contact-us__contact-button-article").addClass("success-block_contact-us-disable");
                },
                complete: function() {
                    var width = $(document).width();
                    
                    $('.contact-us__photo-block').css({'display':"flex" }) ;
                    $('.container-fluid__contact-us').css({'display':"flex" }) ;
                    $('.container-fluid__contact-us').animate({'opacity':"1"},200);
                    $('.hide-block__contact-us').animate({'opacity':"0"},200, function () {
                        $('.hide-block__contact-us').css({'display':"none"}) ;
                        $(".contact-us__form").css({'display':"none"});
                        $(".contact-us__modal").css({'height':"471px"});
                        $(".contact-us__modal").css({"padding-right":"86px"});
                        $(".contact-us__modal").css({"display":"flex"});
                        $(".contact-us__modal").css({"top":"0%"});
                        $(".success-block_contact-us").css({'display':"flex"});
                        $(".success-block_contact-us").animate({'opacity':"1"},300);
                    });
                    console.log(width);
                    if (width > 720) {
                        $('.photo-block__img').animate({"bottom":0 + "px)"},150,function () {
                            $('.photo-block__img').css({"display":"none"});
                            $(".photo-block__img-ok").css({"display":"block"})
                            $(".photo-block__img-ok").animate({"top":-355 + "px"},150);
                        });
                    } else {
                        $('.photo-block__img').css({"display":"none"});
                    }
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
                }
            });
        }
    });
    $('.cookie__button').on("click", function(e) {
        //localStorage.cookie = true;
        $('.main__cookie').css('display','none');
        $.ajax({
            url: window.location.origin + '/cookie-save',
            type: "GET",
        });
    });
});
