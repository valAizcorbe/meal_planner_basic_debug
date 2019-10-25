module.exports = {
  addMeal: (req, res) => {
    const db = req.app.get("db");
    // console.log(req.body);
    db.add_meal(req.body[0], req.body[1], req.body[2], req.body[3], req.body[4])
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },
  editMeal: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.edit_meal(
      req.body[0],
      req.body[1],
      req.body[2],
      req.body[3],
      req.body[4],
      id
    )
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },
  getMealsByCategory: (req, res) => {
    const db = req.app.get("db");
    const { category } = req.params;
    console.log(req.params);
    db.get_meal_by_category(category)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  },
  deleteMeal: (req, res) => {
    const db = req.app.get("db");
    const { id, category } = req.params;

    db.delete_meal(id, category)
      .then(data => res.status(200).send(data))
      .catch(err => console.log(err));
  }
};
