
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').delete()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: "Peanut Butter and jelly" },
        { recipe_name: "hotdog" }
        
      ]);
    });
};