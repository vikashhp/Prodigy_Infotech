let boxes = document.querySelectorAll(".box");

let msg1 = document.querySelector(".msg-container");

let winner = document.querySelector(".msg");

let resetBtn = document.querySelector(".reset");

let newGame = document.getElementById("newGame");

let turn0 = true;

let winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (win) => {
  winner.innerText = `Winner is ${win}`;

  msg1.classList.remove("hide");
  disabledBoxes();
};

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const resetGame = () => {
  turn0 = true;
  msg1.classList.add("hide");
  enabledBoxes();
};

const enabledBoxes = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};

resetBtn.addEventListener("click", resetGame);

newGame.addEventListener("click", resetGame);
