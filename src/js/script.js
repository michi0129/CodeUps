
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

        //ハンバーガーメニュー
        //クリックするとクラスを付与
        $(".js-hamburger").click(function(){
        if ($('.js-hamburger').hasClass('is-active') ) {
            $('.js-hamburger').removeClass('is-active');
            $(".sp-nav").removeClass('is-active');
        } else {
            $('.js-hamburger').addClass('is-active');
            $(".sp-nav").addClass('is-active');
        }
        });

});
