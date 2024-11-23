$(".menu-element__link").click(function() {
    const thisElement = $(this);

    if (thisElement.hasClass('active')) {
        return;
    }

    const linkHref = thisElement.attr("href");
    const hrefElement = $(linkHref);

    const paddingTop = parseInt(hrefElement.css("padding-top"));
    const menuHeight = $(".header-top").height();

    $([document.documentElement, document.body]).animate({
        scrollTop: hrefElement.offset().top - paddingTop - menuHeight
    }, 1500);

    $(".menu-element__link.active").removeClass('active');
    thisElement.addClass('active');
});

/*Slider*/

const swiper = new Swiper('.achievements-list', {
    loop: true,
    
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'slide',

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'slider__controls-element',
      bulletActiveClass: 'slider__controls-element-active',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        Delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
    }
});

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

/*Languge switch*/

$('[lang="text-ru"]').hide();

$("#lang").on('click', function() {
  $('[lang="text-ru"]').toggle();
  $('[lang="text-en"]').toggle();
});

/*blur activation */

let down = document.getElementById('GFG_DOWN');
function GFG_Fun() {
    document.getElementsByClassName('form-result')[0].
      style.visibility = 'visible';
      document.getElementById("contact-me-wrapper").classList.add("blur");
}
