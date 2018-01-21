class Game {
  constructor() {
    this._score = 0;
  }
  
  add(pins) {
    this._score += pins;
  }
  
  score() {
    return this._score;
  }
}

export default Game;
