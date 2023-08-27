
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
        //slidesPerView: 'auto', // 自動調整
        // スライド間の余白
        spaceBetween: '6.4%',
        




        // 前後のスライドで止まらずにスライド
        freeMode: true,
        centeredSlides: false,
        // 前後の矢印
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        //　ブレイクポイント     
        breakpoints: {
            768: {
                slidesPerView: 3.5,
                //slidesPerView: 'auto', // 自動調整
                // スライド間の余白
                spaceBetween: '2.7%',
                centeredSlides: false,
                //}
                paddingLeft: 180, // 最初のスライドにだけ適用する余白

        // スライド切り替え時のコールバック
        on: {
            slideChangeTransitionStart: function () {
                // スライドが切り替わる際のアニメーションで余白をなくす
                this.$el.find('.swiper-slide:first-child').css('padding-left', '0');
            },
            slideChangeTransitionEnd: function () {
                アニメーション終了後に余白を再度設定
                if (this.activeIndex === 0) {
                    this.$el.find('.swiper-slide:first-child').css('padding-left', '50px');
                }
            }
        },
            },
        },

    });

});


//informationの画像エフェクト
//要素の取得とスピードの設定
var box = $('.info__image'),
    speed = 700;

//.info__imageの付いた全ての要素に対して下記の処理を行う
box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        if (counter == 0) {
            $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
                image.css('opacity', '1');
                $(this).css({ 'left': '0', 'right': 'auto' });
                $(this).animate({ 'width': '0%' }, speed);
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
box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        if (counter == 0) {
            $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
                image.css('opacity', '1');
                $(this).css({ 'left': '0', 'right': 'auto' });
                $(this).animate({ 'width': '0%' }, speed);
            })
            counter = 1;
        }
    });
});

//Priceの画像エフェクト
//要素の取得とスピードの設定
var box = $('.price__image'),
    speed = 700;

//.info__imageの付いた全ての要素に対して下記の処理を行う
box.each(function () {
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
        image = $(this).find('img');
    var counter = 0;

    image.css('opacity', '0');
    color.css('width', '0%');
    //inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function () {
        if (counter == 0) {
            $(this).delay(200).animate({ 'width': '100%' }, speed, function () {
                image.css('opacity', '1');
                $(this).css({ 'left': '0', 'right': 'auto' });
                $(this).animate({ 'width': '0%' }, speed);
            })
            counter = 1;
        }
    });
});

var topBtn = $('.to-top');
topBtn.hide();

// ボタンの表示設定
$(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
        // 指定px以上のスクロールでボタンを表示
        topBtn.fadeIn();
    } else {
        // 画面が指定pxより上ならボタンを非表示
        topBtn.fadeOut();
    }
});