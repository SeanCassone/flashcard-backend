const service = require("./decks.service");

async function list(req, res, next) {
  const data = await service.list(req.query);
  res.json({ data });
}
module.exports = { list };
