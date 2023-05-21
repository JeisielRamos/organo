import "./DropDownList.css";

export const DropDownList = (props) => {
    console.log(props.itens)
    return (
        <div className="dropdowlist">
            <label>
                {props.label}
            </label>
            <select>
                {
                    props.itens.map(item => <option key={item}> {item} </option>)
                }
            </select>
        </div>
    )
}