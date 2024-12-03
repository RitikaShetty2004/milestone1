const express = require("express");
const bodyParser = require("body-parser");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());  // Parse JSON request body
app.use("/api", expenseRoutes);  // Make sure this line is present

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

