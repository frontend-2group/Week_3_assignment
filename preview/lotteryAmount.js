
const lotto = require('./lotteryProcess');

const yourNumbers = Array(5).fill().map(() => lotto.generatedNumbers());

for(let numbers of yourNumbers){
    const result = lotto.lotteryProcess(numbers);
    console.log(`로또 당첨 결과 :  ${result}`);
}