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

  $(".main-visual h1").hover(
    function () {
      // カーソルが当たった時の処理
      $("#cursor").css({ width: "300px" });
      $("#cursor").css({ height: "300px" });
      $("#cursor").css({ top: "-170px" });
      $("#cursor").css({ left: "-170px" });
      $("#cursor").css({ "background-color": "var(--green)" });
    },
    function () {
      // カーソルが離れた時の処理
      $("#cursor").css({ width: "8px" });
      $("#cursor").css({ height: "8px" });
      $("#cursor").css({ top: "-4px" });
      $("#cursor").css({ left: "-4px" });
      $("#cursor").css({ "background-color": "var(--black)" });
    }
  );
  $(".section-heading").hover(
    function () {
      // カーソルが当たった時の処理
      $("#cursor").css({ width: "100px" });
      $("#cursor").css({ height: "100px" });
      $("#cursor").css({ top: "-70px" });
      $("#cursor").css({ left: "-70px" });
    },
    function () {
      // カーソルが離れた時の処理
      $("#cursor").css({ width: "8px" });
      $("#cursor").css({ height: "8px" });
      $("#cursor").css({ top: "-4px" });
      $("#cursor").css({ left: "-4px" });
      $("#cursor").css({ "background-color": "var(--black)" });
    }
  );

  //   window.onmousemove = handleMouseMove;
  //   function handleMouseMove(event) {
  //     event = event || window.event; // IE対応
  //     $(".member-img-cover").each(function () {
  //       var cover = this.getBoundingClientRect();
  //       var pos_x = event.clientX - cover.left;
  //       var pos_y = event.clientY - cover.top;
  //       if (
  //         (0 < pos_y && pos_y < cover.height) ||
  //         (0 < pos_x && pos_x < cover.width)
  //       ) {
  //         console.log("!");
  //         $(this).css({
  //           "clip-path": "circle(100px at " + pos_x + " " + pos_y + " )",
  //         });
  //       }
  //     });
  //   }

  let cursorR = 4; //カーソルの半径
  const cursor = document.getElementById("cursor"); //カーソル用のdivを取得

  //上記のdivタグをマウスに追従させる処理
  document.addEventListener("mousemove", function (e) {
    cursor.style.transform =
      "translate(" + e.clientX + "px, " + e.clientY + "px)";
  });

  //   const linkElem = document.querySelectorAll(".member-img-wrap");
  //   for (let i = 0; i < linkElem.length; i++) {
  //     linkElem[i].addEventListener("mouseover", function (e) {
  //       cursor.classList.add("hov_");
  //       console.log("ok");
  //     });
  //     linkElem[i].addEventListener("mouseout", function (e) {
  //       cursor.classList.remove("hov_");
  //     });
  //   }
});
