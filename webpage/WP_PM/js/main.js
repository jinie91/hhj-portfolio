$(document).ready(function(){


    
var winHeight = $(window).height();
$(window).on('resize', function(){
    winHeight = $(window).height();
});


    $('#wrap .section').on('mousewheel', function(e,d){

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


$('.cont_in .pic').slick({
    arrows : false, //화살표
    dots : false, //페이저
    speed : 500, //다음 페이지로 넘어가는 시간
    autoplay : true, //자동재생
    autoplaySpeed : 1000, //자동재생 시 넘어가는 시간
    pauseOnHover : true, //마우스 하버시 자동재생 멈춤
    infinite : true, //맨 끝 이미지에서 다시 맨앞으로 이동
    slidesToShow: 4, //화면에 보여질 이미지 개수
    slidesToScroll : 1, //스크롤시 이동할 이미지 개수
    // vertical : true //세로 슬라이드
    // responsive : [
    //     {
    //         breakpoint : 780, settings : {
    //         slidesToShow: 4,
    //         slidesToScroll: 1
    //     }},
    //     {
    //         breakpoint : 460, settings : {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     }}
    // ]




    responsive: [ // 반응형 웹 구현 옵션
        {  
            breakpoint: 780, //화면 사이즈 960px
            settings: {
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:4
            } 
        },
        { 
            breakpoint: 460, //화면 사이즈 768px
            settings: {	
                //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                slidesToShow:1
            } 
        }
    ]
});

$(window).on('load resize', function(){
    if($(window).width() < 1024){
        
        $('.cont_in .pic').slick();
    }else{
        
        $('.cont_in .pic').slick('unslick');
    }
})







// var str = "Photomatic";
// var c = 0;
// setInterval(function(){
//       if(c < 10)
//          $('.typing-txt').append(str[c]);
//       c++;
// }, 300);
// 반복못함 P red컬러 변경 못함


// const content = "Photomatic"
// const text = document.querySelector(".typing-txt")
// let index = 0;
// function typing(){
//   text.textContent += content[index++]
//   if(index > content.length){
//     text.textContent = ""
//     index = 0;
//   }
// }
// setInterval(typing, 500)
// 모바일에 영향




// $('#wrap').slick({
//     arrows : false, //화살표
//     dots : false, //페이저
//     speed : 500, //다음 페이지로 넘어가는 시간
//     autoplay : true, //자동재생
//     autoplaySpeed : 1000, //자동재생 시 넘어가는 시간
//     pauseOnHover : true, //마우스 하버시 자동재생 멈춤
//     infinite : true, //맨 끝 이미지에서 다시 맨앞으로 이동
//     slidesToShow: 4, //화면에 보여질 이미지 개수
//     slidesToScroll : 1, //스크롤시 이동할 이미지 개수
//     // vertical : true //세로 슬라이드
// });
// $(window).on('load resize', function(){
//     if($(window).width() < 1024){
        
//         $('.#Wrap').slick('unslick');
//     }else{
        
//         $('.#Wrap').slick();
//     }
// })



// $('.pop').slick({
//     arrows : false, //화살표
//     dots : false, //페이저
//     speed : 500, //다음 페이지로 넘어가는 시간
//     autoplay : true, //자동재생
//     autoplaySpeed : 1000, //자동재생 시 넘어가는 시간
//     pauseOnHover : true, //마우스 하버시 자동재생 멈춤
//     infinite : true, //맨 끝 이미지에서 다시 맨앞으로 이동
//     slidesToShow: 1, //화면에 보여질 이미지 개수
//     slidesToScroll : 1, //스크롤시 이동할 이미지 개수
//     // vertical : true //세로 슬라이드
//     responsive : [
//         {breakpoint : 460, settings : {
//             slidesToShow: 2,
//             slidesToScroll: 1
//         }},
//         {breakpoint : 560, settings : {
//             slidesToShow: 2,
//             slidesToScroll: 1
//         }},
//         {breakpoint : 780, settings : {
//             slidesToShow: 4,
//             slidesToScroll: 1
//         }}
//     ]
// })


    
$('.typing-txt').typeWrite({
    repeat:true,
    interval: 1000,
    cursor:false,
    color:"RED"
});


    AOS.init();
    AOS.init({

        disable: function () {
          var desktop = 1024;
          return window.innerWidth < desktop;
        } // 1280px 이상일 때 disable
      
      });

    // var $winHeight = $(window).height();
    // $(window).on('load, resize', function(){
    //     if(winHeight > 768){

    //     }else if(winHeight > 1024){
            
    //     }
    // })

}); //opening