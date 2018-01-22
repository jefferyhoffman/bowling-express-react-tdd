import Scorer from "./Scorer";

class Game {
  constructor() {
    this.currentFrame = 0;
    this.firstThrowInFrame = true;
    this.scorer = new Scorer();
  }

  score() {
    return this.scoreForFrame(this.currentFrame);
  }

  add(pins) {
    this.scorer.addThrow(pins);
    this.adjustCurrentFrame(pins);
  }

  adjustCurrentFrame(pins) {
    if (this.firstThrowInFrame) {
      if (this.adjustFrameForStrike(pins) === false)
        this.firstThrowInFrame = false;
    } else {
      this.firstThrowInFrame = true;
      this.advanceFrame();
    }
  }

  adjustFrameForStrike(pins) {
    if (pins === 10) {
      this.advanceFrame();
      return true;
    }
    return false;
  }

  advanceFrame() {
    this.currentFrame = Math.min(10, this.currentFrame + 1);
  }

  scoreForFrame(frameNumber) {
    return this.scorer.scoreForFrame(frameNumber);
  }
}

export default Game;
