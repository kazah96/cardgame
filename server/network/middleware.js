class Middleware {
  constructor() {
    this.middleware = [];

    this.exec = this.exec.bind(this);
    this.addMiddleware = this.addMiddleware.bind(this);
    this.prependMiddleware = this.prependMiddleware.bind(this);
  }

  prependMiddleware(middleware) {
    if (typeof middleware === "function") {
      this.middleware.unshift(middleware);
      return;
    }

    throw new Error("Middleware should be a pure sync function");
  }

  addMiddleware(middleware) {
    if (typeof middleware === "function") {
      this.middleware.push(middleware);
      return;
    }

    throw new Error("Middleware should be a pure sync function");
  }

  exec(params, iteration) {
    if (params === undefined) throw new Error("Params cant be undef");
    if (params === null) return null;
    if (typeof params !== "object") throw new Error("Params should be an object");

    let i = iteration;
    if (i === undefined) i = this.middleware.length;

    if (i === 0) return params;

    const newParams = this.middleware[i - 1](params);
    return this.exec(newParams, i - 1);
  }
}

module.exports = Middleware;
