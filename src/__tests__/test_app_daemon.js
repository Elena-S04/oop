import Daemon from "../class/Daemon";

test("should make new Daemon", () => {
  const realDaemon = new Daemon("Ivan");
  const expectedDaemon = {
    name: "Ivan",
    type: "Daemon",
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(realDaemon).toEqual(expectedDaemon);
});
