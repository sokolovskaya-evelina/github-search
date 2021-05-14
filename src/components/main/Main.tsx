import React from 'react';
import style from './Main.module.scss'
import User from './user/User';
import userPhoto from './../../assets/image/userPhoto.jpg'
import Repositories from './repositories/Repositories';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../Redux/store';
import {UserType} from '../../API/api';

type PropsType = {

}

const Main: React.FC<PropsType> = () => {
    const user = useSelector<AppRootStateType, UserType | null>(state => state.user.user)
    const error = useSelector<AppRootStateType, boolean>(state => state.user.error)

    if (user === null) {
        return <h1>
        Start Page
        </h1>
    } else if (error) {
        return <h1>Not Found</h1>
    }
    return (
        <div className={style.mainBlock}>
            <User photo={user.avatar_url}
                  name={user.name}
                  url={user.html_url}
                  userName={user.login}
                  followers={user.followers}
                  following={user.following}/>
            <Repositories repositoryCount={user.public_repos}/>
        </div>
    );
};

export default Main;