// QUIZ



// 01
// 전화번호 가운데 자리 가리기 (****)
// 번호 input: 어떤 것이든 들어가도 위와 같은 결과를 출력해야함
console.log('----- 01 -----');

function HideMiddleNum(yourPhoneNum){

    // RegExp (정규 표현식) >> 형태: / regexp pattern(문자열의 일정한 규칙) / flag(정규 표현식의 검색 방식 설정)
    // ^ = 문자열의 시작, $ = 문자열의 마지막
    // 전화번호의 형식에 맞는지 확인 :  \d = 숫자, {m, n} = 최소 m번 최대 n번 반복, {n} === {n,n} 앞선 패턴이 n번 반복되는지 
    
    // RegExp.prototype.test -> 패턴을 검사해 매칭 결과를 불리언 값으로 반환
    const checkValid = /^\d{3}-\d{4}-\d{4}$/.test(yourPhoneNum);

    if(checkValid === true){

        // const protectNum = yourPhoneNum.split('-').replace('\d{4}', '****');
        const protectNum = yourPhoneNum.split('-');
        // console.log(protectNum);

        protectNum[1] = "*".repeat(protectNum[1].length);
        
        return console.log('개인정보 보호를 위해 가운데 자리는 보이지 않습니다 : ', protectNum.join(" - "));   
    
    } else {
        return console.log('전화번호를 제대로 입력해주세요.');
    }

}

HideMiddleNum('010-1234-3087');
