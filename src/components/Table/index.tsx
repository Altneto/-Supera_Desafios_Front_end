import Paginacao from '../Paginacao';
import './styles.css'

function Table() {

    return (
        <div>
            <div className='supera-saldo'>
                <p>Saldo total: R$ 50,00</p>
                <p className='supera-text'>Saldo no periodo: R$ 50,00</p>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Datas</th>
                        <th>Valores</th>
                        <th>Tipo</th>
                        <th>Nome operador Transacionado</th>
                    </tr>
                    <tr>
                        <td>14/02/2019</td>
                        <td>R$ 30895,46</td>
                        <td>depósito</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>12/04/2019</td>
                        <td>R$ 12,24</td>
                        <td>Transferência Entrada</td>
                        <td>Fulano</td>
                    </tr>
                    <tr>
                        <td>11/06/2020</td>
                        <td>R$ -500,50</td>
                        <td>Transferência Saída</td>
                        <td>Sicrano</td>
                    </tr>
                    <tr>
                        <td>11/06/2020</td>
                        <td>R$ -1234,00</td>
                        <td>Saque</td>
                        <td></td>
                    </tr>
                </table>
            </div>
            <div className='supera-paginacao'>
                <Paginacao />
            </div>

        </div>
    );
}

export default Table;