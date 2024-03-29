// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  foreignKey: "tag_id",
  through: {
    model: ProductTag,
    unique: false,
  },
});

Product.belongsToMany(Tag, {
  foreignKey: "product_id",
  through: {
    model: ProductTag,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
