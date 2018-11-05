/* eslint-disable */
// const assert = require("assert");
// const websocket = require("../websocket");
// const sinon = require("sinon");
// const ws = require("ws");

// describe("Websocket testing", () => {
//   describe("Correctly initializes", () => {
//     it("should get object", () => {
//       assert(websocket);
//     });
//   });
//   describe("Connection tests", () => {
//     let connectSpy;

//     beforeEach(() => {
//       connectSpy = sinon.spy();
//       websocket.on("connection", connectSpy);
      
//     })

//     it("should return empty array connection list", () => {
//       const result = websocket.getAllConnections();
//       assert.deepStrictEqual(result, []);
//     });
//     it("should get a connection", () => {
//       const socket = new ws('ws://localhost:3000');
//       const callCount = connectSpy.callCount;

//       assert.strictEqual(callCount, 5);
//     })
//   });
// });

