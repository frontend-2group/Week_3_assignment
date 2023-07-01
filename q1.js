/*
변수 위치 찾기
변수 a는 main 함수 안에서 사용된다
변수 b는 dom api selector로 다른 이벤트에서 사용된다
변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다
변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다.
변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.
*/

function solution(c) {
  let d = c.toString();

  return d
}

function parse(e) {}

function main() {
  let a = "" 
  let b = document.querySelectorAll('.abcd')

  let count = 0
  // 클릭이벤트에서 사용
  for(let bArr of b){
    bArr.addEventListener('click', function(e) {
      count++
    });
  }

  solution(count);
}

let e = main()

parse(e) //함수 재사용