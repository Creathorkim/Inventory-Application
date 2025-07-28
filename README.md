# **Inventory Management App**

A full-stack Inventory Management Application built with **Node.js**, **Express.js**, **PostgreSQL**, **EJS**, and **Tailwind CSS (CDN)**.

## **About the Project**

This project is a CRUD-based inventory app that allows users to manage **Categories** and their associated **Items**. Users can:

- Create, Read, Update, and Delete categories.
- Create, Read, Update, and Delete items within each category.
- Protect destructive actions (edit and delete) with an **Admin Password Prompt**.
- Experience responsive UI styled with **Tailwind CSS via CDN**.
- Navigate with ease on mobile (with a working **hamburger menu**).
- Enjoy a clean separation of concerns using the **MVC architecture**.

## **What I Learned**

- Setting up a **PostgreSQL** database with table relationships and constraints.
- Writing raw **SQL queries** for reading, inserting, updating, and deleting data.
- Using **Express Router** and **controllers** to handle route logic cleanly.
- Handling route parameters (`req.params`) and form data (`req.body`).
- Protecting sensitive routes using a **password form**.
- Rendering views with **EJS** and conditionally displaying content.
- Making the UI responsive with **Tailwind CDN**.
- Deploying a dynamic app with a live database to **Render** and **GitHub**.

## **Tech Stack**

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Templating Engine:** EJS
- **Styling:** Tailwind CSS (via CDN)
- **Deployment:** Render (for server and database), GitHub

## **Features**

- Category & Item Management (CRUD)
- Admin Password Protection for Edit/Delete
- Responsive UI with Mobile Support
- Route protection using form prompt
- Dummy data seeding with SQL
- MVC architecture and modular codebase

## **Database Structure**

- **Category Table**
  - id (PK)
  - name
  - description

- **Item Table**
  - id (PK)
  - name
  - description
  - category_id (FK → Category)
  - quantity
  - price

- **Final Words**
 This project taught me more than just code. I learned patience, deep debugging, and how to solve real developer problems. I switched from trying Tailwind config to using CDN when my system broke, implemented full CRUD functionality with validation, and pushed through deployment issues to get my app live. This app is a milestone for me showing resilience, discipline, and growth.