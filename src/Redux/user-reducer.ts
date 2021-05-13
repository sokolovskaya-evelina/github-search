import {Dispatch} from 'redux';
import {repoAPI, RepoType, UserType} from '../API/api';

let initialState = {
    isSearch: false,
    isFetching: false,
    user: null as UserType | null,
    repositories: null as Array<RepoType> | null,
    notFound: false
}

type initialStateType = typeof initialState
type ActionsTypes = ReturnType<typeof setUser> |ReturnType<typeof notFound>

const userReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        case NOT_FOUND: {
            return {
                ...state,
                notFound: true
            }
        }
        default:
            return state
    }
}

const NOT_FOUND = 'NOT_FOUND';
const ADD_USER = 'ADD_USER';
const setUser = (userData: UserType) => ({type: ADD_USER, payload: userData} as const)
const notFound = () => ({type: NOT_FOUND} as const)

export const searchUserTC = (userName: string) => async (dispatch: Dispatch) => {
    try {
        const data = await repoAPI.getUser(userName)
        if (data.status === 200) {
            console.log(data.data)
        }
    } catch (e) {

    }

}

export default userReducer