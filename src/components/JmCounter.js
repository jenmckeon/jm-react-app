import React, { useState, useEffect } from 'react';
import '../App.css';
import '../index.css'; 

const JmCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-xl text-slate-900 font-bold pb-6">Counter: {count}</h2>
      <button className="bg-pink-500 text-white w-full px-8 py-3 outline-pink-500 rounded-full mb-2" onClick={() => setCount(count + 1)}>Increase</button>
      <button className="text-pink-500 w-full px-8 py-3 border-solid border-2 border-pink-500 rounded-full mb-2" onClick={() => setCount(count - 1)}>Decrease</button>
      <button className="p-0 text-slate-900 no-underline mb-8" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default JmCounter;