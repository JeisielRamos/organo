import hexToRgba from 'hex-to-rgba'
import { Worker } from '../Worker/Worker'
import './Team.css'

export const Team = (props) => {
    const styleSection = {backgroundImage: 'url(/imagens/fundo.png)', backgroundColor:  hexToRgba(props.color, '0.6') }
    return (
        props.workers.length > 0 && <section className='team' style={styleSection} >
            <input 
                value={props.color} 
                type='color' 
                className='input-color' 
                onChange={event => props.updatedTeamsColor(event.target.value, props.id)} />

            <h3 style={{borderColor: props.color}}>{props.name}</h3>

            <div className='workers'>
                {props.workers.map( worker => {
                    return <Worker 
                            key={worker.name+""+worker.id} 
                            id={worker.id} 
                            name={worker.name} 
                            office={worker.office} 
                            image={worker.image} 
                            headerColor={ props.color}
                            whenDeleted={props.whenDeleted} 
                            whenFavorite={props.whenFavorite}
                            isFavorite={worker.favorite}  />
                })}
            </div>
        </section>
    )
}

