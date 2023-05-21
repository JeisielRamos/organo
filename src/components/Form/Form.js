
import DropDownList from "../DropDownList"
import InputText from "../InputText"
import './Form.css'
export const Form = () => {
    const times = ["Geografia", "liderança", "novo testamento"]
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite o seu nome"/>
                <InputText label="Cargo" placeholder="Digite o seu cargo"/>
                <InputText label="imagem" placeholder="Informe o endereço da imagem"/>
                <DropDownList label="Materia" itens={times}/>
            </form>
        </section>
    )
}