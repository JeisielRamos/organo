import "./DropDownList.css";

export const DropDownList = (props) => {
    
    const whenSelecting = (event) => {
        props.Changed(event.target.value)
    }

    return (
        <div className="dropdowlist">
            <label>
                {props.label}
            </label>
            <select value={props.value} onChange={whenSelecting}  required={props.required}>
                <option key=""></option>
                {
                    props.itens.map(item => <option key={item}> {item} </option>)
                }
            </select>
        </div>
    )
}