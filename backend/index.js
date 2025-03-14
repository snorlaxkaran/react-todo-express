const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const port = 3000;
app.use(express.json);

// title: string
// description: string

app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Your sent the wrong inputs",
    });
    return;
  }

  // Put it in mongoDB
});

app.get("/todos", (req, res) => {});

app.put("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You sent the wrong inputs",
    });

    return;
  }

  //   Put it in mongoDB
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
