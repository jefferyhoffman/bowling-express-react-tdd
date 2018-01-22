class Scorer {
  constructor() {
    this.throws = new Array(21);
    this.currentThrow = 0;
  }

  addThrow(pins) {
    this.throws[this.currentThrow++] = pins;
  }

  scoreForFrame(frameNumber) {
    let score = 0;

    this.ball = 0;
    for (let currentFrame = 0; currentFrame < frameNumber; currentFrame++) {
      if (this.strike()) score += 10 + this.nextTwoBalls();
      else if (this.spare()) score += 10 + this.nextBall();
      else score += this.twoBallsInFrame();
    }

    return score;
  }

  strike() {
    if (this.throws[this.ball] === 10) {
      this.ball++;
      return true;
    }
    return false;
  }

  spare() {
    if (this.throws[this.ball] + this.throws[this.ball + 1] === 10) {
      this.ball += 2;
      return true;
    }
    return false;
  }

  nextTwoBalls() {
    return this.throws[this.ball] + this.throws[this.ball + 1];
  }

  nextBall() {
    return this.throws[this.ball];
  }

  twoBallsInFrame() {
    return this.throws[this.ball++] + this.throws[this.ball++];
  }
}

export default Scorer;
