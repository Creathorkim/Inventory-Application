#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();

const Sql = `
    DROP TABLE IF EXISTS items;
    DROP TABLE IF EXISTS categories;
    CREATE TABLE categories(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT NOT NULL);
    CREATE TABLE items(id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT NOT NULL, description TEXT NOT NULL, price INTEGER, 
    category_id INTEGER REFERENCES categories(id));

    INSERT INTO categories(name) VALUES('Laptops'), ('Phones'), ('Tablets');
    INSERT INTO items(name,description,price,category_id) VALUES('Macbook Air','Lightweight and powerful laptop from Apple','4000', 1), 
    ('iPhone 14','Latest iPhone model with iOS','2000', 2), ('Samsung Galaxy Tab','Android-powered tablet','400', 3),('Dell XPS 13','Premium ultrabook from Dell', '950', 1)
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    console.log("Seeding");
    await client.connect();
    await client.query(Sql);
    console.log("Done seeding");
  } catch (err) {
    console.log("Error :", err);
  } finally {
    await client.end();
  }
}

main();
