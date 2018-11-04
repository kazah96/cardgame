const { session, userTypes } = require("../network/sessionManager");

it("should return anonymous", () => {
  const socket = {
    id: 4,
  };
  const expectedResult = userTypes.anonymous;

  const result = session(socket);

  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult} but got ${result}`);
  }
});
