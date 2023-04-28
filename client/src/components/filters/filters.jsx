import { useState, useEffect } from "react";
import { applyFilters, getLocation } from "../../redux/CharterAction";
import { useSelector, useDispatch } from "react-redux";
import style from './filters.module.css';

const Filters = () => {
    const dispatch = useDispatch()

    const [filter, setFilter] = useState({
        fSpecies : 'All',
        fStatus : 'All',
        fGender : 'All',
        fOrigin : 'All',
        fLocation : 'All',
        oAlphabetic : 'All',
    })

    useEffect(() => {
        dispatch(getLocation())
    },[])
    const Ubs = useSelector(state => state.characts.location);

    const filterHandler = (e) => {
        const target = e.target.name;
        const value = e.target.value;
        setFilter({...filter, [target] : value});
        dispatch(applyFilters({...filter, [target] : value}));
    } 

    return(
        <div className={style.cont}>
            <select name='fSpecies' onChange={e => filterHandler(e)} className={style.sel}>
                <option value='All'>All species</option>
                <option value='Human'>Human</option>
                <option value='Alien'>Alien</option>
                <option value='unknown'>Unknown</option>
            </select>
            <select name='fStatus' onChange={e => filterHandler(e)} className={style.sel}>
                <option value='All'>All status</option>
                <option value='Alive'>Alive</option>
                <option value='Dead'>Dead</option>
                <option value='unknown'>Unknown</option>
            </select>
            <select name='fGender' onChange={e => filterHandler(e)} className={style.sel}>
                <option value='All'>All gender</option>
                <option value='Female'>Female</option>
                <option value='Male'>Male</option>
                <option value='unknown'>Unknown</option>
            </select>
            <select name='fOrigin' onChange={e => filterHandler(e)} className={style.sel}>
                <option value='All'>All origin</option>
                {Ubs?.map((el,i) => <option key={i} value={el.name}>{el.name}</option>)}
            </select>
            <select name='fLocation' onChange={e => filterHandler(e)} className={style.sel}>
                <option value='All'>All location</option>
                {Ubs?.map((el,i) => <option key={i} value={el.name}>{el.name}</option>)}
            </select>
            <select name='oAlphabetic' onChange={e => filterHandler(e)} className={style.sel}>
                <option value='All'>No orderer</option>
                <option value='A_Z'>A_Z</option>
                <option value='Z_A'>Z_A</option>
            </select>
        </div>
    )
}

export default Filters;