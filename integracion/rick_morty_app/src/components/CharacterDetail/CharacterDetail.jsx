import { getCharacterDetail, cleanDetail } from "../../redux/actions";
import { useSelector, useDispatch  } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import './CharacterDetail.css';

const CharacterDetail = () => {
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const characterDetail = useSelector((state) => state.characterDetail)

    useEffect(() => {
        dispatch(getCharacterDetail(id))

        return () => dispatch(cleanDetail())
    },[])

console.log(characterDetail);
    return (
        <section class="Container">
            {/* <Link to='/home'>
                <button>Home</button>
            </Link> */}
            <section class="Cortina">
            <div class="Target">
                <section>
                    <img src={characterDetail?.image} alt={characterDetail.name} class="DetailImag"/>
                </section>
                <section class="DetailText">
                    <section class="NameSection">
                        <h2 class="DetailName">{characterDetail?.name}</h2>
                    </section>
                    <section class="DetailInfo">
                        <h3>{characterDetail?.species}</h3>
                        <h3>{characterDetail?.status}</h3>
                        <p>{characterDetail?.gender}</p>
                        <p>origin: {characterDetail?.origin?.name}</p>
                        <p>location: {characterDetail?.location?.name}</p>
                    </section>
                </section>
            </div>
            </section>
        </section>
    )

}

//{id, name, status, species, image, origin, location, episode }

export default CharacterDetail;