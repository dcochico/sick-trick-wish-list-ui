import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Card from './Card/Card';



const App = () => {
  const [tricks, setTricks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tricks')
      .then(res => res.json())
      .then(data => setTricks(data))
  }, [])

  const trickCards = tricks.map(trick => {
    return (
      <Card 
        key = {trick.id}
        stance = {trick.stance}
        name = {trick.name}
        obstacle = {trick.obstacle}
        tutorial = {trick.tutorial}
      />
    )
  })

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <div className="tricks-container">{trickCards}</div>
    </div>
  );
}

export default App; 
