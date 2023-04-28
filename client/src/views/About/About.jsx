import style from './About.module.css';

const About = () => {

    return(
        <div className={style.cont}>
            <div className={style.about}>
                <h4>About me:</h4>
                <p>{`I'm a fullStack programmer focused on front-end development.`}</p>
                <p>{`I have always loved programming, since I was a child I loved to play with computers and`}</p> 
                <p>{`understand how their applications work. Played at being a programmer, gradually turned the game`}</p> 
                <p>{`into a dream and a goal to fulfill. I learned the basics of programming in the Java language, `}</p> 
                <p>{`then continued with a more flexible language such as JavaScript, in which I currently develop, `}</p> 
                <p>{`programming has helped me grow as a person and is a motivation for me to continue to making it.`}
                </p>
            </div>
            <div className={style.contact}>
                <a href='https://github.com/1PatoRod' className={style.as}>{'> GitHub'}</a>
                <a href='https://www.linkedin.com/in/pato-e-rodriguez/' className={style.as}>{'> Linkedin'}</a>
                <a href='https://twitter.com/PatoRod002' className={style.as}>{'> Twitter'}</a>
            </div>
        </div>
    )
};
export default About;