
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


//informationの画像エフェクト
//要素の取得とスピードの設定
var box = $('.info__image'),
    speed = 700;  

//.info__imageの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
    $(this).delay(200).animate({'width':'100%'},speed,function(){
                image.css('opacity','1');
                $(this).css({'left':'0' , 'right':'auto'});
                $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
            }
        });
});

//Voiceの画像エフェクト
//要素の取得とスピードの設定
var box = $('.voice__image'),
    speed = 700;  

//.info__imageの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
    $(this).delay(200).animate({'width':'100%'},speed,function(){
                image.css('opacity','1');
                $(this).css({'left':'0' , 'right':'auto'});
                $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
            }
        });
    });
