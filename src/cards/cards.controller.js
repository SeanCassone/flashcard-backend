const service = require("./cards.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function create(req, res, next) {
  const data = await service.create(req.body.data);
  res.status(201).json({ data });
}

async function cardExists(req, res, next) {
  const foundCard = await service.read(req.params);
  if (!foundCard) {
    next({ status: 404, message: `card nont found cardId: ${req.params}` });
  }
  res.locals.card = foundCard;
  return next();
}

async function read(req, res, next) {
  const data = res.locals.card;
  res.json({ data });
}

async function list(req, res, next) {
  const data = await service.list(req.query);
  res.json({ data });
}

module.exports = {
  list,
  create: asyncErrorBoundary(create),
  read: [asyncErrorBoundary(cardExists), asyncErrorBoundary(read)],
};
