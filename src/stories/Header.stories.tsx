import React from 'react'
import Header from '../components/header/Header';
import {BrowserRouterDecorator, ReduxStoreProviderDecorator} from './decorators/ReduxStoreProviderDecorator';

export default {
    title: 'Header',
    component: Header,
    decorators: [ReduxStoreProviderDecorator, BrowserRouterDecorator]
}
export const HeaderExamples = () => <Header/>