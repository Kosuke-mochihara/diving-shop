
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

});
