const knex = require("../db/connection");

function list() {
  return knex("decks").select("*");
}

function create(deck) {
  return knex("decks").insert(deck).returning("*");
}

module.exports = { list, create };
