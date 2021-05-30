import React from 'react'
import {BrowserRouterDecorator, ReduxStoreProviderDecorator} from './decorators/ReduxStoreProviderDecorator';
import App from '../App';

export default {
    title: 'App',
    component: App,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator]
}
export const AppExample = () => <App/>