import NotFoundImg from '../../img/ORFI0N0.jpg';
import style from './NotFound.module.scss';
const NotFound = () => {
    return (
        <div className={style.not_found_page}>
            <img src={NotFoundImg} alt={NotFoundImg} />
        </div>
    );
};
export default NotFound;
