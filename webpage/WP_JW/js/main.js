$(document).ready(function(){

    $('.btn').on('click', function(){
        $('.m_gnb').stop().animate({
            left: 0
        });       
    })
    $('.m_gnb').on('.click', function(){
        $('.tit').css({
            color: '#61ccda'
        })
     });
    $('.btn').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active'),
        $('.m_gnb').toggleClass('block');
      });

    $('.room_pic').slick({
        arrows : true, //화살표
        dots : false, //페이저
        speed : 700, //다음 페이지로 넘어가는 시간
        autoplay : true, //자동재생
        autoplaySpeed : 1000, //자동재생 시 넘어가는 시간
        pauseOnHover : true, //마우스 하버시 자동재생 멈춤
        infinite : true, //맨 끝 이미지에서 다시 맨앞으로 이동
        slidesToShow: 1, //화면에 보여질 이미지 개수
        slidesToScroll : 1, //스크롤시 이동할 이미지 개수
        // vertical : true //세로 슬라이드
    })

    $(window).on('load resize', function(){
        if($(window).width() < 780){
            
            $('.room_pic').slick();
        }else{
            
            $('.room_pic').slick('unslick');
        }
    })
    
    $('.accom_menu ul li').on('click', function(e){
        e.preventDefault();
        var i = $(this).index();
        $('.accom_cont ul li').eq(i).show().siblings().hide();
        $(this).css({
            backgroundColor:'#61ccda',
            color:'#fff',
            fontWeight: 'bold'
        }).siblings().css({
            backgroundColor:'#fff',
            color:'#000'
        });
    })//click .tit>li

}); //opening


