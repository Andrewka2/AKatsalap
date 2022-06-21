import React from "react";
import classes from './input.module.scss'
import {useDispatch} from 'react-redux'
import {selectItem} from '../../store/actions'

interface InputInterface {
    placeholder: string
}

function Input({placeholder}:InputInterface){
    const dispatch = useDispatch()
    function inputHandler(e:any){
        dispatch(selectItem(e.target.value))
    }

    return (
        <input onChange={inputHandler} placeholder={placeholder} className={classes.Input} type="text" />
    )
}

export default Input