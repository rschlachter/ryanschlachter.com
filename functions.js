var fired = 0;
$(window).scroll(function () {
    var wScroll = $(window).scrollTop();
    if ($('#google-content').offset().top - $(window).height() / 1.15 < wScroll) {
        if (fired == 0) {
            startGoogleBar();
            fired = 1;
        }

    }
});


function startGoogleBar() {
    var elem = document.getElementById("google-bar");
    var width = 10;
    var id = setInterval(frame, 20);

    function frame() {
        if (width >= 99.9) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("bar-label").innerHTML = width * 1 + '%';
        }
    }
};

// Add Open Class to Header

$(document).ready(function () {
    $('.ion-navicon').click(function () {
        $(this).toggleClass('open');
        $('.header').toggleClass('open');
        $('.ion-ios-pulse').toggleClass('open');
    })
});

$(document).ready(function () {
    $('.mobile-href').click(function () {
        $('.header').toggleClass('open');
        $('.ion-ios-pulse').toggleClass('open');
        $('.ion-navicon').toggleClass('open');
    })
});


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 200
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
