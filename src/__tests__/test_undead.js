import Character from "../app";
import Undead from "../class/Undead";

test("create new Undead class", () => {
  const result = new Undead("Ilya");
  expect(result instanceof Undead).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Ilya",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
