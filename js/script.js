$(document).ready(function(){
     $('.bxslider').bxSlider({
      auto: true,
      autoControls: true
     });

      $('#MenuIcon').click(function(){
         if($('#PrimaryNavigation').hasClass('switch')){
            $('#PrimaryNavigation').slideDown(400);
            $('#PrimaryNavigation').removeClass('switch');
         }else {
          $('#PrimaryNavigation').slideUp();
          $('#PrimaryNavigation').addClass('switch');

         }
      });
      $(window).scroll(function(){
        var window_scroll = $(window).scrollTop();
        // $('p').text(window_scroll);
        if(window_scroll > 200){
            $('#PageTop').fadeIn();
        }else{
            $('#PageTop').fadeOut();
        }
      });

      $('#PageTop>a').click(function(){
        $('body,html').animate({
          scrollTop:0,
        },1000);
      });

      $('#NewsBtn').click(function(){
        $('body,html').animate({
          scrollTop:$('#News').offset().top
        },1000);
      });



      $('#ProductBtn').click(function(){
        $('body,html').animate({
          scrollTop:$('#Product').offset().top
        },1000);
      });
});
