$(document).ready(function() {

    jQuery(function($){
        $('.c-header__menu').on('click',function(){
            $('.p-aside').toggleClass('is-open');
            $('.c-slideback').fadeIn();
            //alert('クリック');
        });

        $('.c-aside__close').on('click',function(){
            $('.p-aside').removeClass('is-open');
            $('.c-slideback').fadeOut();
        });

        $('.c-slideback').on('click',function(){
            $('.p-aside').removeClass('is-open');
            $('.c-slideback').fadeOut();
        });    

    });
    
    $(window).resize(function() {
        if (window.matchMedia('(min-width: 1040px)').matches) {
            //画面横幅が1040px以上のとき
            $('.p-aside').removeClass('is-open');
            $('.c-slideback').fadeOut();
        };
    });






});