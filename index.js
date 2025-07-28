const express = require("express");
require("dotenv").config();
const app = express();
const path = require("path");
const indexRouter = require("./routes/appRouter");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
