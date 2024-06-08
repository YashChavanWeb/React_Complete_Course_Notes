import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlertOn = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')

      // to change the overall body color
      document.body.style.backgroundColor = 'grey'
      showAlertOn('Dark Mode Enabled', 'success')

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlertOn('Light Mode Enabled', 'success')


    }
  }

  return (
    <>
      <Navbar title="yashTextUtils" about="aboutText" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />

      <div className="container my-5">
        <TextForm heading="Enter the text to analyze below" mode={mode} alert={alert} showAlertOn={showAlertOn} />
        <About />
      </div>
    </>
  );
}

export default App;
