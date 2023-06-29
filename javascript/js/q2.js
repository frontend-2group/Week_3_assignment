/*
배열 나누기
함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다

ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
    ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
*/
//3
let want = [1,2,3,4,5,6,7,8,9,10]
let array = []
let wn = 0;

function division(num) {
    for(let i=0; i<want.length/num; i++){

        const cells =[];

        for(let j=0; j<num; j++){
            if(want[wn]>=0 || want[wn]<0){
            cells.push(want[wn])
            
            wn++;
            }
        }

        array.push(cells)

    }

    console.log(array)
}

//
division(4)