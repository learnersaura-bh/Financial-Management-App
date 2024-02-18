const express = require("express");
const cors = require("cors");
const initialiseDatabase = require("./db/db.connection");

const incomeRouter = require("./routes/income.route");
const savingRouter = require("./routes/saving.route");
const expenseRouter = require("./routes/expense.route");

const app = express();

const PORT = process.env.PORT || 3000;
initialiseDatabase();

app.use(cors());
app.use(express.json());
app.use("/income", incomeRouter);
app.use("/saving", savingRouter);
app.use("/expense", expenseRouter);

app.get("/", (req, res) => {
  res.send("Financial Management API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
