import "./DropDownList.css";

export const DropDownList = (props) => {
    return (
        <div className="dropdowlist">
            <label>
                {props.label}
            </label>
            <select required={props.required}>
                {
                    props.itens.map(item => <option key={item}> {item} </option>)
                }
            </select>
        </div>
    )
}