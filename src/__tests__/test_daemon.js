import Character from "../app";
import Daemon from "../class/Daemon";

test("create new Daemon class", () => {
  const result = new Daemon("Ivan");
  expect(result instanceof Daemon).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Ivan",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
