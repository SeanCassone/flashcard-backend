const service = require("./decks.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function doesDeckExists(req, res, next) {
  const foundDeck = await service.read(req.params);
  if (!foundDeck) {
    return next({
      status: 404,
      message: `deck not found`,
    });
  }
  res.locals.deck = foundDeck;
  next();
}

async function read(req, res, next) {
  const data = res.locals.deck;
  res.json({ data });
}
async function list(req, res, next) {
  const data = await service.list(req.query);
  res.json({ data });
}

module.exports = {
  list,
  create,
  read: [asyncErrorBoundary(doesDeckExists), asyncErrorBoundary(read)],
};
