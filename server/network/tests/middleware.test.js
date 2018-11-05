/* eslint-disable */
const assert = require("assert");
const middleware = require("../middleware");
const sessionManager = require("../sessionManager");

describe("Middleware class testing", () => {
  it("Should return original object", () => {
    const middlewareManager = new middleware();

    const expectedResult = { type: 5 };
    const result = middlewareManager.exec({ type: 5 });

    assert.deepStrictEqual(expectedResult, result);
  });
  it("Should throw error", () => {
    const middlewareManager = new middleware();

    assert.throws(() => middlewareManager.exec(534), "sdsa");
  });
  it("Should throw error", () => {
    const middlewareManager = new middleware();

    assert.throws(() => middlewareManager.exec(), "sdsa");
  });
  it("Should not throw error", () => {
    const middlewareManager = new middleware();

    assert.doesNotThrow(() => middlewareManager.exec(null), "sdsa");
  });
  it("Should throw error when not function", () => {
    const middlewareManager = new middleware();

    assert.throws(() => middlewareManager.addMiddleware(5));
  });
  it("Should throw error when not function", () => {
    const middlewareManager = new middleware();

    assert.throws(() => middlewareManager.addMiddleware());
  });
  it("should return modified objkect", () => {
    const middlewareManager = new middleware();

    const pureFunction = (object) => {
      object.x += 10;
      return object;
    }

    const originalObject = { x: 10 };
    const expectedResult = { x: 20 };

    middlewareManager.addMiddleware(pureFunction);
    const result = middlewareManager.exec(originalObject);

    assert.deepStrictEqual(expectedResult, result);

  });

  it("shoult return null", () => {

    const someMiddleware = (obj) => {
      return {x: 5};
    }

    const someMiddlewareReturningNull = (obj) => {
      return null;
    }

    const middlewareManager = new middleware();

    const originalObject = { ws: { bok: 10 }, msg: { type: "qq" } };

    const expectedResult = null;

    middlewareManager.addMiddleware(someMiddleware);
    middlewareManager.addMiddleware(someMiddlewareReturningNull);
    middlewareManager.addMiddleware(someMiddleware);

    const result = middlewareManager.exec(originalObject);

    assert.strictEqual(expectedResult, result);
  })
  it("should return modified objkect", () => {
    const middlewareManager = new middleware();

    const pureFunction = (object) => {
      object.x *= 2;
      return object;
    }

    const originalObject = { x: 1, y: 124 };
    const expectedResult = { x: 16, y: 124 };

    middlewareManager.addMiddleware(pureFunction);
    middlewareManager.addMiddleware(pureFunction);
    middlewareManager.addMiddleware(pureFunction);
    middlewareManager.addMiddleware(pureFunction);

    const result = middlewareManager.exec(originalObject);

    assert.deepStrictEqual(expectedResult, result);

  });
  it("should add session", () => {

    const middlewareManager = new middleware();
    const originalObject = { ws: { bok: 10 }, msg: { type: "qq" } };
    const expectedResult = {
      ws: { bok: 10, session: { type: "ANONYMOUS" } },
      msg: { type: "qq" }
    };

    middlewareManager.addMiddleware(sessionManager);

    const result = middlewareManager.exec(originalObject);


    assert.deepStrictEqual(expectedResult, result);
  })
});
