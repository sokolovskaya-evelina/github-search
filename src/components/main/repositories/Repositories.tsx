import React from 'react';
import style from './Repositories.module.scss'
import Repository from './repository/Repository';

type PropsType = {
    repositoryCount: number
    repositories?: [
        repository: {
            repositoryName: string
            repositoryDescription: string
        }
    ]
}

const Repositories: React.FC<PropsType> = (props) => {
   const {repositoryCount} = props
    return (
        <div className={style.repositoryBlock}>
         <h1 className={style.title}>Repositories ({repositoryCount})</h1>
            <Repository description={'Tweak React components in real time. (Deprecated: use Fast Refresh instead.'} link={''} name={'react-hot-loader'}/>
        </div>
    );
};

export default Repositories;