import React, { useState } from 'react';
import "./App.css";

const App = () => {
    const [count, setCount] = useState(0);
    const Decrease =() => setCount(count -1);
    const Increase =() => setCount(count +1);
    const Reset =() => setCount(0);
    const color = count  > 0 ? "green" : count < 0 ? "red": "black";
  return (
    <div>
      <div id="container">
            <h1> Counter</h1>
            <span style={{color : color}} class="value"> {count} </span>
            <div class = "btn">
              <button onClick={Decrease} class="button Decrease">Decrease</button>
              <button onClick={Reset} class="button Reset">Reset</button>
              <button onClick={Increase} class="button Increase">Increase</button>
            </div>
        </div>
    </div>
  )
}

export default App