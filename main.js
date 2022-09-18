(function ($) {
    $.fn.pageCrossFade = function (options) {
        var settings = $.extend({
            duration: 800,
            easing: 'swing',
            links: 'internal'
        }, options);  
  
        var fadePage = function ($link) {
            $('body').fadeOut(settings.duration, settings.easing, function () {
                window.location.href = $link;
            });
        };
  
        if (settings.links === 'all') {
            $('a').on('click', function (e) {
                e.preventDefault();
                var $link = $(this).attr('href');
                fadePage($link);
            });
        } else if (settings.links === 'internal') {
            $('a').on('click', function (e) {
                var a = new RegExp('/' + window.location.host + '/');
                if (a.test(this.href)) {
                    console.log("external link");
                    e.preventDefault();
                    var $link = $(this).attr('href');
                    fadePage($link);
                }
            });
        } else {
            $('a' + settings.links).on('click', function (e) {
                e.preventDefault();
                var $link = $(this).attr('href');
                fadePage($link);
            });
        }  
    };
}(jQuery));

// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");

//     for (var i = 0; i < reveals.length; i++) {
//         var windowHeight = window.innerHeight;
//         var elementTop = reveals[i].getBoundingClientRect().top;
//         var elementVisible = 150;

//         if (elementTop < windowHeight - elementVisible) {
//             reveals[i].classList.add("show");
//         } else {
//             reveals[i].classList.remove("show");
//         }
//     }
// }

// window.addEventListener("scroll", reveal);