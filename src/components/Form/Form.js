
import { useState } from "react"
import Button from "../Button"
import DropDownList from "../DropDownList"
import InputText from "../InputText"
import { v4 as uuidv4 } from 'uuid'
import './Form.css'

export const Form = (props) => {
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    const [nameTeam, setNameTeam] = useState('')
    const [colorTeam, setColorTeam] = useState('')

    const whenSaving = (event) => {
        const id = uuidv4()
        event.preventDefault();
        props.registeredWorker({id, name, office, image, team})
        setName('')
        setOffice('')
        setImage('')
        setTeam('')
    }
    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar um novo colaborador</h2>
                <InputText 
                    label="Nome" 
                    placeholder="Digite o seu nome" 
                    required={true} 
                    value={name}
                    Changed={valor => setName(valor)}
                />
                <InputText 
                    label="Cargo" 
                    placeholder="Digite o seu cargo" 
                    required={true} 
                    value={office}
                    Changed={valor => setOffice(valor)}
                />
                <InputText 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    Changed={valor => setImage(valor)}
                />
                <DropDownList 
                    label="Time" 
                    itens={props.teams} 
                    required={true}
                    value={team}
                    Changed={valor => setTeam(valor)}
                />
                <Button>
                    Criar colaborador
                </Button>
            </form>
            <form onSubmit={(event) => { 
                event.preventDefault();
                props.registeredTeams(nameTeam,colorTeam);
                }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <InputText 
                    label="Nome" 
                    placeholder="Digite o nome do time" 
                    required 
                    value={nameTeam}
                    Changed={valor => setNameTeam(valor)}
                />
                <InputText 
                    label="cor" 
                    placeholder="Digite a cor do time" 
                    required 
                    value={colorTeam}
                    Changed={valor => setColorTeam(valor)}
                />
                <Button>
                    Criar time
                </Button>
            </form>
        </section>
    )
}