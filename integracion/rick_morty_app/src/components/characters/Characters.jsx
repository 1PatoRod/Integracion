import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters, cleanCharacters } from "../../redux/actions";
import CardCharecter from "../CardCharacter/CardCharacter";

import './Characters.css';

const Characters = () => {

    const dispatch = useDispatch()

    const character = useSelector(state => state.characters)

    useEffect(() => {
        dispatch(getCharacters())

        return () => dispatch(cleanCharacters())
    }, [])

    return(
        <div>
            <button>
                <Link to='/'>Landing</Link>
            </button>
            <section class="ContainerCards">
            <div class="Cortina">
            {
                character.map((character) => {
                    return(
                        <CardCharecter 
                            key={character?.id}
                            id={character?.id}
                            name={character?.name}
                            image={character?.image}
                            species={character?.species}
                            origin={character?.origin.name}
                        />
                    )
                })
            }
            </div>
            </section>
        </div>
    )
}

export default Characters;