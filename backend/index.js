const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo, todo } = require("./db");
const app = express();
const cors = require("cors");
const port = 3000;
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      message: "Your sent the wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", async (req, res) => {
  const all_todos = await todo.find({});
  res.json({
    Todos: all_todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      message: "You sent the wrong inputs",
    });

    return;
  }

  await Todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
