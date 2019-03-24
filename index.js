module.exports = (handler) => {
  return (req, res, next) => handler(req, res, next).then(next).catch(next);
};
