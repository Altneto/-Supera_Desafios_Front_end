import './styles.css'

function Paginacao() {

    return (
        <ul className='supera_paginacao' >
            <li >
                <a href='/' > {"<<"}</a>
            </li>
            <li >
                <a href='/' >{"<"}</a>
            </li>
            <li ><a href='/' >1</a></li>
            <li ><a href='/' >2</a></li>
            <li ><a href='/' >3</a></li>
            <li >
                <a href='/' >{">"}</a>
            </li>
            <li >
                <a href='/' >{">>"}</a>
            </li>
        </ul>
    )
}

export default Paginacao;