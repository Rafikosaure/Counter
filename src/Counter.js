import './Counter.css';
import { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="App">
        <button onClick={() => setCount(count-1)}>-</button>
        <div>{count}</div>
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
    </div>
  );
}

export default Counter;
