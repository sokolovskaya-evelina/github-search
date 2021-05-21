import React from 'react';
import style from './Pagination.module.scss'

type PropsType  = {
    pageCount: number
}
const Pagination:React.FC<PropsType> = ({pageCount}) => {
    return (
        <div className={style.paginationContainer}>
            
        </div>
    );
};

export default Pagination;