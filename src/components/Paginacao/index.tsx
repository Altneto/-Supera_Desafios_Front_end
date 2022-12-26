import { Content } from '../../types/transferencias';
import './styles.css'

type Props = {
    page: Content;
    onChange: Function;
}

function Paginacao({ page, onChange }: Props) {

    let arr = [];

    for (let index = 1; index <= page.totalPages; index++) {
        arr.push(index);
    }


    return (
        <ul className='supera_paginacao' >
            <li >
                <button className='supera_button' disabled={page.first} onClick={() => onChange(0)} > {"<<"}</button>
            </li>
            <li >
                <button className='supera_button' disabled={page.first} onClick={() => onChange(page.number - 1)} >{"<"}</button>
            </li>
            {
                arr.map(item => {
                    return (
                        <li key={item} >
                            <button className='supera_button' onClick={() => onChange(page.number = item - 1)} >{item}</button>
                        </li>
                    )
                })
            }
            <li >
                <button className='supera_button' disabled={page.last} onClick={() => onChange(page.number + 1)} >{">"}</button>
            </li>
            <li >
                <button className='supera_button' disabled={page.last} onClick={() => onChange(page.totalPages)} >{">>"}</button>
            </li>
        </ul>
    )
}

export default Paginacao;