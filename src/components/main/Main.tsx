import React from 'react';
import style from './Main.module.scss'
import User from './user/User';
import Repositories from './repositories/Repositories';
import {useSelector} from 'react-redux';
import Empty from '../../common/components/empty/Empty';
import search from './../../assets/icons/bigSearch.svg'
import userNotFound from './../../assets/icons/userOutline.svg'
import {selectError, selectIsFetching, selectUser} from './repositories/selectors';
import Loader from '../../common/components/Loader/Loader';

const Main = () => {
    const user = useSelector(selectUser)
    const error = useSelector(selectError)
    const isFetching = useSelector(selectIsFetching)

    if (error) {
        return <Empty text={'User not found'} icon={userNotFound}/>
    }
    if (user === null) {
        return <Empty text={`Start with searching a GitHub user`} icon={search}/>
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
    )
}

export default Main;