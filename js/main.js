$(document).ready(function(){


    
    var winHeight = $(window).height();
    $(window).on('resize', function(){
        winHeight = $(window).height();
    });
    
    
        $('#wrap section').on('mousewheel', function(e,d){
    
            if(d>0){ //휠을 올렸을 때
    
                var prv = $(this).prev().offset().top;
    
                $('html,body').stop().animate({
                    scrollTop : prv
                });
    
            }else if(d<0){ //휠을 내렸을 때
    
                var nxt = $(this).next().offset().top;
    
                $('html,body').stop().animate({
                    scrollTop : nxt
                });
    
            } // if
    
        }); //mousewheel function

        var moveRate = $('.rate1').attr('data-rate');
        console.log(moveRate);
        $('.bar1 .bar').stop().animate({
          'width':moveRate + '%',
        },2500);

        var moveRate = $('.rate1').attr('data-rate');
        console.log(moveRate);
        $('.bar1 .bar').stop().animate({
          'width':moveRate + '%',
        },2500);

        var moveRate = $('.rate2').attr('data-rate');
        console.log(moveRate);
        $('.bar2 .bar').stop().animate({
          'width':moveRate + '%',
        },2500);

        var moveRate = $('.rate3').attr('data-rate');
        console.log(moveRate);
        $('.bar3 .bar').stop().animate({
          'width':moveRate + '%',
        },2500);

        var moveRate = $('.rate4').attr('data-rate');
        console.log(moveRate);
        $('.bar4 .bar').stop().animate({
          'width':moveRate + '%',
        },2500);

        var moveRate = $('.rate5').attr('data-rate');
        console.log(moveRate);
        $('.bar5 .bar').stop().animate({
          'width':moveRate + '%',
        },2500);
    
    
        // var percent_number_step = $.animateNumber.numberStepFactories.append(' %')
        // $('.rate').animateNumber(
        //   {
        //     number: moveRate,
        //     numberStep: percent_number_step
        //   },2500
        // );


        $('.btn').on('click', function(){
            $('html,body').animate({
                'scrollTop':0 //0으로 스크롤탑하라는 애니메이트 속성 중 하나
            },500);
        });
    































        

}); //opening