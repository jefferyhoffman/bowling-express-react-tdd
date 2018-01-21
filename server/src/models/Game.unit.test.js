/* global expect */

import Game from "./Game";

describe("Game", () => {
  describe("when there have been two throws and no mark", () => {
    it("should calculate the correct score", () => {
      const g = new Game();
      g.add(5);
      g.add(4);
      expect(g.score()).toBe(9);
    });
  });
});
