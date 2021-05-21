import React, {useEffect} from 'react';
import style from './Repositories.module.scss'
import Repository from './repository/Repository';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../Redux/store';
import {RepoType} from '../../../API/api';
import Empty from '../../../common/components/empty/Empty';
import notFound from './../../../assets/icons/notFound.svg'
import ReactPaginate from 'react-paginate';
import prev from './../../../assets/icons/prev.svg'
import next from './../../../assets/icons/next.svg'
import {getData} from '../../../Redux/reducer';

const Repositories: React.FC<{ reposCount: number, userName: string }> = ({reposCount,userName}) => {
    const dispatch = useDispatch()
    const repos = useSelector<AppRootStateType, Array<RepoType> | []>(state => state.user.repositories)
    const perPage = useSelector<AppRootStateType, number>(state => state.user.perPage)
    const totalReposCount = useSelector<AppRootStateType, number>(state => state.user.totalReposCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.user.currentPage)
    const pageCount = Math.ceil(totalReposCount/perPage)

    useEffect(()=>{
        dispatch(getData(userName, currentPage, perPage))
    }, [currentPage])

    const onPageHandler = (item: {selected: number}) => {
        debugger
        dispatch(getData(userName, item.selected, perPage))
        console.log(item.selected)
    }

    return (
        <div className={style.repositoryBlock}>
            {repos?.length ?
                <>
                    <h1 className={style.title}>Repositories ({reposCount})</h1>
                    {repos?.map((repo: RepoType) =>
                        <Repository key={repo.id} description={repo.description} url={repo.html_url} name={repo.name}/>
                    )}
                    <ReactPaginate previousLabel={''}
                                   nextLabel={''}
                                   pageCount={pageCount}
                                   marginPagesDisplayed={perPage}
                                   onPageChange={onPageHandler}
                                   pageRangeDisplayed={2}                  />
                </>
                : <Empty text={'Repository list is empty'} icon={notFound}/>}
        </div>
    );
};

export default Repositories;