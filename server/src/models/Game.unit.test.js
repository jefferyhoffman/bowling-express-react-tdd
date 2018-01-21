/* global expect */

import Game from "./Game";

describe("Game", () => {
  let g;
  
  beforeEach(() => {
    g = new Game();
  });
  
  describe("when there have been two throws and no mark", () => {
    it("should calculate the correct score", () => {
      g.add(5);
      g.add(4);
      expect(g.score()).toBe(9);
    });
  });
  
  describe("when there are four throws and no marks", () => {
    beforeEach(() => {
      g.add(5);
      g.add(4);
      g.add(7);
      g.add(2);
    });
    
    it("should calculate the correct score", () => {
      expect(g.score()).toBe(18);
    });
    
    it("should calculate the correct score for each frame", () => {
      expect(g.scoreForFrame(1)).toBe(9);
      expect(g.scoreForFrame(2)).toBe(18);
    });
  });
  
  describe("when there is a simple spare", () => {
    it("should calculate the correct bonus", () => {
      g.add(3);
      g.add(7);
      g.add(3);
      expect(g.scoreForFrame(1)).toBe(13);
    });
  });
});
