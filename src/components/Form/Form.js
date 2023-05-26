
import { useState } from "react"
import Button from "../Button"
import DropDownList from "../DropDownList"
import InputText from "../InputText"
import './Form.css'
export const Form = (props) => {
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const whenSaving = (event) => {        
        event.preventDefault();
        props.registeredWorker({name, office, image, team})
        setName('')
        setOffice('')
        setImage('')
        setTeam('')
    }
    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
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
                    Criar card
                </Button>
            </form>
        </section>
    )
}