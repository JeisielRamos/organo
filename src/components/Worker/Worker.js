import { IoMdCloseCircle } from 'react-icons/io'
import './Worker.css'

export const Worker = ({id, name, office, image, headerColor, whenDeleted}) => {
    return (
        <div className='worker'>
            <IoMdCloseCircle size={25} className='delete' onClick={() => whenDeleted(id)} />
            <div className='header' style={{backgroundColor: headerColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    )
}