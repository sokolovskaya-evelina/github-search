import {getData, initialStateType, setCurrentPage, setError, setIsFetching} from './reducer';
import {repoAPI, RepoType, UserType} from '../API/api'

jest.mock('../API/api')
const repoAPIMock = repoAPI as jest.Mocked<typeof repoAPI>;

const dispatchMock = jest.fn();

beforeEach(() => {
    dispatchMock.mockClear();
    repoAPIMock.getUser.mockClear();
    repoAPIMock.getRepo.mockClear();
})

const resultUser: UserType = {
    login: 'hello',
    public_repos: 5,
    html_url: 'https://',
    avatar_url: 'https://',
    following: 5,
    followers: 7,
    name: 'hello world'
}
const resultRepo: Array<RepoType> = [
    {id: '1', name: 'hello', html_url: 'https://', description: 'blabla'},
    {id: '2', name: 'hello', html_url: 'https://', description: 'blabla'}
]

repoAPIMock.getUser.mockReturnValue(Promise.resolve(resultUser))
repoAPIMock.getRepo.mockReturnValue(Promise.resolve(resultRepo))

export let startState: initialStateType

beforeEach(() => {
    startState = {
        isFetching: false,
        error: false,
        user: null,
        repositories: [],
        perPage: 4,
        totalReposCount: 0,
        currentPage: 1,
    }
})
test('success thunk', async () => {
    const thunk = getData('hello')
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)

    expect(dispatchMock).toBeCalledTimes(6)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setError(false))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, setIsFetching(true))
    expect(dispatchMock).toHaveBeenNthCalledWith(5, setCurrentPage(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(6, setIsFetching(false))
});