import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import { update } from 'firebase/database'

function App() {

  const [inputValue, setInputValue] = useState('')
  //  we have maintained a common state here because both the components were changing the state together so better that we use it here

  const onButtonClick = (buttonText) => {
    console.log(buttonText)

    if (buttonText === 'C') {
      setInputValue('')
    }
    else if (buttonText === '=') {
      const result = eval(inputValue)   // predefined function that evaluates the string expression
      setInputValue(result)
    }
    else {
      const updatedValue = inputValue + buttonText
      setInputValue(updatedValue)
    }


  }

  return (
    <>
      <div className='calculator'>
        <Display inputValue={inputValue} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </>
  )
}

export default App
