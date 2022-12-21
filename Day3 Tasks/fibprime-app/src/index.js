import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NthFib from './NthFib'
import NthPrime from './NthPrime'


function App() {
  const [fibCount, setFibCount] = React.useState(1);
  const [primeCount, setPrimeCount] = React.useState(1);
  const addTen =()=>{
    setFibCount(c=>c+10)
    setPrimeCount(c=>c+10)
  }
  const reset = () => {
    setFibCount(1)
    setPrimeCount(1)
  }

  return (
    <React.Fragment>
      <button onClick={addTen}>Add 10</button>
      <button onClick={reset}>Reset</button>
      <hr />
      <NthFib count={fibCount} increment={()=>{setFibCount(fibCount+1)}}/>
      <NthPrime count={primeCount} increment={()=>{setPrimeCount(primeCount+1)}}/>
    </React.Fragment>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
