const knex = require("../db/connection");

function list() {
  return knex("decks").select("*");
}

function create(deck) {
  return knex("decks").insert(deck).returning("*");
}

function read({ deckId }) {
  return knex("decks").select("*").where({ id: deckId }).first();
}
module.exports = { list, create, read };
