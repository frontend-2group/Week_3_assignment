function renderBoard(board){
    const article = document.createElement('article')
    article.setAttribute('data-role', board.id)
    article.addEventListener('click', getBoardDetail)
    article.innerHTML = `
    <article class="board-card">
        <h3 class="flex-center">
            ${board.title}
            <button class="del-btn">삭제</button>
        </h3>
        <div class="flex-center">
            ${board.content}
        </div>
    </article>`
    $boardList.appendChild(article)

    const $delBtn = document.querySelectorAll('.del-btn')
    $delBtn.forEach((del) => {
        del.addEventListener('click', deleteBoard)
    })
}

function deleteBoard(e) {
    e.stopPropagation();
    const delBtnParent = e.currentTarget.parentNode.parentNode.parentNode
    const delDataId = delBtnParent.getAttribute('data-role')
    const delIndex = boardMock.findIndex( el => el.id === parseInt(delDataId))
    boardMock.splice(delIndex,1)
    $boardList.removeChild(delBtnParent)
}
/*
renderBoard 함수에 .del-btn 클래스를 생성,저장
클릭 이벤트로 deleteBoard함수 실행
*/