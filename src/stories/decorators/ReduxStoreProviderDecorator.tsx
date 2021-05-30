import React from 'react';
import {Provider} from "react-redux";
import {AppRootStateType, RootReducerType} from '../../Redux/store';
import {applyMiddleware, combineReducers, createStore} from "redux";
import reducer from '../../Redux/reducer';
import thunk from "redux-thunk";
import {HashRouter} from 'react-router-dom';

const rootReducer: RootReducerType = combineReducers({
    user: reducer
})

const initialGlobalState: AppRootStateType = {
    user: {
        user: {
            login: 'sokolovskaya-evelina',
            name: '',
            followers: 0,
            following: 0,
            html_url: 'https://github.com/sokolovskaya-evelina',
            public_repos: 26,
            avatar_url: 'https://avatars.githubusercontent.com/u/70853148?v=4'
        },
        perPage: 4,
        currentPage: 1,
        isFetching: false,
        error: false,
        repositories: [{
            id: '154968451',
            description: "hello",
            name: 'Repository 1',
            html_url: 'https://github.com/sokolovskaya-evelina/todolist'
        }],
        totalReposCount: 20
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState, applyMiddleware(thunk));

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>
)

export const BrowserRouterDecorator = (storyFn: any) => (
    <HashRouter>
        {storyFn()}
    </HashRouter>
)
