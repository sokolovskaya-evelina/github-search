import {Dispatch} from 'redux';
import {repoAPI, RepoType, UserType} from '../API/api';

let initialState = {
    isFetching: false,
    error: false,
    user: null as UserType | null,
    repositories: [] as Array<RepoType> | null,
}

type initialStateType = typeof initialState
type ActionsTypes =
    ReturnType<typeof setUser>
    | ReturnType<typeof setError>
    | ReturnType<typeof setIsFetching>


const reducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                user: action.payload
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
        default:
            return state
    }
}

const SET_ERROR = 'SET_ERROR';
const ADD_USER = 'ADD_USER';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const setUser = (userData: UserType) => ({type: ADD_USER, payload: userData} as const)
const setError = (value: boolean) => ({type: SET_ERROR, payload: value} as const)
const setIsFetching = (value: boolean) => ({type: SET_IS_FETCHING, payload: value} as const)

export const searchUserTC = (userName: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setError(false))
        dispatch(setIsFetching(true))
        const data = await repoAPI.getUser(userName)
        dispatch(setUser(data.data))
        dispatch(setIsFetching(false))
    } catch (e) {
        dispatch(setError(true))
        dispatch(setIsFetching(false))
    }
}

export default reducer