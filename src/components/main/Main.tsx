import React from 'react';
import style from './Main.module.scss'
import User from './user/User';
import userPhoto from './../../assets/image/userPhoto.jpg'
import Repositories from './repositories/Repositories';

type PropsType = {

}

const Main: React.FC<PropsType> = () => {
    return (
        <div className={style.mainBlock}>
            <User photo={userPhoto} name={'Dan Abramov'} userName={'gaearon'} followers={65.8} following={171}/>
            <Repositories repositoryCount={249}/>
        </div>
    );
};

export default Main;