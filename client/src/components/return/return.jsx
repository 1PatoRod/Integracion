import { Link } from "react-router-dom";
import style from './return.module.css';

const Return = () => {

    return (
            <Link to='/home' className={style.arrow}>
                    <div className={style.but}>{'<'}</div>
            </Link>
    )
};
export default Return