import Bowman from "../class/Bowman";

test("should make new Bowman", () => {
  const realBowman = new Bowman("Oleg");
  realBowman.levelUp();
  const expectedBowman = {
    name: "Oleg",
    type: "Bowman",
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
  };

  expect(realBowman).toEqual(expectedBowman);
});
test("should not level up the character", () => {
  const realBowman = new Bowman("Oleg");
  realBowman.damage(150);
  expect(() => realBowman.levelUp()).toThrow(
    new Error("Нельзя повысить уровень умершего!")
  );
});

test("should not level up the character", () => {
  const realBowman = new Bowman("Oleg");
  realBowman.damage(160);
  expect(() => realBowman.damage(90)).toThrow(new Error("Получено ранение"));
});

test("should make new Bowman with damage 10", () => {
  const realBowman = new Bowman("Oleg");
  realBowman.damage(10);

  expect(realBowman.health).toEqual(92.5);
});

test("should not make new Bowman because of incorrect type of character", () => {
  expect(() => new Bowman("Oleg", "Bowmans")).toThrow(
    new Error("Недопустимый тип персонажа")
  );
});

test("should not make new Bowman because of incorrect number of letters in name of character", () => {
  expect(() => new Bowman({ name: "C", type: "Bowman" })).toThrow(
    new Error("Имя должно содержать не менее 2, но не более 10 символов")
  );
});
