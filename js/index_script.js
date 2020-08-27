$(function () {
  setTimeout(fukiIn1, 500);
  setTimeout(fukiIn2, 800);
  setTimeout(fukiAnim, 1500);

  $("#cover").css({ width: 0 });
});

function fukiIn1() {
  $(".main-fuki1").addClass("fuki-anim1");
}
function fukiIn2() {
  $(".main-fuki2").addClass("fuki-anim1");
}
function fukiAnim() {
  $(".main-fuki1").removeClass("fuki-anim1");
  $(".main-fuki2").removeClass("fuki-anim1");
  $(".fuki-wrap").addClass("fuki-anim");
}

if (screen.width < 480) {
  document.getElementById("main-img").innerHTML =
    '<img src="images/main-visual-mobile.svg" alt="メインビジュアル" />';
}

var url = "";
function linkUrl() {
  location.href = url;
}

$(".go_work").click(function () {
  url = "works.html#" + this.target;
  $("#cover").css({ width: "100vw" });
  setTimeout(linkUrl, 1000);
});

$(".go_taku").click(function () {
  url = "https://geikou-takuten.com/";
  $("#cover").css({ "background-color": "#f0ede5" });
  $("#cover").css({ width: "100vw" });
  setTimeout(linkUrl, 1000);
});

$(window).scroll(function () {
  $("body").each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    // console.log(scroll);
    if (scroll >= 750) {
      $(".what-fukidashi-wrap img").each(function (i) {
        $(this).addClass("fuki-anim");
        setInterval(slide, 2000);
      });
    }
  });
});
