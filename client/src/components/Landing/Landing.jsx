import { Link } from "react-router-dom";
import './Landing.css';

import RickAndMorty from './assets/RickAndMorty.mp4'

const Landing = () => {
    return (
        <section class="showcase">
			<div class="video-container">
				<video src={RickAndMorty} autoPlay muted loop></video>
			</div>
			<div class="content">
				<h1 class="myH1">Rick And Morty</h1>
				<h3 class="myH3">App by Rodriguez Patricio</h3>
				<Link to='/home'>
                <button class="btn">HOME</button>
                </Link>
			</div>
		</section>
    )
}
{/* <ReactPlayer
                className={styles.video}
                url='https://youtu.be/T_QAxvPjjBc' 
                playing={true}
                loop={true}
                preload={true}
                muted={true}
                height='100vh'
                width='100vw'
            /> 
        
                font-family: 'Get Schwifty Regular';
            
        */}
export default Landing;