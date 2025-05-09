let boxes = document.querySelectorAll(".box");
let winnerMsg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg_container");
let resetBtn = document.querySelector("#reset_btn");
let user = "X";
let count = 0;

const patterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (user === "X") {
      box.innerText = "X";
      user = "O";
    } else {
      box.innerText = "O";
      user = "X";
    }

    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of patterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner");
        showWinner(pos1Val);
        return;
      }
    }
   
  }
  count++;
  if(count===9){
    showDraw();
  }
};

const showWinner=(winner)=>{
    winnerMsg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
}

const enableBtns = ()=>{
    for(let box of boxes){
        box.disabled = false;
    }
}

const disableBtns = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const showDraw = () => {
    winnerMsg.innerText = `Game is Draw. Please play again.`;
    msgContainer.classList.remove("hide");
  };
  

resetBtn.addEventListener("click",()=>{
    console.log("reset button is clicked");
    for(let box of boxes){
        box.innerText = "";
    }
    enableBtns();
    user = "X";
    msgContainer.classList.add("hide");
    count=0;
});

