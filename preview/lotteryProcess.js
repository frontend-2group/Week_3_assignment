// 02
// 로또 번호 맞추기
// 로또 번호 랜덤 생성 (중복되지 않는 7개의 랜덤한 숫자, 각 숫자의 범위는 1~45)
// input: [num1, num2, num3, num4, num5, num6, num7(bonusNum)]

console.log('----- 02 -----');

const yourNumbers = generatedNumbers();
const lottoNumbers = [1, 34, 26, 17, 40, 11, 8];

function generatedNumbers(){
    
    // random 숫자 7개를 출력, 중복된 숫자의 출력 방지
    const yourLottoNumbers = new Set();

    while(yourLottoNumbers.size <= 6){
        const randomNumbers = Math.floor(Math.random() * 45) + 1;
        yourLottoNumbers.add(randomNumbers);
    }

    return Array.from(yourLottoNumbers);
}

console.log('귀하의 로또 번호 : ', yourNumbers);



const lotteryProcess = (numberArray) => {

    // 로또 번호와 내 번호가 몇 개 일치하는지
    let rank = '미당첨';
    let matchedCount = 0;

    for(let num of numberArray){
        if(lottoNumbers.includes(num)){
            matchedCount++;
        }
    } 

    // 일치하는 것들 중에서 보너스번호를 포함하고 있는지
    let bonumNum = lottoNumbers.pop();
    let bonusFlag = false;  // bonumNum과 일치하는지 여부를 불리언 값으로 반환

    if(numberArray.includes(bonumNum)){
        bonusFlag = true;
    }

    /* 
        [ 로또 당첨 조건 ]
            2개 일치 (순서 무관, bonumNum 제외) === 5등
            3개 일치 (순서 무관, bonumNum 제외) === 4등
            4개 일치 (순서 무관, bonumNum 제외) === 3등
            5개 일치 (순서 무관, bonumNum 포함) === 2등
            6개 일치 (bonumNum 제외 모든 번호) === 1등 
    */
    switch(matchedCount){
        case 6:
            rank = 1;
            break;
        case 5:
            if(bonusFlag === true){
                rank = 2;
            } else {
                rank = 3;
            }
            break;
        case 3:
            rank = 4;
            break;
        case 2:
            rank = 5;
            break;
        default:
            break;
    }

    return rank;
}
// lotteryProcess(yourNumbers);
console.log(lotteryProcess(yourNumbers));

module.exports = {
    generatedNumbers,
    lotteryProcess,
}