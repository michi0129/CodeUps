
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //ハンバーガーメニュー
    //クリックするとクラスを付与
    $(".js-hamburger").click(function () {
        if ($('.js-hamburger').hasClass('is-active')) {
            $('.js-hamburger').removeClass('is-active');
            $(".sp-nav").removeClass('is-active');
        } else {
            $('.js-hamburger').addClass('is-active');
            $(".sp-nav").addClass('is-active');
        }
    });

    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
        //pagination: {
        //    el: ".swiper-pagination",
        //},
        clickable: false,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // Swiper
    var swiper = new Swiper(".mySwiperCampaign", {
        //pagination: {
        //    el: ".swiper-pagination",
        //},
        clickable: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // 次のスライドを少し見せる
        slidesPerView: 1.2,
        // スライド間の余白
        spaceBetween: 24, 
        // 前後のスライドで止まらずにスライド
        freeMode: true, 
        centeredSlides : true,
        // 前後の矢印
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },


//　ブレイクポイント     
breakpoints: {
    // 768px以上は次のスライドを見せない
    768: {
        slidesPerView: 3.5,
         // スライド間の余白
        spaceBetween: 40, 
        centeredSlides : false,
    //}
}
},
        
});

});
