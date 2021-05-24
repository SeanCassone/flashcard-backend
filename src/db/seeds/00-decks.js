const decks = require("../fixtures/decks");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE decks RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("decks").insert(decks);
    });
};
