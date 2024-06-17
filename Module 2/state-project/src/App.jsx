import React, { useState } from 'react';
import './App.css';
import Container from './Container';
import Elements from './Elements';

function App() {
  // State to manage the list of fruits
  const [fruits, setFruits] = useState(['Apple', 'Mango', 'Banana', 'Grapes']);

  // Function to handle key down event on input
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newFruit = event.target.value.trim();
      if (newFruit !== '') {
        const newFruits = [...fruits, newFruit]; // Create a new array with the new fruit added
        setFruits(newFruits); // Update the fruits state with the new array
        event.target.value = ''; // Clear the input field after adding the fruit
      }
    }
  };


  /*
  - Introduced state management for fruits using useState.
  - Added handleKeyDown function to handle adding new fruits when Enter key is pressed.
  - Passes handleKeyDown function to Container component as props.
  */

  return (
    <Container onKeyDown={handleKeyDown}>
      <Elements fruits={fruits} />
    </Container>
  );
}

export default App;
