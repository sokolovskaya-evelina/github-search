import React from 'react';
import style from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={style.fetchingContainer}>
            <div className={style.fetching}>
            </div>

        </div>


    );
};

export default Loader;