
let cells = document.querySelectorAll('.Cell')
let player = 1

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
}

cells.forEach(cell => {
    cell.addEventListener("click", event => {
        if (cell.textContent == "")
        cell.textContent = placexoro()
    })
})



