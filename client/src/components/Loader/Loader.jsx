import style from './Loader.module.css';
import planetSINfondo from '../../utils/planetSINfondo.png'
import Stars from '../Stars/stars';

const Loader = () => {

    return (<section className={style.back}>
    <Stars />
    <span className={style.loader}></span>
    <div className={style.planetCont}>
        <img src={planetSINfondo} alt='planetNoFount' className={style.planet} />
    </div>
    </section>)
}

export default Loader;