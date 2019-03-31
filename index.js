module.exports = (handler) => {
  return (...args) => {
    let nextCalled = false;
    const next = args.pop();
    const _next = () => {
      if (nextCalled) return;
      nextCalled = true;
      next();
    };
    args.push(_next);
    return Promise.resolve(handler(...args))
      .then(() => next())
      .catch(_next)
  }
};
