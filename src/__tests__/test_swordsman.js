import Character from "../app";
import Swordsman from "../class/Swordsman";

test("create new Swordsman class", () => {
  const result = new Swordsman("Slava");
  expect(result instanceof Swordsman).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Slava",
    type: "Swordsman",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
