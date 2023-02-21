import Player from "./player.js";

export default class Lottery {
  constructor(people) {
    this.people = people;
    this.players = [];
    this.winningCombination = [];
  }

  getLotteryNumbers() {
    let lotteryNumbers = [];

    while (lotteryNumbers.length < 4) {
      let number = Math.floor(Math.random() * 7) + 1;

      if (lotteryNumbers.indexOf(number) === -1) {
        lotteryNumbers.push(number);
      }
    }
    lotteryNumbers.sort();
    return lotteryNumbers;
  }

  generatePlayers() {
    this.people.map((person) => {
      const player = new Player(
        person.name,
        person.surname,
        this.getLotteryNumbers()
      );

      this.players.push(player);
    });
  }

  getWiningCombinations() {
    this.winningCombination = this.getLotteryNumbers();
  }

  startDrawing() {
    this.generatePlayer();
    this.getWinningCombination();

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const winners = this.players.filter((player) =>
          player.lotteryNumbers.every(
            (val, index) => val === this.winningCombination[index]
          )
        );

        const result = {
          winningCombination: this.winningCombination,
          winners, //ako je key isti, onda možemo pisati ovako skraćeno
        };

        if (winners.lenght > 0) {
          resolve(result);
        } else {
          reject(result);
        }
      }, 2000);
    });
  }
}
