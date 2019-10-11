
exports.seed = function(knex) {
      return knex('ingredients').insert([
        {id: 1, ingredientName: 'egg'},
        {id: 2, ingredientName: 'cocoa powder'},
        {id: 3, ingredientName: 'sugar'},
        {id: 4, ingredientName: 'bread'},
        {id: 5, ingredientName: 'cheese'}
      ]);
};
