
import Button from "../Button"
import DropDownList from "../DropDownList"
import InputText from "../InputText"
import './Form.css'
export const Form = () => {
    const times = ["Geografia", "liderança", "novo testamento"];

    const whenSaving = (event) => {
        
        event.preventDefault();
        console.log('saving...');
    }
    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite o seu nome" required={true} />
                <InputText label="Cargo" placeholder="Digite o seu cargo" required={true} />
                <InputText label="imagem" placeholder="Informe o endereço da imagem"/>
                <DropDownList label="Materia" itens={times} required={true} />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}