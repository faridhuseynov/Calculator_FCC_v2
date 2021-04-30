import logo from './logo.svg';
import './App.css';
import Display from './components/Display/Display';
import Keyboard from './components/Keyboard/Keyboard';
import { useState } from 'react';



function App() {
  const [charDisplay, setCharDisplay] = useState("0");
  const [opsString, setOpsString]=useState("");
  const [evaluateClicked, setEvaluateClicked] = useState(false);
  // const [nonNumClicked, setNonNumClicked] = useState(false);
  const [clickedNomNum, setClickedNomNum] = useState(-1);

  const numberClickedHandler = event => {
    let newOpsString = "";
    var newChar = event.target.value;
    if (evaluateClicked) {
      setEvaluateClicked(false);
    } else {
      newOpsString = opsString;
    }
    newOpsString = newOpsString.concat(newChar);
    setOpsString(newOpsString);
    var check = /[\+\x\/\-]$/.test(charDisplay);
    if (check) {
      setCharDisplay(newChar);
    } else {
      let displayString = charDisplay.toString();
      displayString = displayString.concat(newChar);
      displayString = Number(displayString);
      setCharDisplay(displayString);
    }
  }

const nonNumberClickedHandler = event =>{
  let newChar = event.target.value;
  setCharDisplay(newChar);
  let newOpsString = opsString;

  var check = /[\+\x\/]$/.test(newOpsString);
  if(check){
    newOpsString = newOpsString.split("");
    newOpsString.pop();
    newOpsString = newOpsString.join("").concat(newChar);
    setOpsString(newOpsString);
  }else{
    newOpsString = newOpsString.concat(newChar);
    setOpsString(newOpsString);
  }
}

const evaluationHandler=()=>{
  const result = eval(opsString);
  var resultString = opsString.concat(`=${result}`);
  setCharDisplay(result);
  setOpsString(resultString);
  setEvaluateClicked(true);
}

  const clearClickedHandler = () => {
    setCharDisplay("0");
    setOpsString("");
  }


  return (
    <div className="App">
      <div className="Device">
        <Display displayValue={charDisplay} opsString={opsString} />
        <Keyboard numClicked={numberClickedHandler} onEqualClicked = {evaluationHandler}
         onClearClicked={clearClickedHandler} nonNumClicked={nonNumberClickedHandler} />

      </div>
    </div>
  );
}

export default App;
