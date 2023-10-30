/** リンクメニュー文言 */
const LINK_MENU = ["項目1", "項目2", "項目999"];

$(function () {

  console.log("start check sideMenu.js");

  // id="linkMenu" にメニューを追加
  addLinkMenu();
})

/** 右サイド <ul id="linkMenu"> に リンクの追加 */
function addLinkMenu() {

  // メニュー文言追加
  LINK_MENU.forEach((value) => {
    $("ul#linkMenu").append('<li>' + value + '</li>');
  });
}