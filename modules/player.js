export default class Player {
  constructor(name, surname, lotteryNumbers) {
    this.name = name;
    this.surname = surname;
    this.lotteryNumbers = lotteryNumbers;
  }
  getPlayersDetails() {
    return `${this.name} ${this.surname} [${this.lotteryNumbers}]`;
  }
  getMaxNumber() {
    return Math.max(...this.lotteryNumbers);
  }
}
