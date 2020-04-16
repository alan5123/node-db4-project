exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').delete()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredients_name: "Peanut Butter", quantity: "1 Scoop", recipe_id: 1 },
        { ingredients_name: "Jelly", quantity: "1 Scoop", recipe_id: 1 },
        { ingredients_name: "Bread", quantity: "2 Pieces", recipe_id: 1 },
        
      ]);
    });
};