
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //ナビバートグル
    $('.js-hamburger').on('click', function () {
      if ($('.js-hamburger').hasClass('is-open')) {
        $('.js-drawer-menu').removeClass('is-open');
        $(this).removeClass('is-open');
      } else {
        $('.js-drawer-menu').addClass('is-open');
        $(this).addClass('is-open');
      }
    });
  
    $('.js-drawer-menu').on('click', function () {
      $('.js-drawer-menu').removeClass('is-open');
      $('.js-hamburger').removeClass('is-open');
    });
    

    const SwiperMv = new Swiper('.js-mv .swiper', {
      slidesPerView: 'auto', // 何枚のカードを表示するか
      grabCursor: true, // マウスオーバー時にカーソルをグラブ状態にするか
      simulateTouch: false, // スワイプ操作をPCのブラウザでシミュレートするか
      loop: true, // ループさせるかどうか
        autoplay: {
        delay: 3000, // 2.5秒ごとにスライド
        disableOnInteraction: false, // ユーザーのスワイプ操作後も自動再生を続行
      },
      speed: 3000, // 1秒（1000ミリ秒）かけてスライドが移動する
    });

    const mySwiper = new Swiper('.js-campaignSwiper .swiper', {
      slidesPerView: 'auto', // 何枚のカードを表示するか
      spaceBetween: 24, // カードの間隔
      grabCursor: true, // マウスオーバー時にカーソルをグラブ状態にするか
      loop: true, // ループさせるかどうか
      loop: false, // ループさせるかどうか
        autoplay: {
        delay: 2500, // 2.5秒ごとにスライド
        disableOnInteraction: false, // ユーザーのスワイプ操作後も自動再生を続行
      },
      speed: 2000, // 1秒（1000ミリ秒）かけてスライドが移動する
      pagination: {
        el: '.js-campaignSwiper .swiper-pagination', // ページネーションの要素
        clickable: true, // ページネーションをクリックできるようにするか
      },
      navigation: {
        nextEl: '.js-campaignSwiper .swiper-button-prev', // 次のボタン要素
        prevEl: '.js-campaignSwiper .swiper-button-next', // 前のボタン要素
      },
      breakpoints: { // 画面幅によってオプションを変える
        768: {
          spaceBetween: 40,   // カードの間隔
        }
      },
    });



   
    //要素の取得とスピードの設定
    var box = $('.colorbox'),
        speed = 700;  
     
    //.colorboxの付いた全ての要素に対して下記の処理を行う
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
                       $(this).css({'left':'0', 'right':'auto'});
                       $(this).animate({'width':'0%'},speed);
                    })
                counter = 1;
              }
         });
    });

});
