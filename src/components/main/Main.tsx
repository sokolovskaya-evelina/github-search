import React from 'react';
import style from './Main.module.scss'
import User from './user/User';
import userPhoto from './../../assets/image/userPhoto.jpg'
import Repositories from './repositories/Repositories';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../Redux/store';
import {UserType} from '../../API/api';
import Empty from '../../common/components/empty/Empty';
import search from './../../assets/icons/bigSearch.svg'
import userNotFound from './../../assets/icons/userOutline.svg'


type PropsType = {

}

const Main: React.FC<PropsType> = () => {
    const user = useSelector<AppRootStateType, UserType | null>(state => state.user.user)
    const error = useSelector<AppRootStateType, boolean>(state => state.user.error)

    if (user === null) {
        return <Empty text={`Start with searching a GitHub user`} icon={search}/>
    } else if (error) {
        return <Empty text={'User not found'} icon={userNotFound}/>
    }
    return (
        <div className={style.container}>
            <div className={style.mainBlock}>
                <User photo={user.avatar_url}
                      name={user.name}
                      url={user.html_url}
                      userName={user.login}
                      followers={user.followers}
                      following={user.following}/>
                <Repositories userName={user.login} reposCount={user.public_repos}/>
            </div>
        </div>

    );
};

export default Main;