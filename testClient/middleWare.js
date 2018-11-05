class Middleware {
  constructor() {
    this.middleware = [];
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

    let i = iteration;
    if (i === undefined) i = this.middleware.length;

    if (iteration === 0) return params;

    return this.exec(params, i);
  }
}

global.qq = new Middleware();
