/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/

function division() {}

//길이가 80인 배열 먼저 만들어보자!

function MakeArray() {
  const MakeArrays = [];
  for (i = 1; i <= 80; i++) {
    MakeArrays.push(i);
  }
  return MakeArrays;
}
const NumberArray = MakeArray();
console.log(NumberArray);

//-----------------division 함수를 만들어보자!-------

function division(arr) {
  const result = [];

  //---------for문에 slice 이용해보기 ---------

  // for (i = 0; i < arr.length; i += 5) {
  //   let tempArray = arr.slice(i, i + 5);

  // i=0 arr.slice(0,5) //1,2,3,4,5
  // i=5 arr.slice(5,10) //6,7,8,9,10
  // i=10 arr.slice(10,15)//11,12,13,14,15
  // ...
  // i=75 arr.slice(75,80)//76,77,78,79,80
  // arr.length가 80이기때문에 i=80 x
  // 만약 i<=arr.length라면 i=80 은 비어있기때문에 [] 빈배열 반환

  //---------- while문에 splice 이용해보기---------

  while (arr.length > 0) {
    let tempArray = arr.splice(0, 5);

    result.push(tempArray);
  }
  return result;
}

//
const result = division(NumberArray);
console.log(result);

// while (arr.length > 0) {
//   let tempArray = arr.splice(0, 5);

//   result.push(tempArray);
// }
