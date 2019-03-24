module.exports = (handler) => {
  return (...args) => Promise.resolve(handler(...args)).catch((err) => args.pop()(err));
};
