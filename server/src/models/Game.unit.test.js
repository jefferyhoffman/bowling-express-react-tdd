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
    it("should calculate the correct score", () => {
      g.add(3);
      g.add(7);
      g.add(3);
      expect(g.scoreForFrame(1)).toBe(13);
    });
  });
  
  describe("when there is a simple frame after a spare", () => {
    it("should calculate the correct score", () => {
      g.add(3);
      g.add(7);
      g.add(3);
      g.add(2);
      expect(g.scoreForFrame(1)).toBe(13);
      expect(g.score()).toBe(18);
    });
  });
  
  describe("when there is a simple strike", () => {
    it("should calculate the correct score", () => {
      g.add(10);
      g.add(3);
      g.add(6);
      expect(g.scoreForFrame(1)).toBe(19);
      expect(g.score()).toBe(28);
    });
  });
  
  describe("when there is a perfect game", () => {
    it("should calculate the correct score", () => {
      for (let i = 0; i < 12; i++) {
        g.add(10);
      }
      expect(g.score()).toBe(300);
    });
  });
  
  describe("when an example game is simulated", () => {
    it("should calculate the correct score", () => {
      g.add(1);
      g.add(4);
      g.add(4);
      g.add(5);
      g.add(6);
      g.add(4);
      g.add(5);
      g.add(5);
      g.add(10);
      g.add(0);
      g.add(1);
      g.add(7);
      g.add(3);
      g.add(6);
      g.add(4);
      g.add(10);
      g.add(2);
      g.add(8);
      g.add(6);
      expect(g.score()).toBe(133);
    });
  });
});
