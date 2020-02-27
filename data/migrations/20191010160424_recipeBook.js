
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
    tbl.increments();
    tbl.string('recipeName', 128)
      .notNullable()
      .unique();
  })
  .createTable('steps', tbl => {
    tbl.increments();
    tbl.integer('stepNum',5)
        .unsigned()
        .notNullable();
      tbl.text('instructions',255)
        .notNullable();
      tbl.integer('recipe_id',5)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredientName', 128)
      .notNullable()
      .unique();
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.integer('recipe_id',5)
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl.integer('ingredient_id',5)
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    tbl.primary(['recipe_id', 'ingredient_id'])
    tbl.float('quantity',5)
      .notNullable()
    tbl.string('measurement',128)
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
