import React from 'react';
import style from './User.module.scss'

type PropsType = {
    photo: string
    name: string
    userName: string
    followers: number
    following: number
    url: string
}

const User: React.FC<PropsType> = React.memo( (props) => {
    const {userName, name, followers, following, photo, url} = props
    const currentFollowers = followers >= 1000 ? (followers/1000).toFixed(1).toString() + 'k' : followers

    return (
        <div className={style.userBlock}>
            <img className={style.userPhoto} src={photo} alt="user"/>
            <span className={style.name}>{name}</span>
            <a rel={'noreferrer'}  target="_blank" href={url} className={style.userName}>{userName}</a>
            <div className={style.userFollow}>
                <span className={style.followers}>{currentFollowers} followers</span>
                <span className={style.following}>{following} following</span>
            </div>
        </div>
    )
})

export default User;