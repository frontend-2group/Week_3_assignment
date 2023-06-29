// 1번. 페이지 로딩 시 색상
/*
1. 변수 $q1에 아이디가 q1ID인 요소 선택

2.  window.onload로 스타일, 이미지 등 리소스들이 모두 로드되었을 때
    색상을 변경하는 함수정의.

*/
const $q1 = document.querySelector("#q1ID");
window.onload = function () {
  $q1.style.fontStyle = "italic";
};

// 2번. 클릭 시 배경,글자 색 변경
/*
1. .q2Class2 클래스 명을 가진 div태그가 여러개이기 때문에 
    querySelectorAll 메서드를 사용해서 변수 $q2에 저장.

2. forEach()메서드로 .q2Class2클래스 명을 가진 태그에 전부 접근.

3. addEventListener()메서드로 해당 이벤트가 발생했을 때 실행할 함수정의.

4. .target로 이벤트가 발생한 요소를 참조
*/
const $q2 = document.querySelectorAll(".q2Class2");

$q2.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.target.style.color = "orange";
    event.target.style.backgroundColor = "blue";
  });
});

// 3번. 2번 탭 클릭 시 아래 요소중 탭과 같은 숫자만 보이게 변경
/*
1. .q3Class 클래스 명을 가진 div태그가 여러개이기 때문에 
    querySelectorAll 메서드를 사용해서 변수 $q3에 저장.

2.  2번 탭이 선택 됬을 때 3번 요소가 보여야 하기 때문에 
    q3class명을 가진 태그에 display: none;을 부여. (-> dom.css)

3.  $q2와 $q3은 NodeList이기 때문에 인덱스로 접근 가능.

4.  for문을 이용하여 $q2요소가 클릭될때 같은 인덱스 번호를 가진
    $q3요소가 브라우저 화면에 보이게 정의.
*/
const $q3 = document.querySelectorAll(".q3Class");

for (let i = 0; i < $q3.length; i++) {
  $q2[i].onclick = function () {
    $q3[i].style.display = "block";
  };
}
