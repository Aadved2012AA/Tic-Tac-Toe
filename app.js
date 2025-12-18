let body = document.querySelector("body");
let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector(".new-game-btn");
let resetBtn = document.querySelector(".reset-btn");
let message = document.querySelector(".message");
let currPlayerX = true;    
let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (currPlayerX) {
            box.textContent = "X";
            currPlayerX = false;
        } else {
            box.textContent = "O";
            currPlayerX = true;
        }  
        box.disabled = true;
        box.classList.add("disabled-box");

        checkWinnner();
    });
});

newGameBtn.addEventListener("click", () => {
    resetGame();
});

resetBtn.addEventListener("click", () => {
    resetGame();
}); 

let resetGame = () => {
    boxes.forEach((box) => {
        box.textContent = "";
        box.disabled = false;
        box.classList.remove("disabled-box");
        message.textContent = "";
        currPlayerX = true;
    })};

let checkWinnner = () => {
    for(pattern of winningPatterns) {        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
                message.textContent = `Player ${pos1Val} Wins!`;
                boxes.forEach((box) => {
                    box.disabled = true;
                    box.classList.add("disabled-box");
                });
                return;
            }
        }
    }
    
    if([...boxes].every(box => box.textContent !== "")) {
        message.textContent = "It's a Draw!";
    }
};
