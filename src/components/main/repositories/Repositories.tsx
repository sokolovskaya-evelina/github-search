import React from 'react';
import style from './Repositories.module.scss'
import Repository from './repository/Repository';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../Redux/store';
import {RepoType} from '../../../API/api';
import Empty from '../../../common/components/empty/Empty';
import notFound from './../../../assets/icons/notFound.svg'
import {getData} from '../../../Redux/reducer';
import Pagination from '../../../common/components/Pagination/Pagination';
import Loader from '../../../common/components/Loader/Loader';

type PropsType = {
    reposCount: number
    userName: string
}

const Repositories: React.FC<PropsType> = React.memo(({reposCount, userName}) => {
    const dispatch = useDispatch()
    const repos = useSelector<AppRootStateType, Array<RepoType> | []>(state => state.user.repositories)
    const perPage = useSelector<AppRootStateType, number>(state => state.user.perPage)
    const totalReposCount = useSelector<AppRootStateType, number>(state => state.user.totalReposCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.user.currentPage)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.user.isFetching)

    const pageCount = Math.ceil(totalReposCount / perPage)
    const firstItemOfRange = 4 * currentPage - 3
    const lastItemOfRange = firstItemOfRange + repos.length - 1

    const onPageHandler = (item: { selected: number }) => {
        dispatch(getData(userName, item.selected + 1, perPage))
    }

    return (
        <div className={style.repositoryBlock}>
            {repos?.length ?
                <>
                    <h1 className={style.title}>Repositories ({reposCount})</h1>
                    {isFetching ? <Loader/> : repos?.map((repo: RepoType) =>
                        <Repository key={repo.id} description={repo.description} url={repo.html_url} name={repo.name}/>
                    )}
                    <div className={style.paginationBlock}>
                        <span>{firstItemOfRange}-{lastItemOfRange} of {reposCount} items</span>
                        <Pagination pageCount={pageCount} perPage={perPage} onPageHandler={onPageHandler}/>
                    </div>
                </>
                : <Empty text={'Repository list is empty'} icon={notFound}/>}
        </div>
    );
})

export default Repositories;