
$(document).ready(function () {
   $('.education__slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 800,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
   $('.certificate__slider').slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 800,
      infinite: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});

