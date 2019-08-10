class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  checkIfPair() {
    this.pairsClicked++;
    const card1 = this.pickedCards[0];
    const card2 = this.pickedCards[1];
    const name1 = card1[0].dataset.cardName;
    const name2 = card2[0].dataset.cardName;

    if (name1 === name2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
  shuffleCards() {}
}
