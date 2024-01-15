let startPlan = function() {
    let planItems = $('.plan-item');
    let countPlanItems = planItems.length;
    let currentItem = 0;
    let showOnce = true;

    let ShowPlanItems = function() {
        if (currentItem < countPlanItems) {
            planItems.eq(currentItem).addClass('go');
            currentItem++;
            setTimeout(function() {
                ShowPlanItems();
            }, 700);
        }
    };

    let changeWhenScroll = function() {
        let currentScroll = $(window).scrollTop();
        let screenHeight = $(window).height();

        if (((currentScroll + screenHeight / 1.5) > $('#plan').position().top) && (showOnce === true)) {
            showOnce = false;
            ShowPlanItems();
        }
    };

    $(window).scroll(function() {
        changeWhenScroll();
    });
    changeWhenScroll();
}

startPlan();


var controller = new ScrollMagic.Controller();


if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {
    $(function() { // wait for document ready
        // build scene
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", triggerHook: "onLeave", duration: 450 })
            .setPin("#pin1")
            .addTo(controller);
    });

    $(function() { // wait for document ready
        // build scene
        var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", triggerHook: "onLeave", duration: 1050 })
            .setPin("#pin2")
            .addTo(controller);
    });
}



var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    autoWidth: true,
    autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed:3000,
    autoplayHoverPause: true
});

var x = 0,
    container = $('.container-2'),
    lists = $('lists'),
    items = container.find('li'),
    containerHeight = 0,
    numberVisible = 1,
    intervalSec = 1000;


if (!container.find('li:first').hasClass("first")) {
    container.find('li:first').addClass("first");
}

items.each(function() {
    if (x < numberVisible) {

        containerHeight = containerHeight + $(this).outerHeight();
        x++;
    }
});

container.css({ height: containerHeight, overflow: "hidden" });

function vertCycle() {
    var firstItem = container.find('li.first').html();

    container.append('<li>' + firstItem + '</li>');
    firstItem = '';

    var card1 = container.find('li#card1');
    var card2 = container.find('li#card2');
    var card3 = container.find('li#card3');

    $(window).scroll(function() {
        var scrollValue = $(window).scrollTop();
        var s = scrollValue;

        if (s <= 700) {
            card1.css({ 'margin-bottom': '0px', '-webkit-transition': 'margin-bottom 1s' });
        }

        if (s >= 700 && s <= 850) {
            card1.css({ 'margin-bottom': '-150px', '-webkit-transition': 'margin-bottom 2s' });
            card1.css({ 'margin-bottom': '-310px', '-webkit-transition': 'margin-bottom 1s' });
        }

        if (s >= 900 && s <= 1000) {

            card2.css({ 'margin-bottom': '-150px', '-webkit-transition': 'margin-bottom 2s' });
            card2.css({ 'margin-bottom': '-310px', '-webkit-transition': 'margin-bottom 1s' });
        }
        if (s <= 900) {

            card2.css({ 'margin-bottom': '0px', '-webkit-transition': 'margin-bottom 1s' });
        }



    });
    /*container.find('li.first').animate({ marginBottom: "-150px"}, 600);
    container.find('li.first').animate({ marginBottom: "-310px"}, 500,function(){  $(this).remove(); container.find('li:first').addClass("first"); });*/

}

if (intervalSec < 700) {
    intervalSec = 700;
}

var init = setInterval("vertCycle()", intervalSec);

container.hover(function() {
    clearInterval(init);
}, function() {
    init = setInterval("vertCycle()", intervalSec);
});


$(window).scroll(function() {
    //console.log($(window).scrollTop());
    var scrollValue = $(window).scrollTop();

    var s = scrollValue;

    var x = $("#1").offset().top - 400;
    //alert(x);

    if (/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        if (s >= 2000 && s <= 2150) {
            $('#1').css({ 'font-weight': 'bold', 'font-size': '25px', '-webkit-transition': 'font-size 1s' });
        } else {
            $('#1').css({ 'font-size': '20px', 'font-weight': '200' });
        }


        if (s >= 2150 && s <= 2300) {

            $('#2').css({ 'font-weight': 'bold', 'font-size': '25px', '-webkit-transition': 'font-size 1s' });
        } else {
            $('#2').css({ 'font-size': '20px', 'font-weight': '200' });
        }

        if (s >= 2300 && s <= 2450) {
            $('#3').css({ 'font-weight': 'bold', 'font-size': '25px', '-webkit-transition': 'font-size 1s' });
        } else {
            $('#3').css({ 'font-weight': 'bold', 'font-size': '20px', 'font-weight': '200' });
        }

        if (s >= 2450 && s <= 2600) {
            $('#4').css({ 'font-weight': 'bold', 'font-size': '25px', '-webkit-transition': 'font-size 1s' });
        } else {
            $('#4').css({ 'font-size': '20px', 'font-weight': '200' });
        }

        if (s >= 2600 && s <= 2750) {
            $('#5').css({ 'font-weight': 'bold', 'font-size': '25px', '-webkit-transition': 'font-size 1s' });
        } else {
            $('#5').css({ 'font-size': '20px', 'font-weight': '200' });
        }
    } else {



        if (s >= 2000 && s <= 2200) {

            $('#1').css({ 'font-weight': 'bold', 'font-size': '23px', '-webkit-transition': 'font-size 1s' });

        } else {
            $('#1').css({ 'font-size': '16px', 'font-weight': '200' });
        }


        if (s >= 2210 && s <= 2400) {

            $('#2').css({ 'font-weight': 'bold', 'font-size': '20px', '-webkit-transition': 'font-size 1s' });
        } else {
            $('#2').css({ 'font-size': '16px', 'font-weight': '200' });
        }

        if (s >= 2410 && s <= 2600) {

            $('#3').css({ 'font-weight': 'bold', 'font-size': '20px', '-webkit-transition': 'font-size 1s' });

        } else {
            $('#3').css({ 'font-weight': 'bold', 'font-size': '16px', 'font-weight': '200' });
        }

        if (s >= 2610 && s <= 2800) {

            $('#4').css({ 'font-weight': 'bold', 'font-size': '20px', '-webkit-transition': 'font-size 1s' });
        } else {
            $('#4').css({ 'font-size': '16px', 'font-weight': '200' });
        }

        if (s >= 2810 && s <= 3000) {


            $('#5').css({ 'font-weight': 'bold', 'font-size': '18px', '-webkit-transition': 'font-size 1s' });
        } else {
            $('#5').css({ 'font-size': '16px', 'font-weight': '200' });
        }


    }



    /*if(s > 1255){
      $('#1').animate({fontSize: "20px"},200);
    }*/
});

var y = 0,
    img = $('.images'),
    values = img.find('li'),
    imgHeight = 25,
    nVisible = 1,
    intervalSec2 = 0;

if (!img.find('li:first').hasClass("first")) {
    img.find('li:first').addClass("first");
}

values.each(function() {
    if (y < nVisible) {
        imgHeight = imgHeight + $(this).outerHeight();
        y++;
    }
});



img.css({ height: imgHeight, overflow: "hidden" });

function vertCycles() {
    var fItem = img.find('li.first').html();

    img.append('<li>' + fItem + '</li>');
    fItem = '';
    var img1 = img.find('li#11');
    var img2 = img.find('li#12');
    var img3 = img.find('li#13');
    var img4 = img.find('li#14');

    $(window).scroll(function() {
        //console.log($(window).scrollTop());
        var scrollValue = $(window).scrollTop();

        var s = Math.round(scrollValue);


        var x = $("#1").offset().top - 400;
        //alert(x);
        if (s >= 2210 && s <= 2400) {
            img1.css({ 'margin-top': '-225px', '-webkit-transition': 'margin-top 1s' });
        }
        if (s <= 2210) {
            img1.css({ 'margin-top': '0px', '-webkit-transition': 'margin-top 1s' });
        }


        if (s >= 2410 && s <= 2600) {
            img2.css({ 'margin-top': '-255px', '-webkit-transition': 'margin-top 1s' });
        }
        if (s <= 2410) {
            img2.css({ 'margin-top': '0px', '-webkit-transition': 'margin-top 1s' });
        }

        if (s >= 2610 && s <= 2800) {
            img3.css({ 'margin-top': '-250px', '-webkit-transition': 'margin-top 1s' });
        }
        if (s <= 2610) {
            img3.css({ 'margin-top': '0px', '-webkit-transition': 'margin-top 1s' });
        }

        if (s >= 2810 && s <= 3000) {
            img4.css({ 'margin-top': '-250px', '-webkit-transition': 'margin-top 1s' });
        }
        if (s <= 2810) {
            img4.css({ 'margin-top': '0px', '-webkit-transition': 'margin-top 1s' });
        }




    });
}

if (intervalSec2 < 700) {
    intervalSec2 = 700;
}

var init = setInterval("vertCycles()", intervalSec2);

img.hover(function() {
    clearInterval(init);
}, function() {
    init = setInterval("vertCycles()", intervalSec2);
});
