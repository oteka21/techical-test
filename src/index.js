import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hot } from 'react-hot-loader/root';

class Root extends React.Component {
  render() {
    return <App />
  }
}

const TodoApp =  hot(Root);

const rootElement = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  rootElement
);
