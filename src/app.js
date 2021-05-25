const express = require("express");
const decksRouter = require("./decks/decks.router");
const cardsRouter = require("./cards/cards.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const app = express();
app.use(express.json());

app.use("/decks", decksRouter);
app.use("/cards", cardsRouter);

// app.use(notFound);
// app.use(errorHandler);

module.exports = app;
