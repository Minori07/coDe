$(function () {
  $("#cover").css({ width: 0 });
});

$(document).ready(function () {
  $(".slider").bxSlider({
    auto: true,
    pause: 3000,
  });
});

var url = "";
function linkUrl() {
  location.href = url;
}

$(".go_index").click(function () {
  url = "index.html#" + this.target;
  $("#cover").css({ width: "100vw" });
  setTimeout(linkUrl, 1000);
});

$(".go_taku").click(function () {
  url = "https://geikou-takuten.com/";
  $("#cover").css({ "background-color": "#f0ede5" });
  $("#cover").css({ width: "100vw" });
  setTimeout(linkUrl, 1000);
});

var searchItem = ".type"; // 絞り込む項目を選択するエリア
var listItem = ".summary-list li"; // 絞り込み対象のアイテム
var activeClass = "is-active"; // 選択中のグループに付与されるclass名

$(function () {
  // 絞り込みを変更した時
  $(searchItem).on("click", function () {
    $(searchItem).removeClass(activeClass);
    var group = $(this).addClass(activeClass).data("group");
    search_filter(group);
  });
});

/**
 * リストの絞り込みを行う
 * @param {String} group data属性の値
 */
function search_filter(group) {
  // 非表示状態を解除
  $(listItem).css({ display: "flex" });
  // 値が空の場合はすべて表示
  if (group === "") {
    return;
  }
  // リスト内の各アイテムをチェック
  for (var i = 0; i < $(listItem).length; i++) {
    // アイテムに設定している項目を取得
    var itemData = $(listItem).eq(i).data("group");
    // 絞り込み対象かどうかを調べる
    if (itemData !== group) {
      $(listItem).eq(i).css({ display: "none" });
    }
  }
}
