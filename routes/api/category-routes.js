const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all categories
  const categories = await Category.findAll().catch((err) => {
    res.json(err);
  });
  res.json(categories);
  // be sure to include its associated Products
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findByPk(req.params.id);

    if (category === null) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: "category not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
  // TODO be sure to include its associated Products
});

router.post("/", (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    // 200 status code means the request is successful
    res.status(200).json(category);
  } catch (err) {
    // 400 status code means the server could not understand the request
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  const category = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(category);
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  const category = await Category.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(category);
});

module.exports = router;
