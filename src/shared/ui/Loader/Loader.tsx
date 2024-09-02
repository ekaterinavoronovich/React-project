import style from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={style.loader_wrapper}>
            <span className={style.loader}></span>
        </div>
    );
};

export default Loader;
