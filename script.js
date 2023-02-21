import Lottery from "./modules/lottery.js";
import { politicians, folk } from "./data/data.js";

const lottery = new Lottery(politicians);

const buttonStartLotteryEl = document.querySelector(".button-start-lottery");
const lottteryResultsEl = document.querySelector(".lottery-results");
const winningCombinationEl = document.querySelector(".winning-combination");
const winningMessageEl = document.querySelector(".winners-message");
const winnersEl = document.querySelector(".winners");

buttonStartLotteryEl.addEventListener("click", () => {
  buttonStartLotteryEl.disabled = true;
  buttonStartLotteryEl.innerText = "Lottery drawing in progress";

  lottery
    .startDrawing()
    .then((result) => {
      winningCombinationEl.innerText = `Winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerText = "Winners:";

      let winnersList = "";
      result.winners.forEach((winner) => {
        winnersList += `<li>${winner.getPlayerDetails()}</li>`;
      });
    })
    .catch((result) => {
      winnersEl.display = "none";
      winningCombinationEl.innerHTML = `Winning combination was: ${result.winningCombination}`;
      winningMessageEl.innerHTML = "There are no winners!";
    })
    .finnaly(() => {
      buttonStartLotteryEl.disabled = false;
      buttonStartLotteryEl.innerText = "Start lottery drawing";
    });
});
