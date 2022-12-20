import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds.

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/




function CounterGame () {
  const [start, setStart] = useState(false)
  const [timer, setTimer] = useState(10)
  const [clicks, setClicks] = useState(0)
  const countClick = (clicks) => {
    setClicks(clicks=>clicks+1)
  }

  if(start){
    const myTimer = window.setInterval(()=>{
      setTimer(timer-1)
      if(timer === 1){
        setStart(false)
        setTimer(10)
      }
    return clearInterval(myTimer)
    },1000)
  }

  if(!start){
    window.setTimeout(()=>{
      setClicks(0)
    },3000)
  }

  return (
    <div className="App">
      {timer}
      <hr/>
      <button onClick={()=>{
        setStart(true)
      }}>start</button>
      <hr/>
      {clicks}
      <hr/>
      {start?
      <button onClick={(clicks)=>countClick(clicks)}>Click</button>
      :<></>
      }
      
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<CounterGame />);

