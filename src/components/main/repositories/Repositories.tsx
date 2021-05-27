import React, {useCallback} from 'react';
import style from './Repositories.module.scss'
import Repository from './repository/Repository';
import {useDispatch, useSelector} from 'react-redux';
import {RepoType} from '../../../API/api';
import Empty from '../../../common/components/empty/Empty';
import notFound from './../../../assets/icons/notFound.svg'
import {getData} from '../../../Redux/reducer';
import Pagination from '../../../common/components/Pagination/Pagination';
import Loader from '../../../common/components/Loader/Loader';
import {selectCurrentPage, selectIsFetching, selectPerPage, selectRepos, selectTotalReposCount} from './selectors';

type PropsType = {
    reposCount: number
    userName: string
}

const Repositories: React.FC<PropsType> = React.memo(({reposCount, userName}) => {
    const dispatch = useDispatch()
    const repos = useSelector(selectRepos)
    const perPage = useSelector(selectPerPage)
    const totalReposCount = useSelector(selectTotalReposCount)
    const currentPage = useSelector(selectCurrentPage)
    const isFetching = useSelector(selectIsFetching)

    const pageCount = Math.ceil(totalReposCount / perPage)
    const firstItemOfRange = 4 * currentPage - 3
    const lastItemOfRange = firstItemOfRange + repos.length - 1

    const onPageHandler = useCallback((item: { selected: number }) => {
        if (currentPage !== item.selected+1){
            dispatch(getData(userName, item.selected + 1, perPage))
        }
    }, [userName, currentPage, perPage, dispatch])

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