import './Input.css'

export const Input = ({type = 'text', label, placeholder, value,Changed}) => {

    const whenTyping = (event) => {
        Changed(event.target.value)
    }
    return (
        <div className={`input input-${type}`}>
            <label> 
                {label} 
            </label>
            <input 
                type={type}
                value={value} 
                onChange={whenTyping} 
                required 
                placeholder={placeholder}/>
        </div>
    )
}
