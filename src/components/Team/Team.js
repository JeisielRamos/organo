import Worker from '../Worker'
import './Team.css'

export const Team = (props) => {
    const styleSection = {backgroundColor: props.secondaryColor }
    return (
        <section className='team' style={styleSection} >
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <Worker />
        </section>
    )
}

