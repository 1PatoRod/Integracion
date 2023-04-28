import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/CharterAction";
import style from "./paged.module.css";

const Paged = ({ cardPage, currentPage }) => {
    const dispatch = useDispatch();
    const char = useSelector(state => state.characts.charact)

    let pagedNum = [];
    for (let i = 1; i <= Math.ceil(char.length / cardPage); i++) {
        pagedNum.push(i)
    }
    let prev = currentPage - 1;
    let next = currentPage + 1;

    
    const handlerPage = (e) => {
        const value = e.target.value;
        value === 'prev'
        ? dispatch(setCurrentPage(prev))
        : dispatch(setCurrentPage(next));
    };
    if( char.length < 1 ) return <div className={style.pagination}>No products matching selected filters found</div>
    return (
        <nav>
            <ul className={style.pagination}>

                {prev !== 0 && <button onClick={e => handlerPage(e)} value='prev' className={style.but}>{'<Prev'}</button>}
                {pagedNum?.map((num, i) => {

                    return num === currentPage
                        ? <li key={i} >
                            <div key={i} className={style.activeNum}>{num}</div>
                        </li>
                        : <li key={i}>
                            <div key={i} onClick={() => dispatch(setCurrentPage(num))} className={style.noActiveNum} >{num}</div>
                        </li>
                })}
                {next !== pagedNum.length + 1 && <button onClick={e => handlerPage(e)} value='next' className={style.but}>{'Next>'}</button>}
            </ul>
        </nav>
    )
};

export default Paged;