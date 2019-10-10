
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipe_name', 128)
      .notNullable();
  })
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('scheme_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredient_name', 128)
      .notNullable();
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl.primary(['recipe_id', 'ingredient_id'])
    tbl.float('quantity')
      .notNullable();
  });
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
  
};
