class Game {
  constructor() {
    this._score = 0;
    this._throws = Array(21).fill(0);
    this._currentThrow = 0;
  }
  
  add(pins) {
    this._throws[this._currentThrow++] = pins;
    this._score += pins;
  }
  
  score() {
    return this._score;
  }
  
  scoreForFrame(frame) {
    let ball = 0;
    let score = 0;
    for (let currentFrame = 0; currentFrame < frame; currentFrame++) {
      const firstThrow = this._throws[ball++];
      const secondThrow = this._throws[ball++];
      score += firstThrow + secondThrow;
    }
    return score;
  }
}

export default Game;
