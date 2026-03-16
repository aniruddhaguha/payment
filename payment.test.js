const checkPayment = require('./payment');

describe("checkPayment()", () => {

  test("amount greater than 100 is accepted", () => {
    expect(checkPayment(150)).toEqual({
      success: true,
      message: "Payment accepted."
    });
  });

  test("amount equal to 100 is accepted", () => {
    expect(checkPayment(100)).toEqual({
      success: true,
      message: "Payment accepted."
    });
  });

  test("amount less than 100 is rejected", () => {
    expect(checkPayment(99)).toEqual({
      success: false,
      message: "Payment rejected."
    });
  });

  test("amount 0 is invalid", () => {
    expect(checkPayment(0)).toEqual({
      success: false,
      message: "Invalid amount."
    });
  });

  test("negative amount is invalid", () => {
    expect(checkPayment(-50)).toEqual({
      success: false,
      message: "Invalid amount."
    });
  });

  test("small positive decimal below 100 is rejected", () => {
    expect(checkPayment(0.01)).toEqual({
      success: false,
      message: "Payment rejected."
    });
  });

  test("decimal below 100 is rejected", () => {
    expect(checkPayment(99.99)).toEqual({
      success: false,
      message: "Payment rejected."
    });
  });

  test("decimal above 100 is accepted", () => {
    expect(checkPayment(100.01)).toEqual({
      success: true,
      message: "Payment accepted."
    });
  });

  test("string input is invalid", () => {
    expect(checkPayment("150")).toEqual({
      success: false,
      message: "Invalid amount."
    });
  });

  test("null input is invalid", () => {
    expect(checkPayment(null)).toEqual({
      success: false,
      message: "Invalid amount."
    });
  });

  test("undefined input is invalid", () => {
    expect(checkPayment(undefined)).toEqual({
      success: false,
      message: "Invalid amount."
    });
  });

  test("NaN input is invalid", () => {
    expect(checkPayment(NaN)).toEqual({
      success: false,
      message: "Invalid amount."
    });
  });

  test("boolean true input is invalid", () => {
    expect(checkPayment(true)).toEqual({
      success: false,
      message: "Invalid amount."
    });
  });

  test("boolean false input is invalid", () => {
    expect(checkPayment(false)).toEqual({
      success: false,
      message: "Invalid amount."
    });
  });

  test("very large amount is accepted", () => {
    expect(checkPayment(1000000)).toEqual({
      success: true,
      message: "Payment accepted."
    });
  });

});