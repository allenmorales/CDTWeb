$(function() {
    $("#includedMenu").load("../Pages/menu.html");
    $("#includedMenu-EN").load("../Pages/menu-EN.html");
    $("#includedMenuBI").load("../Pages/menuBI.html");
    $("#includedMenuBI-EN").load("../Pages/menuBI-EN.html");
    $("#includedMenuPOS").load("../Pages/menuPOS.html");
    $("#includedMenuPOS-EN").load("../Pages/menuPOS-EN.html");
    $("#includedMenuGIS").load("../Pages/menuGIS.html");
    $("#includedMenuGIS-EN").load("../Pages/menuGIS-EN.html");
});


(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            $(".navbar").addClass("navbar-top-fade");
        } else {
            $(".navbar").removeClass("navbar-top-fade");
        }
        if (scroll >= 700) {
            $(".lazy-1").addClass("lazy-1-1");
        } else {
            $(".lazy-1").removeClass("lazy-1-1");
        }
        if (scroll >= 900) {
            $(".lazy-2").addClass("lazy-2-1");
        } else {
            $(".lazy-2").removeClass("lazy-2-1");
        }

    });
})(jQuery);



window.addEventListener('load', function() {
    var allimages = document.getElementsByTagName('img');
    for (var i = 0; i < allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)


$('.carousel').carousel({
    interval: 5000
})