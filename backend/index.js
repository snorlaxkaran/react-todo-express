const express = require("express");
const app = express();
const port = 3000;
app.use(express.json);

// title: string
// description: string

app.post("/todo", (req, res) => {
  //
});

app.get("/todos", (req, res) => {
  res.json({
    message: "",
  });
});

app.put("/completed", (req, res) => {
  //
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
