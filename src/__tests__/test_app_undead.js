import Undead from "../class/Undead";

test("should make new Undead", () => {
  const realUndead = new Undead("Zaya");
  const expectedUndead = {
    name: "Zaya",
    type: "Undead",
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(realUndead).toEqual(expectedUndead);
});
