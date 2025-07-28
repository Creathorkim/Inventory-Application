require("dotenv").config();
const categories = require("../db/queries");

const listCategories = async (req, res) => {
  const { id } = req.params;
  const category = await categories.getAllCategories();
  const items = await categories.getAllItems(id);
  const categoryId = id;
  res.render("index", {
    category: category,
    items: items,
    categoryId: categoryId,
  });
};

const addNewCategoryGet = async (req, res) => {
  res.render("addCategory.ejs");
};

const addNewCategoryPost = async (req, res) => {
  const { category } = req.body;
  await categories.addNewCategory(category);
  res.redirect("/");
};

const addNewItemGet = (req, res) => {
  const { id } = req.params;
  const categoryId = id;
  res.render("addItem.ejs", {
    categoryId: categoryId,
  });
};

const addNewItemPost = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await categories.addNewItem(name, description, id);
  res.redirect(`/categories/${id}/items`);
};

const authoriseEditGet = (req, res) => {
  res.render("authoriseEdit");
};
const authoriseEditPost = (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const { id } = req.params;
  if (password === adminPassword) {
    res.redirect(`/items/${id}/edit-zz9xBsecure`);
  } else {
    res.send("Unauthorised: You don't have access pal");
  }
};

const authoriseDeleteGet = (req, res) => {
  res.render("authoriseDelete");
};

const authoriseDeletePost = async (req, res) => {
  const { password } = req.body;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const { id } = req.params;

  console.log("Submitted password:", password);
  console.log("Admin password:", adminPassword);

  if (password === adminPassword) {
    res.redirect(`/items/${id}/delete-zz9opBsecure`);
  } else {
    res.send("Unauthorised: You don't have access to this");
  }
};

const editItemGet = async (req, res) => {
  const { id } = req.params;
  const data = await categories.getItem(id);
  res.render("edit", {
    data: data,
  });
};

const editItemPost = async (req, res) => {
  const { name, description,price} = req.body;
  const { id } = req.params;
  await categories.updateItem(name, description,price, id);
  res.redirect("/");
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  await categories.deleteItem(id);
  res.redirect("/");
};
module.exports = {
  listCategories,
  addNewCategoryGet,
  addNewCategoryPost,
  addNewItemGet,
  addNewItemPost,
  authoriseEditGet,
  authoriseEditPost,
  authoriseDeleteGet,
  authoriseDeletePost,
  editItemGet,
  editItemPost,
  deleteItem,
};
