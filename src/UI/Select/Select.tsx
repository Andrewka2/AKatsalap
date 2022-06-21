import React from "react";
import classes from './select.module.scss'

interface SelectTextInterface {
    text: string
}

function Select({ text }: SelectTextInterface) {
    return (
        <div className={classes.select_cont}>
            <select className={classes.select}>
                <option value="value1" selected>{text}</option>
            </select>
        </div>
    )
}

export default Select