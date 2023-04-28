import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchCharacterName, setCurrentPage } from "../../redux/CharterAction";
import { useLocation } from "react-router-dom";
import style from './SearchBar.module.css'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [ name , setName ] = useState({
        name:'',
    });

    const handleSearch = (event) => {
        event.preventDefault();
        const name = event.target.value;
        setName(name);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchCharacterName(name)).then(dispatch(setCurrentPage(1)));
    };

    const location = useLocation()
    if(location.pathname.startsWith('/detail/') || location.pathname === '/create'){
        return (<div className={style.allCont} ></div>)
    }

    return (
        <div className={style.allCont} >
            <input 
                type='search'
                placeholder="Enter character name here..."
                onChange={e => handleSearch(e)}
                className={style.SearchBar}
            />
            {name !== '' && name !== undefined && name.length && <button type="submit" value={name} onClick={e => handleSubmit(e)} className={style.button} >Search</button>}
        </div>
)
}

export default SearchBar;