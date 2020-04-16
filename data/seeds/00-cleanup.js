exports.seed = function (knex) {
    return knex("steps")
      .truncate()
      .then(() => {
        return knex("ingredients").truncate();
      })
      .then(() => {
        return knex("recipes").truncate();
      });
  };