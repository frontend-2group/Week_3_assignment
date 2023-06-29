//1번 문제
window.onload = function () {
    const $display = document.querySelector("#display>form>p");
    $display.innerHTML = "<p>1.페이지 로딩 글자 변경</p>";
};

// //2번문제
// const $tab_host = document.querySelector(".tab_host");
// const $tabList = document.querySelectorAll(".tab");

// console.log($tabList.length);

// function onmouseoverTab() {
//     document.querySelector(".tab").style.color = "red";
//     document.querySelector(".tab").style.background = "skyblue";
// }

// function onmouseleaveTab() {
//     document.querySelector(".tab").style.color = "black";
//     document.querySelector(".tab").style.background = "transparent";
// }

//선택된 tab이 아니라 [0]만 바뀜......

// for (let i = 0; i < $tabList.length; i++) {
//     function onmouseoverTab() {
//         $tabList[i].style.color = "red";
//         $tabList[i].style.background = "skyblue";
//     }
//     function onmouseleaveTab() {
//         $tabList[i].style.color = "black";
//         $tabList[i].style.background = "transparent";
//     }
// }

//이번엔 또 제일 끝에만 바뀌네.. 하...

// function onmouseoverTab() {
//     $tabList[i].style.color = "red";
//     $tabList[i].style.background = "skyblue";

//     return onmouseoverTab();
// }

// function onmouseleaveTab() {
//     $tabList[i].style.color = "black";
//     $tabList[i].style.background = "transparent";
// }
// if ((i = 2)) {
//     onmouseoverTab;
// }

//i 선택값만 작동함..

//------------다시 2번 도전----------

// const $tab_host = document.querySelector(".tab_host");
// const $tabList = document.querySelectorAll(".tab");

// for (let $tabList of $tab_host) {
//     $tabList.addEventListener("click", () => {
//         $tabList.style.color = "red";
//         $tabList.style.background = "skyblue";
//     });
// }

const $tabList = document.querySelectorAll(".tab");

$tabList.forEach((element) => {
    element.addEventListener("mouseover", function (event) {
        event.target.style.color = "red";
        event.target.style.backgroundColor = "skyblue";
    });
    element.addEventListener("mouseleave", function (event) {
        event.target.style.color = "black";
        event.target.style.backgroundColor = "transparent";
    });
});

// 클릭으로 바꿔보기
// 3번문제 도전..
