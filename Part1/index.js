// console.log('hello world')

let board = []

function play(clickedId) {
    let playerSpan = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)
    
    if (board[clickedId] !== undefined) {
        alert(`Pick a different box.`)
        return
    }
    
    
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)
    let topLeft = board[0]
    let topCenter = board[1]
    let topRight = board[2]
    let middleLeft = board[3]
    let middleCenter = board[4]
    let middleRight = board[5]
    let bottomLeft = board[6]
    let bottomCenter = board[7]
    let bottomRight = board[8]
    
    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        window.alert(`${topLeft} is the winner!`)
        reset()
        return
    }
    
    // MIDDLE LEFT TO MIDDLE RIGHT
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner!`)
        reset()
        return
    }
    console.log(bottomLeft)
    // BOTTOM LEFT TO BOTTOM RIGHT
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner!`)
        reset()
        return
    }
    
    // TOP LEFT TO BOTTOM LEFT
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert(`${topLeft} is the winner!`)
        reset()
        return
    }
    
    // TOP CENTER TO BOTTOM CENTER
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner!`)
        reset()
        return
    }
    
    // TOP RIGHT TO BOTTOM RIGHT
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner!`)
        reset()
        return 
    }
    
    // TOP LEFT TO BOTTOM RIGHT
    if  (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert(`${topLeft} is the winner!`)
        reset()
        return
    }
    
    // BOTTOM LEFT TO TOP RIGHT 
    if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
        alert(`${bottomLeft} is the winner!`)
        reset()
        return
    }
    // for (i=0; i < board.length; i++) {
    //     if (!board[i]) {
    //         return
    //     }
    // }
    boardFull = true
    for (i = 0; i < 9; i++) {
        if (board[i] === undefined) {
            boardFull = false
        }
    }
    if (boardFull === true) {
        alert("Cat's game, there is no winner")
        reset()
        return
    }
}
console.log('string')

// CHECK WINNING COMBINATIONS

// TOP LEFT TO TOP RIGHT

// ALL SQUARES ARE FILLED

// Reset Function
function reset() {
    let squares = document.getElementsByTagName('td')
    let playerSpan = document.getElementById('player')
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = " "
    }
    // console.log(squares)
    playerSpan.innerText = 'X'
    board.splice(0, Infinity)
}