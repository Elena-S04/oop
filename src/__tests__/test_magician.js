import Character from "../app";
import Magician from "../class/Magician";

test("create new Magician class", () => {
  const result = new Magician("Marisha");
  expect(result instanceof Magician).toBe(true);
  expect(result instanceof Character).toBe(true);
  expect(result).toEqual({
    name: "Marisha",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
