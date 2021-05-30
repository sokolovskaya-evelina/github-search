import React from 'react';
import Empty from '../common/components/empty/Empty';
import search from '../assets/icons/bigSearch.svg';
import userNotFound from '../assets/icons/userOutline.svg';
import notFound from '../assets/icons/notFound.svg'
import Pagination from '../common/components/Pagination/Pagination';
import Loader from '../common/components/Loader/Loader';

export default {
    title: 'Common',
    components: Empty, Pagination, Loader
}

export const EmptyUserState = () => <Empty text={`Start with searching a GitHub user`} icon={search}/>
export const EmptyRepositoryState = () => <Empty text={'Repository list is empty'} icon={notFound}/>
export const UserNotFound = () => <Empty text={'User not found'} icon={userNotFound}/>
export const PaginationExample = () => <Pagination pageCount={10} perPage={4} currentPage={1} onPageHandler={()=>{}}/>
export const LoaderExample = () => <Loader/>

