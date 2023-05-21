import './InputText.css'

export const InputText = (props) => {

    const whenTyping = (event) => {
        var valor = event.target.value
        console.log(valor);
    }
    return (
        <div className="input-text">
            <label> 
                {props.label} 
            </label>
            <input onChange={whenTyping} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}
