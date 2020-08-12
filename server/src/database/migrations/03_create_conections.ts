import knex from "knex";

export async function up(knex: knex) {
  return knex.schema.createTable("connections", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.timestamp("create_at").defaultTo("now()").notNullable();
  });
} // faz altereções

export async function down(knex: knex) {
  return knex.schema.dropTable("connections");
} // desfaz as alterações caso de algum problema
