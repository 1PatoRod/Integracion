import { Link } from "react-router-dom";
import style from './card.module.css'

const Card = ({id, name, image, species}) => {
    return (
        <Link to={`/detail/${id}`}>
            <div key={id} className={style.card}>
                <div className={style.imgCont}>
                    <img src={image} alt={`Image to ${name}`} className={style.img} />
                </div>
                <div className={style.info}>
                    <p className={style.name}>{name}</p>
                    <p className={style.species}>{species}</p>
                </div>
            </div>
        </Link>
    )
}
export default Card;