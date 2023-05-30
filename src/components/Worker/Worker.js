import { IoMdCloseCircle } from 'react-icons/io'
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai'
import './Worker.css'

export const Worker = ({id, name, office, image, headerColor, whenDeleted, whenFavorite, isFavorite}) => {
    const propsfavorito = {
        size: 25,
        onClick: () => whenFavorite(id)
    }
    return (
        <div className='worker'>
            <IoMdCloseCircle size={25} className='delete' onClick={() => whenDeleted(id)} />
            <div className='worker-header' style={{backgroundColor: headerColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='worker-footer'>
                <h4>{name}</h4>
                <h5>{office}</h5>
                <div className='favorite'>
                 {
                    isFavorite
                     ?
                         <AiFillHeart  
                            {... propsfavorito} style={{color: '#E06B69'}}/>
                    :
                        <AiOutlineHeart  
                            {... propsfavorito} />
                 }
                </div>
            </div>
        </div>
    )
}