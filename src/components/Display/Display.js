import React from "react"

import classes from "./Display.module.css"
import Card from "../UI/Card"

const Display = props =>{
    return(
        <Card className={classes.display}>
            <input className={classes.opsDisplay} />
            <input id="display" className={classes.buttonDisplay} value={props.displayValue} readOnly/>
        </Card>
    )
}

export default Display;