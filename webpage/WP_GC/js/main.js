$(document).ready(function(){

  $('.m_bar img').on('click', function(e){
    e.stopPropagation();
    $('.m_util').css({
    opacity: 1
    })
    $('.cls').css({
        opacity: 1
    })
    //  $(this).css({
    //     opacity: 0 
    //  })
    
});
$('.cls').on('click', function(){
    $(this).css({opacity: 0}),
    $('.m_util').css({
    opacity: 0
    })
});



$('p').on('click', function(e){
e.stopPropagation();
$(this).addClass('on').parent().siblings().find('.p').removeClass('on');


$(this).siblings().slideToggle().css({});
$(this).parent().siblings().find('.sub').slideUp();
})

}); //opening