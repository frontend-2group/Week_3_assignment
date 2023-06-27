/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

/*
풀이 전 생각해보기

1. 요구사항
특정 배열이 존재.
division함수의 인자로 원하는 요소의 개수 전달.
division함수는 인자로 전달받은 수 만큼 배열을 쪼개고, 해당 배열 하나하나를
요소로 갖는 새로운 배열을 반환함.

2. 필요한 기능
배열을 나누는 기능 (slice)
배열을 추가하는 기능 (push)
*/

function division(arr, lengthNum) {
  const result = [];
  for (let i = 0; i < arr.length; i += lengthNum) {
    result.push(arr.slice(i, i + lengthNum));
  }
  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(division(arr, 2));
