/**
 * Themespride Custom JS
 *
 * @package Themespride
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */

/* Mobile responsive Menu*/
var menu_width="";
jQuery(function($){
  menu_width=parseInt(jQuery("#menu-width").text().trim());
  /* Mobile responsive Menu*/
  document.getElementById("open_nav").addEventListener("click", open);
    function open() {
      document.getElementById("sidebar1").style.width = menu_width + "px";
      document.getElementById("sidebar1").style.display = "block";
      jQuery("#sidebar1").addClass("wow fadeInRight animated");
  }
  document.getElementById("close_nav").addEventListener("click", close);
    function close() {
      document.getElementById("sidebar1").style.width = "0";
      document.getElementById("sidebar1").style.display = "none";
  }
});

jQuery(function($){

    $(window).scroll(function(){
      var sticky = $('.sticky-header'),
      scroll = $(window).scrollTop();

      if (scroll >= 100) sticky.addClass('fixed-header');
      else sticky.removeClass('fixed-header');
    });

});

// --------preloader----------

var interval=null;
function show_loading_box()
{
  jQuery(".spinner-loading-box").css("display","none");
  clearInterval(interval);
}
jQuery('document').ready(function(){   

  interval = setInterval(show_loading_box,1000);  

});

function rtl_direction(){
  if (jQuery('body').hasClass("rtl")) {
     return true;
  } else {
     return false;
  }
}

jQuery('document').ready(function(){

  //jQuery(".mphb_sc_search-submit-button-wrapper input").prop("value", "&#xf043;");
  jQuery(".search_date_wrapper_date_from").prepend('<label class="titlefield" for="date_from">Check in</label>');
  jQuery(".search_date_wrapper_date_to").prepend('<label class="titlefield" for="date_to">Check out</label>');
  jQuery(".search_guests_field").prepend('<label class="titlefield" for="date_to">Guest</label>');

  var owl = jQuery('#slider .owl-carousel');
    owl.owlCarousel({
    margin: 0,
    stagePadding: 0,
    items: 1,
    singleItem:true,
    nav: jQuery("#slider").data('nav'),
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: parseInt(jQuery("#slider").data('speed')),
    loop: jQuery("#slider").data('loops'),
    dots:jQuery("#slider").data('dots'),
    autoplayHoverPause:true,
    rtl:rtl_direction(),
    navContainer: '.custom-slider-nav',
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 1
      },
      1024: {
        items: 1
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });

  var owl = jQuery('#amenities .owl-carousel');
    owl.owlCarousel({
    margin: 20,
    nav: jQuery("#amenities").data('nav'),
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: parseInt(jQuery("#amenities").data('speed')),
    loop: jQuery("#amenities").data('loops'),
    dots:jQuery("#amenities").data('dots'),
    autoplayHoverPause:true,
    navContainer: '.custom-amenities-nav',
    rtl:rtl_direction(),
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3,
      },
      900: {
        items: 3,
      },
      1024: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });

  var owl = jQuery('#records .owl-carousel');
    owl.owlCarousel({
    margin: 20,
    nav: jQuery("#records").data('nav'),
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: parseInt(jQuery("#records").data('speed')),
    loop: jQuery("#records").data('loops'),
    dots:jQuery("#records").data('dots'),
    autoplayHoverPause:true,
    rtl:rtl_direction(),
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3,
      },
      900: {
        items: 4,
      },
      1024: {
        items: 5
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });

  var owl = jQuery('#pricing-plan .owl-carousel');
    owl.owlCarousel({
    margin: 20,
    nav: jQuery("#pricing-plan").data('nav'),
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: parseInt(jQuery("#pricing-plan").data('speed')),
    loop: jQuery("#pricing-plan").data('loops'),
    dots:jQuery("#pricing-plan").data('dots'),
    autoplayHoverPause:true,
    rtl:rtl_direction(),
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3,
      },
      900: {
        items: 3,
      },
      1024: {
        items: 3
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });

  var owl = jQuery('#team .owl-carousel');
    owl.owlCarousel({
    margin: 20,
    nav: jQuery("#team").data('nav'),
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: parseInt(jQuery("#team").data('speed')),
    loop: jQuery("#team").data('loops'),
    dots:jQuery("#team").data('dots'),
    autoplayHoverPause:true,
    rtl:rtl_direction(),
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 3,
      },
      900: {
        items: 3,
      },
      1024: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });

  var owl = jQuery('#latest-news .owl-carousel');
    owl.owlCarousel({
    margin: 20,
    nav: jQuery("#latest-news").data('nav'),
    autoplay : true,
    lazyLoad: true,
    autoplayTimeout: parseInt(jQuery("#latest-news").data('speed')),
    loop: jQuery("#latest-news").data('loops'),
    dots:jQuery("#latest-news").data('dots'),
    autoplayHoverPause:true,
    rtl:rtl_direction(),
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 2
      },
      1024: {
        items: 3
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });

  
   //Testimonials
  var owl = jQuery('#testimonials .owl-carousel');
    owl.owlCarousel({
    margin:15,
    nav: jQuery("#testimonials").data('nav'),
    autoplay : true,
    autoplayTimeout: parseInt(jQuery("#testimonials").data('speed')),
    loop: jQuery("#testimonials").data('loops'),
    dots:jQuery("#testimonials").data('dots'),
    autoplayHoverPause:true,
    rtl:rtl_direction(),
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      900: {
        items: 2
      },
      1024: {
        items: 2
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });

  jQuery("#amenities .amenities-block").mouseover(function () {
  jQuery(this).find("img").attr('src', jQuery(this).find("img").data("hover"));
  }).mouseout(function () {
    jQuery(this).find("img").attr('src', jQuery(this).find("img").data("src"));
  });

  new WOW().init(); 

});

/* Counter */
jQuery(document).ready(function(){

  // Back to top
  jQuery(document).ready(function () {
    jQuery(window).scroll(function () {
      if (jQuery(this).scrollTop() > 0) {
        jQuery('.scrollup').fadeIn();
      } else {
        jQuery('.scrollup').fadeOut();
      }
    });
    jQuery('.scrollup').click(function () {
      jQuery("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  });

});

// ------------ Sticky Navbar -------------------

var stickyon=jQuery('#sticky-onoff').text().trim();
var a1=stickyon.length;
var navbar = document.getElementById("site-sticky-menu");
window.onscroll = function() {
  if(a1==3)
  {
    if(navbar!=null)
    {
      myScrollNav();
    }
  }
}

if(navbar!=null)
{
  var sticky = jQuery( navbar ).offset().top;
}
function myScrollNav() {
  if (window.pageYOffset > sticky) {
    //alert(window.pageYOffset);
    navbar.classList.add("sticky");
    navbar.classList.add("stickynavbar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("stickynavbar");
  }
}

jQuery(function () {
    jQuery('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        jQuery('#search').addClass('open');
        jQuery('#search > form > input[type="search"]').focus();
    });
    
    jQuery('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            jQuery(this).removeClass('open');
        }
    });
});

// AOS.init();
jQuery(document).ready(function() {
  AOS.init({
    mirror: false,
    once: true,
    disable: function () {
        var maxWidth = 1024;
        return window.innerWidth < maxWidth;
    },
  });

  var counters = jQuery("#records .count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 0);
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }

});