'use client';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log('counter value in counter componets', count);
  return (
    <div>
      <h2 className="text-5xl">Counter: {count}</h2>
      <button
      onClick={()=> setCount(count + 1)}
        className="btn btn-primary">Increment</button>
    </div>
  );
};

export default Counter;
