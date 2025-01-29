
var owl = $('.home-slider');
  owl.owlCarousel({
	loop:true,
    margin:0,
    nav:true,
	dots:false,
	slideBy: 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:false,
    responsive:{
        0:{items:1},
        1200:{items:1}
  }
});

var owl = $('.logo-slider');
owl.owlCarousel({
	loop:true,
    margin:0,
    nav:true,
	dots:false,
	slideBy: 1,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:false,
    responsive:{
        0:{items:2},
	    	768:{items:3},
        1200:{items:4}
  }
});