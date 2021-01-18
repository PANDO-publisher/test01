$(function (){
   //header
   $('.head nav ul li a').removeClass('active');
   $('.head nav ul li a').on('click', function(e){
      e.preventDefault();
      location.href = e.target.getAttribute('href');

      $('.head nav ul li a').removeClass('active');
      $(this).addClass('active');
   });

   //footer
   $('.footer-right p ').removeClass('active');
   $('.footer-right p ').on('click', function(){
      $('.footer-right p ').addClass('active');
      $('.footer-right p ').removeClass('active');
      $(this).addClass('active');
   });

    //Top버튼
   $('.btn_top').hide();
   //처음엔 숨쟈~
   $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
         $('.btn_top').fadeIn();
      } else {
         $('.btn_top').fadeOut();
      }
   });
   $('.btn_top').on('click', function () {
      $('html, body').stop().animate({
         scrollTop: 0
      }, 1000);
   });
});