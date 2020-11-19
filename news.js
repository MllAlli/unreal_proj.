$(document).ready(function() {
//image-box funtion
        $('.image-box').mouseover(function() {
        $(this).find('.image-box-Bg-1').css('transform', 'scale(1.05)');
        $(this).find('.p1').css('opacity', '0.8');
        $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
        $(this).find('.info').css('padding-top', '320px');
        $(this).find('.info').css('padding-bottom', '140px');

        
    });
    $('.image-box').mouseout(function() {
        $(this).find('.info').css('transition', '1.6s');
        $(this).find('.image-box-Bg-1').css('transform', 'scale(1)');
        $(this).find('.p1').css('opacity', '0');
        $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
        $(this).find('.info').css('padding-top', '360px');
        $(this).find('.info').css('padding-bottom', '100px');
    });
//col-5 funtion
    $('.col-md-5').mouseover(function() {
        $(this).find('.p1').css('opacity', '0.8');
        $(this).find('.card-body').css('transition', '0.5s');
        $(this).find('.zoom').css('transform', 'scale(1.02)');
        $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
        $(this).find('.card-body').css('margin-top', '60%');  
        $(this).find('.card-body').css('height', '250px');   
    });
    $('.col-md-5').mouseout(function() {
        $(this).find('.p1').css('opacity', '0');
        $(this).find('.card-body').css('transition', '0.5s');
        $(this).find('.zoom').css('transform', 'scale(1)');
        $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
        $(this).find('.card-body').css('margin-top', '70%');    
    });
//col-7 funtion
    $('.col-md-7').mouseover(function() {
        $(this).find('.p1').css('opacity', '0.8');
        $(this).find('.card-body').css('transition', '0.5s');
        $(this).find('.zoom').css('transform', 'scale(1.02)');
        $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
        $(this).find('.card-body').css('margin-top', '45%');  
        $(this).find('.card-body').css('height', '250px');   
    });
    $('.col-md-7').mouseout(function() {
        $(this).find('.p1').css('opacity', '0');
        $(this).find('.card-body').css('transition', '0.5s');
        $(this).find('.zoom').css('transform', 'scale(1)');
        $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
        $(this).find('.card-body').css('margin-top', '50%');    
    });
//full funtion
$('.full').mouseover(function() {
    $(this).find('.p1').css('opacity', '0.8');
    $(this).find('.card-body').css('transition', '0.5s');
    $(this).find('.zoom').css('transform', 'scale(1.05)');
    $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
});
$('.full').mouseout(function() {
    $(this).find('.p1').css('opacity', '0');
    $(this).find('.card-body').css('transition', '0.5s');
    $(this).find('.zoom').css('transform', 'scale(1.03)');
    $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
});
//col-4
$('.card-col-4').mouseover(function() {
    $(this).find('.p1').css('opacity', '0.8');
    $(this).find('.card-body').css('transition', '0.5s');
    $(this).find('.zoom').css('transform', 'scale(1.02)');
    $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
    $(this).find('.card-body').css('margin-top', '60%');  

});
$('.card-col-4').mouseout(function() {
    $(this).find('.p1').css('opacity', '0');
    $(this).find('.card-body').css('transition', '0.5s');
    $(this).find('.zoom').css('transform', 'scale(1)');
    $(this).find('.p1').css('transform', 'translate3d(0, 10%, 0)');
    $(this).find('.card-body').css('margin-top', '78%');    
});
});