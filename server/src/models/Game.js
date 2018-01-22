class Game {
  constructor() {
    this._throws = Array(21).fill(0);
    this._currentThrow = 0;
    this._firstThrowInFrame = true;
    this._currentFrame = 0;
  }
  
  add(pins) {
    this._throws[this._currentThrow++] = pins;
    this._score += pins;
    this.adjustCurrentFrame();
  }
  
  adjustCurrentFrame() {
    if (this._firstThrowInFrame) {
      this._firstThrowInFrame = false;
      this._currentFrame++;
    } else {
      this._firstThrowInFrame = true;
    }
  }
  
  score() {
    return this.scoreForFrame(this._currentFrame);
  }
  
  scoreForFrame(frame) {
    let ball = 0;
    let score = 0;
    for (let currentFrame = 0; currentFrame < frame; currentFrame++) {
      const firstThrow = this._throws[ball++];
      const secondThrow = this._throws[ball++];
      
      let frameScore = firstThrow + secondThrow;
      if (frameScore === 10) {
        score += frameScore + this._throws[ball];
      } else {
        score += frameScore;
      }
    }
    
    return score;
  }
}

export default Game;
