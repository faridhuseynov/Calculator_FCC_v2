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
      setCharDisplay(newChar);
    } else {
      newOpsString = opsString;
      var check = /[\+\x\/\-]$/.test(charDisplay);
      if (check) {
        setCharDisplay(newChar);
      } else {
        let displayString = charDisplay;
        if(displayString==="0"){
          displayString = removeLastChar(displayString);
        }
        displayString = displayString.concat(newChar);
        // if((/[0-9]\.[0]/)){

        // }else{
        //   displayString = (Number(displayString));
        // }
        setCharDisplay(displayString);
      }
    }
    newOpsString = newOpsString.concat(newChar);
    setOpsString(newOpsString);
  }

const nonNumberClickedHandler = event =>{
  let newChar = event.target.value;
  setCharDisplay(newChar);
  let newOpsString = opsString;

  if(/[\+\x\/]$/.test(newOpsString)){
    newOpsString = removeLastChar(newOpsString).concat(newChar);
    setOpsString(newOpsString);
  }
  // else if((/--$/).test(newOpsString)){
    
  // }
  else{
    newOpsString = newOpsString.concat(newChar);
    setOpsString(newOpsString);
  }
}

const decimalClickedHandler=()=>{
  let stringToUpdate = opsString;
  let lastChar = charDisplay;
  let index = Math.max(stringToUpdate.lastIndexOf("+"), stringToUpdate.lastIndexOf("-"),
    stringToUpdate.lastIndexOf("/"), stringToUpdate.lastIndexOf("x"));
  const stringToCheck = stringToUpdate.slice(index+1);
  console.log(index, stringToCheck);
  if(!(/\./).test(stringToCheck)){
    if(lastChar>=0){
      lastChar = lastChar.concat(".");
      stringToUpdate = stringToUpdate.concat(".");
      setCharDisplay(lastChar);
      setOpsString(stringToUpdate);
    }else{
      lastChar = "0.";
      setCharDisplay(lastChar);
      stringToUpdate = stringToUpdate.concat(lastChar);
      setOpsString(stringToUpdate);
    }
  }
}

const evaluationHandler=()=>{
  
  if(!evaluateClicked && (/[0-9]/).test(opsString)){
    var testString=opsString;
    if(/--/.test(testString)){
      testString = opsString.replaceAll('--','+');
    }
    if(/[\+\x\/\-]$/.test(testString)){
      testString = removeLastChar(testString);
    }
    // if(/[0-9]/.test(testString)==false){
    //   setCharDisplay("NaN");
    //   setOpsString("=NaN");
    // }
    else{

      testString = testString.replaceAll("x","*");
      const result = eval(testString);
      console.log(result);
      var resultString = testString.concat(`=${result}`);
      setCharDisplay(result);
      setOpsString(resultString);
    }
    setEvaluateClicked(true);
  }
}

const removeLastChar=operationString=>{
  const newOpsString = (operationString.replaceAll('--','+',)).split("");
    newOpsString.pop();
    return newOpsString.join("");
}
  const clearClickedHandler = () => {
    setCharDisplay("0");
    setOpsString("");
  }

  // onEqualClicked = {evaluationHandler}

  return (
    <div className="App">
      <div className="Device">
        <Display displayValue={charDisplay} opsString={opsString} />
        <Keyboard numClicked={numberClickedHandler} onEqualClicked = {evaluationHandler} 
          onDecimalClicked = {decimalClickedHandler}
         onClearClicked={clearClickedHandler} nonNumClicked={nonNumberClickedHandler} />

      </div>
    </div>
  );
}

export default App;
