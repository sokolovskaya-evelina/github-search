import React from 'react'
import Main from '../components/main/Main';
import './../index.css'
import {BrowserRouterDecorator, ReduxStoreProviderDecorator} from './decorators/ReduxStoreProviderDecorator';
import User from '../components/main/user/User';
import Repositories from '../components/main/repositories/Repositories';
import Repository from '../components/main/repositories/repository/Repository';

export default {
    title: 'Main',
    component: Main,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator]
}

export const MainExample = () => <Main/>
export const UserExample = () => <User photo={'https://avatars.githubusercontent.com/u/70853148?v=4'} name={''} userName={'sokolovskaya-evelina'} followers={0} following={0} url={'https://github.com/sokolovskaya-evelina'}/>
export const RepositoriesExample = () => <Repositories reposCount={26} userName={'sokolovskaya-evelina'}/>
export const RepositoryExample = () => <Repository name={'todolist'} url={'https://github.com/sokolovskaya-evelina/todolist'} description={"It's my todolist app"}/>