$(document).ready(function(){
	$("a").on('click', function(e) {
		if (this.hash !== "") {
			e.preventDefault();
			var menuLink = this.hash;
	  		$('html, body').animate({
			  scrollTop: $(menuLink).offset().top - 150
			}, 800)
			$('.close-menu').trigger('click');
		  } 
	})
    $('.banner-slider').slick({
        arrows: false,
        dots:false,
        fade: true
    });
    $('.meet-slider').slick({
			dots: true,
			infinite: true,
			// autoplay:true,
			autoplaySpeed:1500,
			arrows: true, // Display arrows
			prevArrow: '<button type="button" class="slick-prev btn-arrow"></button>',
			nextArrow: '<button type="button" class="slick-next btn-arrow"></button>',
		
			slidesToShow: 4,
			slidesToScroll: 3,
			responsive: [
			  {
				breakpoint: 1024,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  dots: true,
				  infinite: true,
			
				}
			  },
			  {
				breakpoint: 767,
				settings: {
				  slidesToShow: 2,
				  dots: true,
				  slidesToScroll: 1
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 2
				}
			  }
			  // You can unslick at a given breakpoint now by adding:
			  // settings: "unslick"
			  // instead of a settings object
			]
		  });
  // var num = 40;
  // $(window).bind('scroll', function () {
  //     if ($(window).scrollTop() >= num) {
  //         $('header').addClass('fixed-top');
  //     } else {
  //         $('header').removeClass('fixed-top');
  //     }
  // });
  $(window).scroll(function(){
	$(".scroll-top").hide()
	if ($(window).scrollTop() > 200) {
	  $(".scroll-top").show()
	}
  })

  $(".scroll-top a").click(function(e){
	e.preventDefault();
	jQuery('html,body').animate({scrollTop:0},500);
  });
});




var playbutton = document.getElementById("videoPlay_btn");
	playbutton.addEventListener("click", playPause);
	abtVideo = document.getElementById("about_video");
	function playPause() {
		if (abtVideo.paused) {
			abtVideo.play();
			abtVideo.setAttribute('controls', 'true');
			$('#videoPlay_btn').fadeOut();
			playbutton.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
			}
		else  {
			abtVideo.pause(); 
			$('#videoPlay_btn').css("display", "block");
			abtVideo.removeAttribute('controls', 'true');
			playbutton.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
			}
	} 

document.getElementById('copyright-year').innerHTML = new Date().getFullYear();
