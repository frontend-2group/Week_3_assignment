
// 1. 페이지가 로딩될 때 글씨 변경하기
window.onload = function(){

    const $beforeChange = document.querySelector('.content > .display > form > p:nth-child(1)');
    const $changeTxt = document.querySelector('.changeTxt');
    
    $beforeChange.style.display = 'none';
    $changeTxt.style.display = 'block';
}

// 2. TAB이 clicked 되었을 때 
const $tabs = document.querySelectorAll('.tab_host .tab');
const $tabContents = document.querySelectorAll('.tab_body .content');


$tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        $tabs.forEach( tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');   
        
        $tabContents.forEach(content => {
            content.classList.remove('block');
        })
        $tabContents[index].classList.add('block');
    })
})


// 검색하다 찾은 방법
// onClick="showContent()"에 index를 직접 부여할 수도 있음
function showContent(index){
    $tabs.forEach(function(target){
        target.classList.remove('active');
    })
    $tabs[index].classList.add('active');

    $tabContents.forEach(function(node){
        node.style.display = 'none';
    })

    $tabContents[index].style.display = 'block';
} 


