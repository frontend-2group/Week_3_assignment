/*
변수 위치 찾기

변수 a는 main 함수 안에서 사용된다

변수 b는 dom api selector로 다른 이벤트에서 사용된다

변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다

변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다.

변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.
*/
/*
스코프에 따른 위치를 말하는건가...?
*/
function solution() {}

function parse() {}

function main() {
  solution();
}

/*
정답

a = main()함수의 지역 변수

b = selector가 저장된 전역 변수

c = solution()함수의 지역 변수

d = solution()함수에 인자로 전달되는 콜백 함수

e = 재할당이 가능한 전역 변수

*/
