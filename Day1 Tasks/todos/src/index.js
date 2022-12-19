import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

/*
  INSTRUCTIONS:
  Create a "todo" app with the following criteria.
    1. The user can add new todo items
    2. The user can remove todo items
*/

function Todo() {
  const [input, setInput] = React.useState("")
  const [todoList, setTodoList] = React.useState(["drink"])

  const addTodo = () => {
    setTodoList([...todoList, ""+input])
  }

  const removeTodo = (index) => {
    setTodoList(todoList.filter(item=> todoList.indexOf(item)!== index))
  }

  console.log(input)
  return (
    <div>
      <div>
      <input placeholder="Enter Todo" onChange={e => setInput(e.target.value)} />
        <button
          style={{ margin: 10 }} onClick={addTodo}>ADD</button>
      </div>
      <ul>
        {
          todoList.map((item,index) => {
            return (
                <li>{item} <button onClick={()=> removeTodo(index)}>X</button></li>
            )
          })
        }
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Todo />);
