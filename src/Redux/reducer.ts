import {Dispatch} from 'redux';
import {repoAPI, RepoType, UserType} from '../API/api';

const SET_ERROR = 'SET_ERROR';
const ADD_USER = 'ADD_USER';
const ADD_REPOS = 'ADD_REPOS'
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE'

let initialState = {
    isFetching: false,
    error: false,
    user: null as UserType | null,
    repositories: [] as Array<RepoType> | [],
    perPage: 4,
    totalReposCount: 0,
    currentPage: 1,
}

type initialStateType = typeof initialState
type ActionsTypes =
    ReturnType<typeof setUser>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setRepos>
    | ReturnType<typeof setCurrentPage>


const reducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                user: action.payload,
                totalReposCount: action.payload.public_repos
            }
        }
        case ADD_REPOS: {
            return {
                ...state,
                repositories: action.payload
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.payload
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload
            }
        }
        default:
            return state
    }
}

const setUser = (userData: UserType) => ({type: ADD_USER, payload: userData} as const)
const setRepos = (reposData: Array<RepoType>) => ({type: ADD_REPOS, payload: reposData} as const)
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, payload: page} as const)
const setError = (value: boolean) => ({type: SET_ERROR, payload: value} as const)
const setIsFetching = (value: boolean) => ({type: SET_IS_FETCHING, payload: value} as const)

export const getData = (userName: string, currentPage: number=1, perPage: number=4) => async (dispatch: Dispatch) => {
    try {
        dispatch(setError(false))
        dispatch(setIsFetching(true))
        const user = await repoAPI.getUser(userName)
        const repos = await repoAPI.getRepo(userName, currentPage, perPage)
        dispatch(setUser(user.data))
        dispatch(setRepos(repos.data))
        dispatch(setIsFetching(false))
        dispatch(setCurrentPage(currentPage))
    } catch (e) {
        dispatch(setError(true))
        dispatch(setIsFetching(false))
    }
}

export default reducer