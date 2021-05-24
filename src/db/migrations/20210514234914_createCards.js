exports.up = function (knex) {
  /**  getting error here Error: Error while executing
   * "C:\Users\Sean\code\backend\flashcard-backend\src\db\seeds\01-cards.js"
   *  seed: insert into "cards" ("back", "deckId", "front")
   *  values ($1, $2, $3), ($4, $5, $6), ($7, $8, $9), ($10, $11, $12), ($13, $14, $15), ($16, $17, $18)
   *  - insert or update on table "cards" violates foreign key constraint "cards_id_foreign"
   */
  return knex.schema.createTable("cards", (table) => {
    table.increments("id").primary();
    table.string("front");
    table.string("back");
    table.integer("deckId").unsigned().notNullable();
    table
      .foreign("deckId")
      .references("id")
      .inTable("decks")
      .onDelete("cascade");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("cards");
};
