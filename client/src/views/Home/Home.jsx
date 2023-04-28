import style from './Home.module.css'
import CardCont from '../../components/cardCont/cardCont';
import Stars from '../../components/Stars/stars';
import About from '../About/About';

const Home = () => {

    return (
        <section className={style.Container} >
            <div className={style.back}>
                <Stars />
            </div>
            {/* <Loader /> */}
            <CardCont />
            <About />
        </section>
    )
}

export default Home;