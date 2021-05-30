import React from 'react';
import style from './Repository.module.scss'

type PropsType = {
    name: string
    url: string
    description: string
}
const Repository: React.FC<PropsType> = React.memo((props) => {
    const {name, description, url} = props
    return (
        <div className={style.repoBlock}>
            <a target="_blank" href={url} className={style.repoLink}>{name}</a>
            <span className={style.description}>{description}</span>
        </div>
    );
})

export default Repository;