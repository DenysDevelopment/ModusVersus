const menuListLinkDropDown = document.querySelector('.menu__list-link-drop-down');
const menuListSubMenu = document.querySelector('.menu__list-sub-menu');
const menuBurger = document.querySelector(".menu-burger");
const menuListBurger = document.querySelector(".menu-list-burger");


// header drop Down
menuListLinkDropDown.addEventListener('click',function(){
	menuListSubMenu.classList.toggle('active'),
	menuListLinkDropDown.classList.toggle('active');
})


// click menu burger 
menuBurger.addEventListener("click", function () {
	const body = document.querySelector('body')

	// animate burger
  this.classList.toggle("active");

  // open menu mobile
  menuListBurger.classList.toggle("active");

  // scroll lock body
  body.classList.toggle("lock");
});


// slider
$(document).ready(function(){
	// header slider
  $('.slider').slick({
  	autoplay:true,
  	dots:true,
  	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-double-left"></i></button>',
  	nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-double-right"></i></button>',
  });

  // clients slider
  $('.clients__slider').slick({
  		autoplay:true,
	  	slidesToShow: 6,
	  	prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		 responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 3,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 850,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	     {
	      breakpoint: 650,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	     {
	      breakpoint: 350,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	  ]
  });
});