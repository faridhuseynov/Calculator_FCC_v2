import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display';
import Keyboard from './components/Keyboard/Keyboard';
import { useState } from 'react';



function App() {
  const [display,setDisplay]=useState("0");
  const [nonNumClicked,setNonNumClicked] = useState(false);
  const [clickedChar,setClickedChar] = useState(0);
  
  const numberClickedHandler = event =>{
    var newChar = event.target.value;
    if(!nonNumClicked){
      let displayString = display.toString();
      displayString = displayString.concat(newChar);
      setDisplay(Number(displayString));
    }
  }

  const clearClickedHandler = () =>{
    setDisplay("0");
  }


  return (
    <div className="App">
      <Display displayValue = {display} />
      <Keyboard numClicked = {numberClickedHandler} onClearClicked = {clearClickedHandler} />
    </div>
  );
}

export default App;
