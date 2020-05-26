//Site header navbar script
$(window).on('scroll', function() {
    if ($(window).scrollTop()) {
        $('.site-header').addClass('black');
    } else {
        $('.site-header').removeClass('black');
    }
});

//Site header anchor tag script
$(document).on('click', 'ul li', function() {
    $(this).addClass('active').siblings().removeClass('active')
})

$(document).ready(function() {
    var window_box = $(window);
    navbar_scroll = $(".navbar-collapse ul li a");
    navbar_scroll.on("click", function() {
        $(".navbar-toggle:visible").click();
    });
    // Skill Bar Script
    // ##### window on refresh #####
    var progress_bar = $(".bar-inner"),
        skills_top = $(".skill_area").offset().top - 200,
        window_top = window_box.scrollTop();
    if (window_top >= skills_top) {
        progress_bar.each(function() {
            var data_percent = $(this).attr("data-percent");
            $(this).css("width", data_percent);
        });
    }
    // ##### window on scroll #####
    window_box.on("scroll", function() {
        var skills_top = $(".skill_area").offset().top - 200,
            window_top = window_box.scrollTop();
        if (window_top >= skills_top) {
            progress_bar.each(function() {
                var data_percent = $(this).attr("data-percent");
                $(this).css("width", data_percent);
            });
        }
    });
    var scroll_up = $(".scrollup");
    var html_body = $("html, body");
    // Back to top script
    window_box.on("scroll", function() {
        if ($(this).scrollTop() > 100) {
            scroll_up.fadeIn();
        } else {
            scroll_up.fadeOut();
        }
    });
    scroll_up.on("click", function() {
        html_body.animate({
                scrollTop: 0,
            },
            600
        );
        return false;
    });


})