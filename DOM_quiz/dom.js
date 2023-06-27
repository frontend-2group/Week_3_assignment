// 1번. 페이지 로딩 시 색상

// 변수 q1에 아이디가 q1ID인 요소 선택
// window.onload
// -> 스타일, 이미지 등 리소스들이 모두 로드되었을 때 실행됨
// function () {q1.style.color = "red";};
// -> 페이지가 로딩 된 후 텍스트 색상을 변경
const q1 = document.querySelector("#q1ID");
window.onload = function () {
  q1.style.color = "red";
};

// 2번. 클릭 시 배경,글자 색 변경

const q2 = document.querySelectorAll(".q2Class2");

q2.forEach((element) => {
  element.addEventListener("click", function (event) {
    // 클릭한 요소에 대한 작업
    event.target.style.color = "orange";
    event.target.style.backgroundColor = "blue";
  });
});
