import Character from "../app";
import Zombie from "../class/Zombie";

test("create new Zombie class", () => {
  const result = new Zombie("Zoya");
  expect(result instanceof Zombie).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Zoya",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
