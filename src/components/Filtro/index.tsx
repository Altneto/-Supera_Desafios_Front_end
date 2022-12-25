import './styles.css'

function Filtro() {

    return (
        <form>
            <div className="supera-filtro">
                <div className="supera-input">
                    <label >Data de Inicio</label>
                    <input type="datetime-local" id="Input1" />
                </div>
                <div className="supera-input">
                    <label >Data de Fim</label>
                    <input type="datetime-local" id="Input2" />
                </div>
                <div className="supera-input">
                    <label >Nome operador transacionado</label>
                    <input id="Input3" />
                </div>
            </div>
            <div className="supera-Pesquisar-botao">
                <button type="submit">Pesquisar</button>
            </div>
        </form>
    )
}

export default Filtro;