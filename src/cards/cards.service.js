const knex = require("../db/connection");

function list(req, res, next) {
  return knex("cards").select("*");
}
module.exports = { list };
