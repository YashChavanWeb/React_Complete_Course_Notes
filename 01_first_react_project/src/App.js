import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// importing react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [colorTheme, setColorTheme] = useState(mode);

  const setWarmColor = () => {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'yellow';

    // if we want to style a button, then we need to get its id, we cannot style it directly like .button

    let buttons = document.querySelectorAll('.btn');

    // this approach will not work as the querySelectorAll gives a collection not a single element
    // button.style.backgroundColor = 'white';
    // button.style.color = 'black';

    buttons.forEach(button => {
      button.style.backgroundColor = 'yellow';
      button.style.color = 'black';
    });

    setColorTheme('warm'); // this has no relation with the css, this is just that we are setting the mode of the color to warm which is nothing to do with the css
  };

  const setCoolColor = () => {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
    setColorTheme('cool');
  };

  const setHotColor = () => {
    document.body.style.backgroundColor = 'orange';
    document.body.style.color = 'black';
    setColorTheme('hot');
  };

  const showAlertOn = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark'); // this is just for verification of the mode for if condition, it has nothing to do with the actual changing of the color

      // actual changing of the css is done by giving style
      document.body.style.backgroundColor = 'grey';
      showAlertOn('Dark Mode Enabled', 'success');

      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlertOn('Light Mode Enabled', 'success');

      document.title = 'TextUtils - Light Mode';
    }
    setColorTheme(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <Navbar
        title="yashTextUtils"
        about="aboutText"
        mode={mode}
        toggleMode={toggleMode}
        setWarmColor={setWarmColor}
        setCoolColor={setCoolColor}
        setHotColor={setHotColor}
        colorTheme={colorTheme}
      />

      <Alert alert={alert} />

      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                alert={alert}
                showAlertOn={showAlertOn}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
