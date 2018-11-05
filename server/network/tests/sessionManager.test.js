/* eslint-disable */
const session = require("../sessionManager");
const userTypes = require("../userTypes");
const assert = require("assert");

describe("session middleware", () => {
  it("should return anonymous", () => {
    const recievedObj = {
      ws: {},
      msg: {}
    }

    const expectedResult = {
      ws: { session: { type: userTypes.anonymous } },
      msg: {}
    }


    const result = session(recievedObj);
    assert.deepStrictEqual(expectedResult, result);

  });

});

