$(function () {
  setTimeout(fukiIn1, 2500);
  setTimeout(fukiIn2, 2800);
  setTimeout(fukiAnim, 3500);

  $("#cover").css({ width: 0 });
  $(".work-list li").each(function () {
    //     var work = this.getBoundingClientRect();
    //     console.log(work.top);
    //     console.log("高い" + work.height);
    // $(this).children(".work-hover").css({ top: 0 });
    // $(this).children(".work-hover").css({ left: 0 });
  });
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

//位置取得
var what = document.getElementById("what").getBoundingClientRect().top;
var podcast = document.getElementById("podcast").getBoundingClientRect().top;
var works = document.getElementById("works").getBoundingClientRect().top;
var member = document.getElementById("member").getBoundingClientRect().top;
var comments = document.getElementById("comments").getBoundingClientRect().top;

$(window).scroll(function () {
  $(".fadein").each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight + 100) {
      $(this).addClass("scrollin");
    }
  });

  $("body").each(function () {
    var elemPos = $(this).offset().top,
      scroll = $(window).scrollTop(),
      windowHeight = $(window).height();
    // console.log(scroll);
    if (scroll >= what - 400) {
      const delayTime = 200;
      //   $(".what h2 .char").addClass("sec-hd-anim");
      $(".what-fukidashi-wrap img").each(function (i) {
        $(this)
          .delay(i * delayTime)
          .queue(function () {
            $(this).addClass("fuki-anim1").dequeue();
            $(this).css({ transform: "scale(1)" }).dequeue();
          });
      });
      // } else {
      //   $(".what h2 .char").removeClass("sec-hd-anim");
      // }
      // if (scroll >= podcast - 400) {
      //   $(".podcast h2 .char").addClass("sec-hd-anim");
      // } else {
      //   $(".podcast h2 .char").removeClass("sec-hd-anim");
      // }
      // if (scroll >= works - 300) {
      //   $(".works h2 .char").addClass("sec-hd-anim");
      // } else {
      //   $(".works h2 .char").removeClass("sec-hd-anim");
      // }
      // if (scroll >= member - 200) {
      //   $(".member h2 .char").addClass("sec-hd-anim");
      // } else {
      //   $(".member h2 .char").removeClass("sec-hd-anim");
      // }
      // if (scroll >= comments - 200) {
      //   $(".comments h2 .char").addClass("sec-hd-anim");
      // } else {
      //   $(".comments h2 .char").removeClass("sec-hd-anim");
    }
  });
  var sc_top = $(this).scrollTop();

  window.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    event = event || window.event; // IE対応
    $(".work-list li").each(function () {
      var work = this.getBoundingClientRect();
      //   console.log(event.clientX + ", " + event.clientY);
      //   console.log(work.left + "," + work.top);
      var pos_x = event.clientX - work.left;
      var pos_y = event.clientY - work.top;
      if (pos_y > work.height) {
        $(this).children(".work-hover").css({ top: "100%" });
      } else if (0 < pos_y && pos_y < work.height) {
        $(this).children(".work-hover").css({ top: 0 });
      } else {
        $(this).children(".work-hover").css({ top: "-100%" });
      }
      if (pos_x > work.width) {
        $(this).children(".work-hover").css({ left: "100%" });
      } else if (0 < pos_x && pos_x < work.width) {
        $(this).children(".work-hover").css({ left: 0 });
      } else {
        $(this).children(".work-hover").css({ left: "-100%" });
      }
      // ボタンをcategory_btnをhoverしたらparent_ulが現れる。ここまでは通常営業ですね
    });
  }
});
