import React, { useState } from "react";
import "./styles.css";

const todos = [
  {
    id: 1,
    task: "Buy new sweatshirt",
    complete: true
  },
  {
    id: 2,
    task: "Read article",
    complete: false
  },
  {
    id: 3,
    task: "Watch sherlock",
    complete: false
  },
  {
    id: 4,
    task: "Go for a Walk",
    complete: false
  }
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendsday",
  "Thursday",
  "Fryday",
  "Saturday"
];

export default function App() {
  const [list, setList] = useState(todos);

  const handleTaskClick = todo => {
    let newTodo;
    if (todo.complete) {
      newTodo = { ...todo, complete: false };
    } else {
      newTodo = { ...todo, complete: true };
    }
    const newList = list.filter(task => task.id !== todo.id);
    setList([...newList]);
    setList([newTodo, ...newList]);
  };

  const date = new Date();

  return (
    <div className="App">
      <div className="card">
        <div className="header-container">
          <div />
          <div>{days[date.getDay()]}</div>
        </div>
        <div className="todo-list">
          {list.map((todo, index) => {
            return (
              <div
                className="task"
                key={index}
                onClick={() => handleTaskClick(todo)}
              >
                <p style={{ color: todo.complete ? "#D7D9DE" : "" }}>
                  {todo.task}
                </p>
                <span
                  className="complete-task"
                  style={{ background: todo.complete ? "#7cdfa9" : "" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
