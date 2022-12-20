import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

/*
  Instructions:
    You're given the UI for a basic form. Your task is to
    hook it all up using refs.

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to
    empty strings.
*/

function Form() {
  const nRef = React.useRef()
  const eRef = React.useRef()
  const pRef = React.useRef()

  const handleSubmit = e => {
    e.preventDefault()

    const name = nRef.current.value;
    const email = eRef.current.value;
    const password = pRef.current.value;

    console.log(name, email, password);
  }

  const handleReset = () => {
    nRef.current.value=""
    eRef.current.value=""
    pRef.current.value=""
  }

  return (
    <React.Fragment>
      <label>
        Name:
        <input
          placeholder="name"
          type="text"
          ref={nRef}
        />
      </label>
      <label>
        Email:
        <input
          placeholder="email"
          type="text"
          ref={eRef}
        />
      </label>
      <label>
        Password:
        <input
          placeholder="password"
          type="text"
          ref={pRef}
        />
      </label>

      <hr />

      <button onClick={()=>{nRef.current.focus()}}>
        Focus Name Input
      </button>
      <button onClick={()=>{eRef.current.focus()}}>
        Focus Email Input
      </button>
      <button onClick={()=>{pRef.current.focus()}}>
        Focus Password Input
      </button>

      <hr />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </React.Fragment>
  )
}
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<Form />);
