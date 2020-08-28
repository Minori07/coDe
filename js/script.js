Splitting();

$(function () {
  $(".header-sp-icon-wrap").click(function () {
    if ($(".header-sp-icon-wrap").hasClass("is-open")) {
      $(".header-sp-nav").css("display", "none");
      $(".header-sp-icon-wrap").removeClass("is-open");
    } else {
      $(".header-sp-nav").css("display", "block");
      $(".header-sp-icon-wrap").addClass("is-open");
    }
  });

  //余白をクリックしても閉じられる処理
  $(".header-sp-nav").click(function () {
    $(".header-sp-nav").css("display", "none");
    $(".header-sp-icon-wrap").removeClass("is-open");
  });

  $('a[href^="#"]').click(function () {
    $(".header-sp-nav").css("display", "none");
    $(".header-sp-icon-wrap").removeClass("is-open");
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を数値で取得
    var position = target.offset().top - 100;
    // スムーススクロール
    $("body,html").animate(
      { scrollTop: position, scrollLeft: 0 },
      speed,
      "swing"
    );
    return false;
  });
});
