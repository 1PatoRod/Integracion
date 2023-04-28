import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import SearchBar from '../../components/SearchBar/SearchBar';
import style from './NavBar.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getAllCharacters, clearAllCharact } from '../../redux/CharterAction';
import Filters from '../../components/filters/filters';

const NavBar = () => {

    const dispatch = useDispatch();
    const handleReload = () => {
        dispatch(clearAllCharact());
        dispatch(getAllCharacters());
    };

    const location = useLocation();
    return (
        <div className={style.order}>
        <div className={style.cont}>
            <div className={style.infBut}>
                    <Link to='/home' >
                        <h2 className={style.tittle}>HOME</h2>
                    </Link>
                    {location.pathname.startsWith('/detail/') || location.pathname === '/create' 
                        ? <div className={style.allCont} ></div>
                        : <button onClick={handleReload} className={style.but}>Reload</button>}
                </div>
                <h1 className={style.tittleName}>Rick and Morty App</h1>
                <SearchBar />
            </div>
            <Filters />
        </div>
    )
};
export default NavBar;