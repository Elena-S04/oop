import Swordsman from "../class/Swordsman";

test("should make new Swordsman", () => {
  const realSwordsman = new Swordsman("Alena");
  const expectedSwordsman = {
    name: "Alena",
    type: "Swordsman",
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(realSwordsman).toEqual(expectedSwordsman);
});
