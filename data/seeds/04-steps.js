
exports.seed = function(knex) {

      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: "Mix egg, cocoa powder, and sugar in a mug.", recipe_id: 1},
        {id: 2, step_number: 2, instructions: "Nuke it in the microwave for 50 seconds.", recipe_id: 1},
        {id: 3, step_number: 1, instructions: "Place Slice of cheese between to pieces of bread.", recipe_id: 2},
        {id: 4, step_number: 2, instructions: "Toast till bread is brown and cheese is melted.", recipe_id: 2}
      ]);
};
