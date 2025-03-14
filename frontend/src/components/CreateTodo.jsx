import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      />

      <button
        onClick={() => {
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo Added");
          });
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
