import { useParams } from "react-router-dom";
import { getCharDetail, clearGetCharDetail } from "../../redux/CharterAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../../components/Loader/Loader'
import style from './Detail.module.css'
import Stars from "../../components/Stars/stars";
import Return from "../../components/return/return";

const Detail = () => {
    const { idDetail } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getCharDetail(idDetail));
        return dispatch(clearGetCharDetail());
    },[])
    
    const char = useSelector(state => state.characts.charDetail);
    console.log('char',char);

    return(
        <div>
        <Stars />
        <Return />
            {char.id 
            ?<div className={style.cont}>
                <div className={style.head}>
                    <img src={char.image} alt='image NOT fount' />
                        <p>id: {char.id}</p>
                </div>
                <div className={style.inf}>
                    <div className={style.tittle}>
                        <h1 className={style.name}>name: {char.name}</h1>
                    </div>
                    <div className={style.one}>
                        <p>species: {char.species}</p>
                        <p>status: {char.status}</p>
                        <p>gender: {char.gender}</p>
                        <div className={style.one}>
                            <p>origin: {char.origin}</p>
                            <p>location: {char.location}</p>
                        </div>
                    </div>
                </div>
            </div>
            : <Loader />}
        </div>
    )
}
export default Detail;