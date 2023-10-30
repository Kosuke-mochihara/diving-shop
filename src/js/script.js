jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ナビバートグル
  $(".js-hamburger").on("click", function () {
    if ($(".js-hamburger").hasClass("is-open")) {
      $(".js-drawer-menu").removeClass("is-open");
      $(this).removeClass("is-open");
    } else {
      $(".js-drawer-menu").addClass("is-open");
      $(this).addClass("is-open");
    }
  });

  $(".js-drawer-menu").on("click", function () {
    $(".js-drawer-menu").removeClass("is-open");
    $(".js-hamburger").removeClass("is-open");
  });

  const SwiperMv = new Swiper(".js-mv .swiper", {
    slidesPerView: "auto",
    grabCursor: true,
    simulateTouch: false,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 3000,
  });

  const mySwiper = new Swiper(".js-campaignSwiper .swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: ".js-campaignSwiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".js-campaignSwiper .swiper-button-prev",
      prevEl: ".js-campaignSwiper .swiper-button-next",
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
      },
    },
  });

  //要素の取得とスピードの設定
  var box = $(".colorbox"),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });
});

// スムーススクロール
$(function () {
  var pagetop = $("#js-page-top");
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      //100pxスクロールしたら表示
      pagetop.fadeIn(); //0.5秒かけて表示
    } else {
      //100px以下だったら隠す
      pagetop.fadeOut(); //0.5秒かけて隠す
    }

    var scrollHeight = $(document).height();
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var footHeight = $("footer").innerHeight();

    if (scrollHeight - scrollPosition <= footHeight) {
      var offset = footHeight + 1.25 * parseFloat(pagetop.css("font-size"));
      pagetop.css({
        position: "absolute",
        bottom: offset + "px",
      });
    } else {
      pagetop.css({
        position: "fixed",
        bottom: "1.25rem",
      });
    }
  });

  pagetop.click(function () {
    // クリックされたら上に戻る
    $("body, html").animate(
      {
        // 0.5秒かけてトップへ移動
        scrollTop: 0, // ページトップまでスクロール
      },
      500
    ); // 0.5秒かけてトップへ移動
    return false;
  });
});

// ドロワーの設定
document.getElementById('js-headerInner').addEventListener('click', function () {
  this.classList.toggle('is-active');
});