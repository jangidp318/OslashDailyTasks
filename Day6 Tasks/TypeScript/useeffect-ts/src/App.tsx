import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[count]);

  return (
    <div className="App">
      <h1>I've rendered {count} times!</h1>
    </div>
  );
}

export default App;
