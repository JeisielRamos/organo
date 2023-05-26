import { Worker } from '../Worker/Worker'
import './Team.css'

export const Team = (props) => {
    const styleSection = {backgroundColor: props.secondaryColor }
    return (
        props.workers.length > 0 && <section className='team' style={styleSection} >
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>

            <div className='workers'>
                {props.workers.map( worker => <Worker key={worker.name} name={worker.name} office={worker.office} image={worker.image} headerColor={ props.primaryColor} />)}
            </div>
        </section>
    )
}

