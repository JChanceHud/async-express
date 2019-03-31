module.exports = (handler) => {
  return (...args) => {
    let nextCalled = false;
    const next = args.pop();
    const _next = (..._args) => {
      if (nextCalled) return;
      nextCalled = true;
      next(..._args);
    };
    args.push(_next);
    return Promise.resolve(handler(...args))
      .then(() => _next())
      .catch(_next);
  }
};
