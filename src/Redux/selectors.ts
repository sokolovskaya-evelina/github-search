import {AppRootStateType} from './store';

export const selectRepos = (state: AppRootStateType) => state.user.repositories
export const selectPerPage = (state: AppRootStateType) => state.user.perPage
export const selectTotalReposCount = (state: AppRootStateType) => state.user.totalReposCount
export const selectCurrentPage = (state: AppRootStateType) => state.user.currentPage
export const selectIsFetching = (state: AppRootStateType) => state.user.isFetching
export const selectUser = (state: AppRootStateType) => state.user.user
export const selectError = (state: AppRootStateType) => state.user.error
