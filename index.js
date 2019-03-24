module.exports = (handler) => {
  // args are [req, res, next], the catch function pops the last argument and
  // gives it whatever error is received (the equivalent of next(err)).
  //
  // The pop operation modifies the array so it's wrapped in an arrow function
  // instead of being passed directly (if we get to the error handler we can 
  // manipulate args as it's done being used by the handler).
  return (...args) => Promise.resolve(handler(...args)).catch((err) => args.pop()(err));
};
