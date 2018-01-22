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
    this.adjustCurrentFrame(pins);
  }
  
  adjustCurrentFrame(pins) {
    if (this._firstThrowInFrame) {
      if (pins === 10) // strike
        this._currentFrame++;
      else
        this._firstThrowInFrame = false;
    } else {
      this._firstThrowInFrame = true;
      this._currentFrame++;
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
      if (firstThrow === 10) {
        score += 10 + this._throws[ball] + this._throws[ball + 1];
      } else {
        const secondThrow = this._throws[ball++];
        
        let frameScore = firstThrow + secondThrow;
        if (frameScore === 10)
          score += frameScore + this._throws[ball];
        else
          score += frameScore;
      }
    }
    
    return score;
  }
}

export default Game;
