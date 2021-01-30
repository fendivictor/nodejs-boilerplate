exports.up = function (knex, Promise) {
  return knex.schema.createTable("Book", function (table) {
    table.increments("id").primary();
    table.string("judul").notNullable();
    table.string("sinopsis");
    table.string("penulis");
    table.timestamp("createdAt", { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp("updatedAt", { useTz: true });
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("Book");
};
