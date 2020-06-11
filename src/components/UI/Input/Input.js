import React from 'react';
import classes from './Input.module.scss';

const Input = props => {
    let inputElement = null;

    switch (props.elementType) {
        case 'input':
            inputElement = <input {...props.elementConfig} className={classes.InputElement} value={props.value} onChange={props.changed}/>
            break;
        case 'textarea':
            inputElement = <textarea {...props.elementConfig} className={classes.InputElement} onChange={props.changed}/>
            break;
        case 'select':
            inputElement = <select value={props.value} className={classes.InputElement} onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>{option.displayValue}</option>
                ))}
            </select>
            break;
        default: inputElement = <input {...props.elementConfig} className={classes.InputElement} value={props.value} onChange={props.changed}/>
            break;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.name}</label>
            {inputElement}
        </div>
    )
}

export default Input;