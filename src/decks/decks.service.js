const knex = require("../db/connection");

function list(req, res, next) {
  return knex("decks").select("*");
}
module.exports = { list };
