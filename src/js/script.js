
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

});
