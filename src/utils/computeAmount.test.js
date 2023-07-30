const computeAmount = require("./computeAmount");

test("compute amount for <= 2 hours", () => {
  expect(
    computeAmount(
      Date("2023-07-28T11:40:00.000Z"),
      Date("2023-07-28T11:40:00.000Z")
    )
  ).toBe(20);
});
