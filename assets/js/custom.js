let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1500,
    endDelay: 500 });

  tl.add({
    targets: '.loading-container svg',
    opacity: [0, 1],
    easing: 'easeInOutSine',
    duration: 500,
    },'0')
    .add({
    targets: '.loading-container svg .circle-ic-ld path',
    translateX: ['-26%', '0%'],
    opacity: [0,1],
    easing: 'easeInOutCubic',
    delay: function(el, i) { return i * 500 },
    // easing: 'easeInOutSine',
    duration: 500,
    },'-=500')
    .add({
      targets: '.loading-container svg .left-ic-ld .__1',
      
      rotate: [-30,0],
      opacity: [0,1],
      easing: 'easeInOutCubic',
      // delay: function(el, i) { return i * 500 },
      // easing: 'easeInOutSine',
      duration: 800,
      },'-=800')
      .add({
        targets: '.loading-container svg .left-ic-ld .__2',
        
        rotate: [30,0],
        opacity: [0,1],
        easing: 'easeInOutCubic',
        // delay: function(el, i) { return i * 500 },
        // easing: 'easeInOutSine',
        duration: 800,
        },'-=1300')
    // .add({
    // targets: '.loading-container svg .four-ic-ld path',
    // strokeDashoffset: [anime.setDashoffset, 0],
    // easing: 'easeInOutSine',
    // duration: 1500,
    // },'-=1500')
    //   .add({
    // targets: '.loading-container svg .four-ic-ld path',
    // strokeOpacity: [1, 0],
    // easing: 'easeInOutCubic',
    // duration: 800
    // },'-=300')
    // .add({
    // targets: '.loading-container svg .four-ic-ld path',
    // fillOpacity: [0, 1],
    // easing: 'easeInOutCubic',
    // duration: 1000
    // },'-=1650')
    

  let draw = anime.timeline({
          easing: 'easeOutExpo',
          duration: 1500,
          endDelay: 500 });
    draw.add({
      targets: '.loading-container svg .line-ic',
      // loop: true,
      // direction: 'alternate',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1200,
      delay: 1000
    })
    .add({
      targets: '.loading-container svg .text-ic-ld path',
      translateX: [-10,0],
      opacity: [0,1],
      easing: 'easeInOutCubic',
      delay: function(el, i) { return i * 70 },
      // easing: 'easeInOutSine',
      duration: 500,
    },'-=500')
    .add({
      targets: '.loading-container svg .four-ic-ld path',
      translateX: [10,0],
      opacity: [0,1],
      easing: 'easeInOutCubic',
      delay: function(el, i) { return i * 70 },
      // easing: 'easeInOutSine',
      duration: 500,
    },'-=1200')
  $(document).ready(function(){
    setTimeout(() => {
      $('.loading-container').fadeOut(1000);
      setTimeout(() => {
        $('#video-banner').trigger('play');
      }, 1000);
      
    }, 3200);

  });


  if ($(".swiper-box").length) {
		$(".swiper-box").each(function() {
			var $ttPortfolioSlider = $(this);
    
      // Init Swiper
			// =============
			var $ttPortfolioSliderSwiper = new Swiper ($ttPortfolioSlider.find(".swiper")[0], {
				// Parameters
				effect: "cube",
				speed: 600, // slider speed for smaller screens (when window width is 1024px or smaller)
			
				
				autoplay: {
            delay: 7000,
            disableOnInteraction: true
        },

				breakpoints: {
					
				},
				// Navigation arrows
				navigation: {
					nextEl: $ttPortfolioSlider.find(".swiper-button-next")[0],
					prevEl: $ttPortfolioSlider.find(".swiper-button-prev")[0],
				},

				// // Pagination
				// pagination: {
				// 	el: $ttPortfolioSlider.find(".tt-ps-nav-pagination")[0],
				// 	type: $dataPaginationType,
				// 	modifierClass: "tt-ps-nav-pagination-",
				// 	dynamicBullets: true,
				// 	dynamicMainBullets: 1,
				// 	clickable: true,
				// },
			});
    })
  }

  

  if ($(".swiper-cerificate-banner").length) {
		$(".swiper-cerificate-banner").each(function() {
			var $ttCertificateBanner = $(this);
    
      // Init Swiper
			// =============
			var $ttCertificateBannerSwiper = new Swiper ($ttCertificateBanner[0], {
				// Parameters
        // centeredSlidesBounds: true,
        // centeredSlides: true,
        // centerInsufficientSlides: true,
        slideToClickedSlide: true,
        grabCursor: true,
        slidesPerView: 1, 
				speed: 600, 
        spaceBetween: 0,
				autoplay: {
            delay: 7000,
            disableOnInteraction: true
        },
        pagination: {
          el: $ttCertificateBanner.find(".swiper-pagination")[0],
          clickable: true,
        },
				// Navigation arrows
				// navigation: {
				// 	nextEl: $ttCertificate.find(".swiper-button-next")[0],
				// 	prevEl: $ttCertificate.find(".swiper-button-prev")[0],
				// },

				// // Pagination
				// pagination: {
				// 	el: $ttPortfolioSlider.find(".swiper-pagination")[0],
				// 	clickable: true,
				// },
			});
    })
  }

  if ($(".swiper-certi").length) {
		$(".swiper-certi").each(function() {
			var $ttCertificate = $(this);
    
      // Init Swiper
			// =============
			var $ttCertificateSwiper = new Swiper ($ttCertificate[0], {
				// Parameters
				effect: "cards",
        // centeredSlidesBounds: true,
        // centeredSlides: true,
        // centerInsufficientSlides: true,
        slideToClickedSlide: true,
        cardsEffect: {
          perSlideOffset: 15,
          perSlideRotate: 5,
        },
        grabCursor: true,
        slidesPerView: 1, 
				speed: 600, 
        spaceBetween: 0,
				autoplay: {
            delay: 7000,
            disableOnInteraction: true
        },
        pagination: {
          el: $ttCertificate.find(".swiper-pagination")[0],
          clickable: true,
        },
				// Navigation arrows
				// navigation: {
				// 	nextEl: $ttCertificate.find(".swiper-button-next")[0],
				// 	prevEl: $ttCertificate.find(".swiper-button-prev")[0],
				// },

				// // Pagination
				// pagination: {
				// 	el: $ttPortfolioSlider.find(".swiper-pagination")[0],
				// 	clickable: true,
				// },
			});
    })
  }

  if ($(".swiper-certi-2").length) {
		$(".swiper-certi-2").each(function() {
			var $ttCertificate = $(this);
    
      // Init Swiper
			// =============
			var $ttCertificateSwiper = new Swiper ($ttCertificate[0], {
				// Parameters
				// effect: "cards",
        // centeredSlidesBounds: true,
        // centeredSlides: true,
        // centerInsufficientSlides: true,
        slideToClickedSlide: true,
        spaceBetween: 30,
        grabCursor: true,
        slidesPerView: 3,
        effect: 'coverflow',
        coverflowEffect: {
          rotate: 5,
          slideShadows: false,
        }, 
        
				speed: 600,
				autoplay: {
            delay: 7000,
            disableOnInteraction: true
        },
        pagination: {
          el: $ttCertificate.find(".swiper-pagination")[0],
          clickable: true,
        },
				// Navigation arrows
				// navigation: {
				// 	nextEl: $ttCertificate.find(".swiper-button-next")[0],
				// 	prevEl: $ttCertificate.find(".swiper-button-prev")[0],
				// },

				// // Pagination
				// pagination: {
				// 	el: $ttPortfolioSlider.find(".swiper-pagination")[0],
				// 	clickable: true,
				// },
			});
    })
  }

  if ($(".swiper-brand").length) {
		$(".swiper-brand").each(function() {
			var $ttPortfolioSlider = $(this);
    
      // Init Swiper
			// =============
			var $ttPortfolioSliderSwiper = new Swiper ($ttPortfolioSlider[0], {
				// Parameters
				effect: "slide",
        slidesPerView: 1, 
				speed: 600, 
        spaceBetween: 10,
				autoplay: {
            delay: 7000,
            disableOnInteraction: true
        },

				breakpoints: {
					// when window width is >= 320px
          320: {
            slidesPerView: 2,
           
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
           
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
           
          },
          992: {
            slidesPerView: 5, 
          },
          1200: {
            slidesPerView: 6, 
          }
				},
				// Navigation arrows
				navigation: {
					nextEl: $ttPortfolioSlider.find(".swiper-button-next")[0],
					prevEl: $ttPortfolioSlider.find(".swiper-button-prev")[0],
				},

				// // Pagination
				// pagination: {
				// 	el: $ttPortfolioSlider.find(".tt-ps-nav-pagination")[0],
				// 	type: $dataPaginationType,
				// 	modifierClass: "tt-ps-nav-pagination-",
				// 	dynamicBullets: true,
				// 	dynamicMainBullets: 1,
				// 	clickable: true,
				// },
			});
    })
  }

  $(document).ready(function() {
     var a = $('.main-header').height();
     $('.banner-subpage').css('margin-top', a )
  })


  var controller = new ScrollMagic.Controller();
  $('.js-text-parallax .fx-wrap').each(function (index, el) {
    var id = 'text-parallax-' + index;
    var $this = $(this);
    $this.attr('id', id);

    var offset = parseInt($this.attr('data-x'), 10) || 200;

    var tween = TweenMax.to('#' + id + ' .fx-target', 2, {
      x: offset
    });

    new ScrollMagic.Scene({
      triggerElement: '#' + id, triggerHook: 1,
      duration: window.innerHeight * 2
    }).setTween(tween)
    // .addIndicators()
    .addTo(controller);
  });
  $('.blog-item-box').each(function() {
      
    $('p', this).slideUp();
    $(this).on('mouseenter' , function() {
      $('p', this).slideDown();
     
    })
    $(this).on('mouseleave' , function() {
      $('p', this).slideUp();
    })
  })

 
  
  