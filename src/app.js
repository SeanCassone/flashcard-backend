const express = require("express");
const decksRouter = require("./decks/decks.router");
const cardsRouter = require("./cards/cards.router");
const app = express();

app.use("/cards", cardsRouter);
app.use("/decks", decksRouter);

module.exports = app;
