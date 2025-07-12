$(function(){
  $('.slider').slick({
      autoplay:true, // 自動再生を設定
      autoplaySpeed:5000, // スライド切り替えの時間を設定
      dots:false, // インジケーターを非表示
      arrows:false, //矢印消す
    });
})	

// $(function() {
//   const height=$("#header").height();
//   $(".mv").css("padding-top", height);
// });