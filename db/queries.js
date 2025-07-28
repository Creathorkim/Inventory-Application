const pool = require("./pool");

const getAllCategories = async () => {
  const result = await pool.query("SELECT * FROM categories ORDER BY NAME");
  return result.rows;
};

const getAllItems = async (id) => {
  const result = await pool.query(
    `SELECT * FROM items  WHERE category_id = $1 ORDER BY items.name`,
    [id]
  );
  return result.rows;
};

const getItem = async (id) => {
  const result = await pool.query(
    `SELECT * FROM items  WHERE id = $1 ORDER BY items.name`,
    [id]
  );
  return result.rows[0];
};

const addNewCategory = async (name) => {
  await pool.query("INSERT INTO categories(name) VALUES($1)", [name]);
};

const addNewItem = async (name, description, id) => {
  await pool.query(
    "INSERT INTO items(name,description,category_id) VALUES($1, $2, $3)",
    [name, description, id]
  );
};

const updateItem = async (name, description, price, id) => {
  const result = await pool.query(
    "UPDATE items SET name =$1, description =$2, price = $3  WHERE id=$4",
    [name, description, price, id]
  );
  return result.rows;
};

const deleteItem = async (id) => {
  await pool.query("DELETE FROM items WHERE id = $1", [id]);
};
module.exports = {
  getAllCategories,
  getAllItems,
  addNewCategory,
  addNewItem,
  updateItem,
  deleteItem,
  getItem,
};
