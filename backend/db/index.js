const mongoose = require("mongoose");
// .env
mongoose.connect(
  "mongodb+srv://snorlaxkaran:mJoL3ehicdVz2C1f@react-todo-nodejs-appli.yfplu.mongodb.net/"
);

mJoL3ehicdVz2C1f;

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  Todo,
};
