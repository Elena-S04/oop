import Zombie from "../class/Zombie";

test("should make new Zombie", () => {
  const realZombie = new Zombie("Zulu");
  const expectedZombie = {
    name: "Zulu",
    type: "Zombie",
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(realZombie).toEqual(expectedZombie);
});
