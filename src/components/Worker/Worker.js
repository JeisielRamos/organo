import './Worker.css'

export const Worker = ({name, office, image, headerColor}) => {
    return (
        <div className='worker'>
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