import axios from 'axios';
import Paginacao from '../Paginacao';
import './styles.css'
import { BASE_URL } from '../../utils/requests';
import { useEffect, useState } from 'react';
import { Transferencias, Content, Filter } from '../../types/transferencias'

type Props = {
    tabela: Filter;
    onSubmit: Function;
}

function Table({tabela, onSubmit}: Props) {

    const [pageNumber, setPageNumber] = useState(0);

    const [content, setContent] = useState<Content>({
        content: [],
        empty: true,
        first: true,
        last: true,
        number: 0,
        numberOfElements: 0,
        size: 4,
        totalElements: 0,
        totalPages: 1
    });

    const [transferencia, setTransferencia] = useState<Transferencias>({
        transferencias: content,
        saldoTotal: 0,
        saldoPeriodo: 0
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/transferencia?dataInicio=${tabela.dataInicial}&dataFim=${tabela.dataFinal}&nomeDoOperador=${tabela.nomeOperador}&page=${pageNumber}&size=4`)
            .then(response => {
                const data = response.data as Transferencias;
                setTransferencia(data);
                setContent(data.transferencias);
            });
    }, [pageNumber, onSubmit]);

    const handlePagination = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <div>
            <div className='supera-saldo'>
                <p>Saldo total: R$ ${transferencia.saldoTotal}</p>
                <p className='supera-text'>Saldo no periodo: R$ ${transferencia.saldoPeriodo}</p>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Datas</th>
                            <th>Valores</th>
                            <th>Tipo</th>
                            <th>Nome operador Transacionado</th>
                        </tr>
                        {transferencia.transferencias.content.map(item => (
                            <tr key={item.id}>
                                <td>{item.dataTransferencia}</td>
                                <td>{item.valor}</td>
                                <td>{item.tipo}</td>
                                <td>{item.nomeOperadorTransacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='supera-paginacao'>
                <Paginacao page={content} onChange={handlePagination} />
            </div>

        </div>
    );
}

export default Table;