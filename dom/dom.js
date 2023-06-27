//1번 문제
window.onload = function () {
    const $display = document.querySelector("#display>form>p");
    $display.innerHTML = "<p>1.페이지 로딩 글자 변경</p>";
};

// //2번문제
const $tab_host = document.querySelector(".tab_host");
const $tab = document.querySelectorAll(".tab");

function onmouseoverTab() {
    document.querySelector(".tab").style.color = "red";
}
//선택된 tab이 아니라 [0]만 바뀜......
