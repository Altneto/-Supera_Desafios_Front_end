import { useState } from 'react';
import Table from '../Table';
import './styles.css'
import { Filter } from "../../types/transferencias";

function Filtro() {

    const [tabela, setTabela] = useState<Filter>({
            dataInicial: '',
            dataFinal: '',
            nomeOperador: ''
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataInicial = (event.target as any).dataInicial.value;
        const dataFinal = (event.target as any).dataFinal.value;
        const nomeOperador = (event.target as any).nomeOperador.value;

        let filtro: Filter = {dataInicial, dataFinal, nomeOperador};

        setTabela(filtro);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="supera-filtro">
                    <div className="supera-input">
                        <label >Data de Inicio</label>
                        <input type="datetime-local" id="dataInicial" />
                    </div>
                    <div className="supera-input">
                        <label >Data de Fim</label>
                        <input type="datetime-local" id="dataFinal" />
                    </div>
                    <div className="supera-input">
                        <label >Nome operador transacionado</label>
                        <input id="nomeOperador" />
                    </div>
                </div>
                <div className="supera-Pesquisar-botao">
                    <button type="submit">Pesquisar</button>
                </div>
            </form>
            <div>
                <Table tabela={tabela} onSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default Filtro;