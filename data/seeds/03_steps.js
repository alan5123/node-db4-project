exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
      {step_number: 1, instructions:"Spread peanut butter on piece of bread", recipe_id: 1, ingredients_id:1 },

      {step_number: 2, instructions:"Spread Jelly on piece of bread", recipe_id: 1, ingredients_id:2 },

      {step_number: 3, instructions:"Put Pieces of bread together", recipe_id: 1, ingredients_id:3 },
      ]);
    });
};