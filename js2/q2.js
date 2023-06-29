/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/
const num = [];

for (let i = 0; i < 80; i++) {
    num.push(i + 1);
}

function division() {
    let newNum = [];

    for (let i = 0; i < num.length; i += 5) {
        newNum.push(num.slice(i, i + 5));
    }
    return newNum;
}

console.log(division(num));

//아.. slice해야하는데 splice해서 계속 이상하게 나왔었네 어쩐지.. 중간에 번호가 삭제 되더라..휴휴..
