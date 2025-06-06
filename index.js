
let cells = document.querySelectorAll('.Cell')
let player = 1

let board = ["", "", "", "", "", "", "", "", ""];

let won = false

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
        const [a, b, c] = win;
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]){
            return board[a];
        }
    }
    return null;
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

    board = ["", "", "", "", "", "", "", "", ""]    
    player = 1
    cells.forEach(cell =>{
        cell.textContent = ""
    })

    document.getElementById("Winner").textContent = ""
    won = false
}

cells.forEach(cell => {
    cell.addEventListener("click", event => {
        if (cell.textContent == "" && won == false){
            cell.textContent = placexoro()
            board[Number(event.target.id.charAt(1))-1] = cell.textContent
            const winner = checkWinner()
            console.log(winner)
            if(winner === "x" || winner === "o"){
                document.getElementById("Winner").textContent = `${winner} wins!`
                won = true
            }
        }
    })
})



