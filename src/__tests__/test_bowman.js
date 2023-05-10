import Character from "../app";
import Bowman from "../class/Bowman";

test("create new Bowman class", () => {
  const result = new Bowman("Oleg");
  expect(result instanceof Bowman).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Oleg",
    type: "Bowman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
