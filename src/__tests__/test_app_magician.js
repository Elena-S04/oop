import Magician from "../class/Magician";

test("should make new Magician", () => {
  const realMagician = new Magician("Alex");
  const expectedMagician = {
    name: "Alex",
    type: "Magician",
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(realMagician).toEqual(expectedMagician);
});
