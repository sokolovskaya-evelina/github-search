import React from 'react';
import style from './Empty.module.scss'

type PropsType = {
    text: string
    icon: string
}

const Empty: React.FC<PropsType> = ({text, icon}) => {
    const styles = {
        backgroundImage: `url(${icon})`
    }

    return (
        <div className={style.emptyBlock}>
            <div className={style.container}>
                <span style={styles} className={style.icon}/>
                <span className={style.text}>{text}</span>
            </div>
        </div>
    );
};

export default Empty;