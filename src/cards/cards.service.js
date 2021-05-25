const knex = require("../db/connection");

function list(req, res, next) {
  return knex("cards").select("*");
}

function create(card) {
  return knex("cards").insert(card).returning("*");
}

function read({ cardId }) {
  return knex("cards").select("*").where({ id: cardId }).first();
}

module.exports = { list, create, read };
