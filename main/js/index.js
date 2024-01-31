/*!
* Start Bootstrap - One Page Wonder v6.0.4 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


$(function(){


  $('.slide').each(function(index, element) {
    // スライド（画像）の数を取得
    var $slides = $(this).find('img'),
        slideNum = $slides.length,
        currentIdx = 0; // 何番目か

    // 最初の画像をフェードイン
    $(".slide img").eq(currentIdx).fadeIn();

    // 3秒後に次のスライドを表示
    setTimeout(dispNextSlide, 9000);

    // 次のスライドを表示するメソッド
    function dispNextSlide() {
      var nextIdx = currentIdx + 1;

      // 最後のスライドの場合ははじめに戻る
      if (nextIdx > (slideNum - 1)) {
        nextIdx = 0
      }

      // 現在のスライドをフェードアウト
      $(".slide img").eq(currentIdx).fadeOut();

      // 次のスライドをフェードイン
      $(".slide img").eq(nextIdx).fadeIn();

      // インデックスを更新
      currentIdx = nextIdx;
      setTimeout(dispNextSlide, 5000);
    }
  });

});
