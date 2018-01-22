class Game {
  constructor() {
    this._throws = Array(21).fill(0);
    this._currentThrow = 0;
    this._firstThrowInFrame = true;
    this._currentFrame = 0;
    
    this._ball = 0;
  }
  
  add(pins) {
    this._throws[this._currentThrow++] = pins;
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
    this._currentFrame = Math.min(10, this._currentFrame);
  }
  
  score() {
    return this.scoreForFrame(this._currentFrame);
  }
  
  scoreForFrame(frame) {
    this._ball = 0;
    let score = 0;
    for (let currentFrame = 0; currentFrame < frame; currentFrame++) {
      if (this.strike())
        score += 10 + this.nextTwoBalls();
      else if (this.spare())
        score += 10 + this.nextBall();
      else
        score += this.twoBallsInFrame();
    }
    
    return score;
  }
  
  spare() {
    if (this._throws[this._ball] + this._throws[this._ball + 1] === 10) {
      this._ball += 2;
      return true;
    }
    return false;
  }
  
  nextBall() {
    return this._throws[this._ball];
  }
  
  strike() {
    if (this._throws[this._ball] === 10) {
      this._ball++;
      return true;
    }
    return false;
  }
  
  nextTwoBalls() {
    return this._throws[this._ball] + this._throws[this._ball + 1];
  }
  
  twoBallsInFrame() {
    return this._throws[this._ball++] + this._throws[this._ball++];
  }
}

export default Game;
