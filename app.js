const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const number = document.getElementById("gameLavel");
const btnplayer1 = document.getElementById("btnPlayer1");
const btnplayer2 = document.getElementById("btnPlayer2");
const clean = document.getElementById("reset");

//add class Function

const addclas1 = () => {
  player1.classList.add("winner");
  player2.classList.add("loser");
};

const addclas2 = () => {
  player2.classList.add("winner");
  player1.classList.add("loser");
};

//remove class Function

const removeclas1 = () => {
  player1.classList.remove("winner");
  player2.classList.remove("loser");
};
const removeclas2 = () => {
  player2.classList.remove("winner");
  player1.classList.remove("loser");
};

//variales

let plus1 = 0;
let plus2 = 0;
let btnDisabled = true;
let five = 5;

// 1 Player -> clicked

btnplayer1.addEventListener("click", () => {
  if (btnDisabled) {
    player1.textContent = plus1 += 1;
    if (player1.textContent == number.value) {
      btnDisabled = false;
      addclas1();
    }
  }
});

// 2 Player -> clicked

btnplayer2.addEventListener("click", () => {
  if (btnDisabled) {
    player2.textContent = plus2 += 1;
    if (player2.textContent == number.value) {
      btnDisabled = false;
      addclas2();
    }
  }
});

// New game

clean.onclick = () => {
  btnDisabled = true;
  player1.textContent = plus1 = 0;
  player2.textContent = plus2 = 0;
  addclas1();
  addclas2();
  removeclas1();
  removeclas2();
};
