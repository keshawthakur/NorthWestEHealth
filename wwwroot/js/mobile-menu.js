function setMobileMenu() {
    jQuery('.sub-item').remove();
    jQuery(".mobile-nav").css("display", "none");
    jQuery(".mobile-nav").addClass("mobile-navigation");
    jQuery(".mobile-nav").removeClass("menu");
    jQuery(".mobile-nav > ul").attr("id", "");
    jQuery(".menu-icon").css("display", "flex");
    jQuery(".mobile-nav ul li").each(function() {
        if (jQuery(this).children("ul").length > 0) {
            jQuery(this).addClass("parent-menu");
            jQuery(this).prepend("<div class='sub-item'></div>");
            jQuery(this).children("ul").addClass("sub-nav");
        }
    });
    jQuery(".sub-nav").css("display", "none");
    jQuery(".menu-icon").unbind("click");
    jQuery(".menu-icon").click(function() {
        jQuery("body").toggleClass('nav-body');
        jQuery(".mobile-nav").toggleClass('nav-open')(function() {
            if (!jQuery(this).is(":visible")) {
                jQuery(this).find(".sub-nav").each(function() {
                    jQuery(this).css("display", "none");
                    jQuery(this).parent().removeClass("parent-menu-active");
                });
            }
        });
    });
    jQuery(".sub-item").unbind("click");
    jQuery(".sub-item").click(function(e) {
        jQuery(this).parent().children(".sub-nav").slideToggle(300, function() {
            if (jQuery(this).is(":visible")) {
                jQuery(this).parent().parent().children(".parent-menu-active").find(".sub-nav").each(function() {
                    jQuery(this).slideUp(300);
                    jQuery(this).css("display", "none");
                    jQuery(this).parent().removeClass("parent-menu-active");
                });
                jQuery(this).parent().parent().children(".parent-menu-active").removeClass("parent-menu-active");
                jQuery(this).parent().addClass("parent-menu-active");
            } else {
                jQuery(this).parent().removeClass("parent-menu-active");
                jQuery(this).find(".sub-nav").each(function() {
                    jQuery(this).css("display", "none");
                    jQuery(this).parent().removeClass("parent-menu-active");
                });
            }
        });
        e.stopPropagation();
    });
}

function setDesktopMenu() {
    jQuery(".mobile-nav ul li").find(".sub-nav").each(function() {
        jQuery(this).css("display", "none");
        jQuery(this).parent().removeClass("parent-menu-active");
    });
    jQuery(".mobile-nav").addClass("menu");
    jQuery(".mobile-nav").css("display", "flex");
    jQuery(".mobile-nav").removeClass("mobile-navigation");
    jQuery(".mobile-nav>ul").attr("id", "nav");
    jQuery(".menu-icon").css("display", "none");
}

jQuery(document).ready(function() {
    if (jQuery(window).width() < 768) {
        setMobileMenu();
    } else {
        setDesktopMenu();
    }
});

jQuery(window).resize(function() {
    if (jQuery(window).width() < 768) {
        setMobileMenu();
    } else {
        setDesktopMenu();
    }
});