import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';



const App = () => {
  const [tricks, setTricks] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(res => res.json())
      .then(data => setTricks(data))
  }, [])

  console.log(tricks)

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
    </div>
  );
}

export default App; 
