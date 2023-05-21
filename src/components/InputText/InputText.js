import { useState } from 'react'
import './InputText.css'

export const InputText = (props) => {

    const whenTyping = (event) => {
        props.Changed(event.target.value)
    }
    return (
        <div className="input-text">
            <label> 
                {props.label} 
            </label>
            <input value={props.value} onChange={whenTyping} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}
