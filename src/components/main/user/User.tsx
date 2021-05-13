import React from 'react';
import style from './User.module.scss'

type PropsType = {
    photo: string
    name: string
    userName: string
    followers: number
    following: number
}

const User: React.FC<PropsType> = (props) => {
    const {userName, name,followers,following,photo} = props
    return (
        <div className={style.userBlock}>
            <img className={style.userPhoto} src={photo} alt='user'/>
            <span className={style.name}>{name}</span>
            <a className={style.userName}>{userName}</a>
            <div className={style.userFollow}>
                <span className={style.followers}>{followers} followers</span>
                <span className={style.following}>{following} following</span>
            </div>
        </div>
    );
};

export default User;