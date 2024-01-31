/*!
* Start Bootstrap - One Page Wonder v6.0.4 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$(function(){

  // 変数に要素を入れる
  var open = $('.modal-open'),
    close = $('.modal-close'),
    container = $('.modal-container');

  //開くボタンをクリックしたらモーダルを表示する
  open.on('click',function(){
    container.addClass('active');
    $('.Preview_Class').css('z-index','0');
    $('.Club_mimi_Class').css('z-index','0');
    return false;
  });

  //閉じるボタンをクリックしたらモーダルを閉じる
  close.on('click',function(){
    container.removeClass('active');
    $('.Preview_Class').css('z-index','1');
    $('.Club_mimi_Class').css('z-index','1');
  });

  // //モーダルの外側をクリックしたらモーダルを閉じる
  // $(document).on('click',function(e) {
  //   if(!$(e.target).closest('.modal-body').length) {
  //     container.removeClass('active');
  //   }
  // });

  $('.load-cast').on('click',function(){
      window.location.href = 'cast.html';
      return false;
  });

  $('.load-system').on('click',function(){
      window.location.href = 'system.html';
      return false;
  });

  $('.load-recruit').on('click',function(){
      window.location.href = 'recruit.html';
      return false;
  });

  $('.load-access').on('click',function(){
      window.location.href = 'access.html';
      return false;
  });
  $('.navi-img_Class').on('click',function(){
      window.location.href = 'index.html';
      return false;
  });

  $('.Preview_Class').on('click',function(){
      window.location.href = 'index.html';
      return false;
  });
    // $('.tel-btn').on('click',function(){
    //     window.location.href = 'https://webliker.info/65145/';
    //     return false;
    // });

});
