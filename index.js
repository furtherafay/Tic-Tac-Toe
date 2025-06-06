
let cells = document.querySelectorAll('.Cell')
let player = 1

let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
  ];
  
function checkWinner(){
    for (let win of winPatterns){
        if (board[win[0]] == board[win[1]] &&
            board[win[0]] == board[win[2]]
        )
        return board[win[0]]
    }

    return null
}


function placexoro(){
    if (player % 2 == 0){
        player++
        return "x"
    }
    else{
        player++
        return "o" 
    }
}

function Reset(){
    cells.forEach(cell =>{
        cell.textContent = ""
    })

    document.getElementById("Winner").textContent = null
}

cells.forEach(cell => {
    cell.addEventListener("click", event => {
        if (cell.textContent == "")
        cell.textContent = placexoro()
        board[Number(event.target.id.charAt(1))-1] = cell.textContent
        if(checkWinner() == "x" || checkWinner() == "o"){
            document.getElementById("Winner").textContent = `${checkWinner()} wins!`
            board = ["", "", "", "", "", "", "", "", ""]
            setTimeout(Reset, 3000)
        }
    })
})



