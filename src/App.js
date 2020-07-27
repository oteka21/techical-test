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

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
  ];

export default function App() {
  const [list, setList] = useState(todos);

  const handleTaskClick = todo => {
    const newList = [...list];
    newList[todo].complete = !newList[todo].complete
    setList(newList);
  };
  
  const handleAddTask = () => {
    const task = window.prompt('Add a new task!');
    if(!task){
      return
    }
    setList(list => ([...list, {task,complete: false}]))
  }

  const date = new Date();

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="card">
        <div className="header-container">
          <div className="date-container">
            <span className="day">{date.getDate()}</span>
            <div>
              <div>{months[date.getMonth()].substring(0,4)}</div>
              <div>{date.getFullYear()}</div>
            </div>
          </div>
          <div>{days[date.getDay()].toUpperCase()}</div>
        </div>
        <div className="todo-list">
          {list.map((todo, index) => {
            return (
              <div
                className="task"
                key={index}
                onClick={() => handleTaskClick(index)}
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
        <button type="button" className="plus-button" onClick={handleAddTask}>
          +
        </button>
      </div>
    </div>
  );
}
