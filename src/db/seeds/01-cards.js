const cards = require("../fixtures/cards");
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex
    .raw("TRUNCATE TABLE cards RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("cards").insert(cards);
    });
};
