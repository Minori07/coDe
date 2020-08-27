$(function () {
  $("#cover").css({ width: 0 });
});

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
