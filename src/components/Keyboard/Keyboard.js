import React from "react"
import Card from "../UI/Card";

import classes from "./Keyboard.module.css"

const Keyboard = props => {
    return (
        <Card className={classes.Keyboard}>
                    <button id="clear" className={classes.AceButton} onClick={props.onClearClicked}>AC</button>
                    <button id="divide" className={classes.OperationButton}>/</button>
                    <button id="multiply" className={classes.OperationButton}>X</button>
                    <button id="seven" className={classes.NumberButton} onClick={props.numClicked} value="7">7</button>
                    <button id="eight" className={classes.NumberButton} onClick={props.numClicked} value="8">8</button>
                    <button id="nine" className={classes.NumberButton}  onClick={props.numClicked} value="9">9</button>
                    <button id="subtract" className={classes.OperationButton}>-</button>
                    <button id="four" className={classes.NumberButton} onClick={props.numClicked} value="4">4</button>
                    <button id="five" className={classes.NumberButton} onClick={props.numClicked} value="5">5</button>
                    <button id="six" className={classes.NumberButton}  onClick={props.numClicked} value="6">6</button>
                    <button id="add" className={classes.OperationButton}>+</button>
                    <button id="one" className={classes.NumberButton} onClick={props.numClicked} value="1">1</button>
                    <button id="two" className={classes.NumberButton} onClick={props.numClicked} value="2">2</button>
                    <button id="three" className={classes.NumberButton} onClick={props.numClicked} value="3">3</button>
                    <button id="equals" className={classes.EqualButton}>=</button>
                    <button id="zero" className={classes.ZeroButton} onClick={props.numClicked} value="0">0</button>
                    <button id="decimal" className={classes.NumberButton}>.</button>

        </Card>
    )
}

export default Keyboard;