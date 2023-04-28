import './CardCharacter.css';
import { Link } from "react-router-dom";

const CardCharecter = ({id, name, species, image, origin }) => {
    return(
        <div class="card">
        <Link to={`/detail/${id}`} >
        <section>
        <img src={image} alt={name} class="cardImg"/>
        </section>
        <section class="cardIntro">
        <h2 class="cardH2">{name}</h2>
        <label class="cardP">{species}</label>
        <label class="cardP">{origin}</label>
        </section>
        </Link>
        </div>
    )
}
//font-family:'Get Schwifty Regular';
export default CardCharecter;

