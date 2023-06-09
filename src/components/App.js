import React, { useState } from 'react';
import './styles/App.css';
import ButtonGroup from './ButtonGroup';
import Header from './Header';

const App = ()=> {
  const [screenText, setScreenText] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  const handleClickOperation = (buttonValue) => {
    let result = '';
    if (buttonValue === '=' && screenText !== '') {     // evaluate the expression and set the new state
      return;
    }else if(screenText === '' && buttonValue === '='){
      result = 0;
    } 
    else if (buttonValue === 'C') {
      result=''
    } else if (buttonValue === 'Del' && screenText !== '') {
      let val = screenText;
      result = val.substring(0, val.length - 1);
    } else if (buttonValue !== '=' && buttonValue !== 'Del') {
      result = screenText+buttonValue;
    }
    
    setScreenText(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let result = '';
    try {
      // eslint-disable-next-line no-eval
      result = eval(screenText);
    } catch (e) {}
    result = result.toString();
    setScreenText(result);
  }

  return (
    <div className={darkMode ? "darkApp app" : "lightApp app"}>
      <div className={darkMode ? "darkCalculator calculator" : "lightCalculator calculator"}>
        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <ButtonGroup 
          darkMode={darkMode}
          screenText={screenText}
          setScreenText={setScreenText}
          handleClickOperation={handleClickOperation}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
