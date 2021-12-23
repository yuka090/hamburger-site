$(document).ready(function() {

    jQuery(function($){
        $('.c-header__menu').on('click',function(){
            $('.l-aside').toggleClass('p-open');
            $('.c-slideback').fadeIn();
            //alert('クリック');
        });

        $('.c-aside__close').on('click',function(){
            $('.l-aside').removeClass('p-open');
            $('.c-slideback').fadeOut();
        });

        $('.c-slideback').on('click',function(){
            $('.l-aside').removeClass('p-open');
            $('.c-slideback').fadeOut();
        });    

    });
    






});