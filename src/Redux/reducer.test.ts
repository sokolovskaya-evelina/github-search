import reducer, {initialStateType, setCurrentPage, setError, setIsFetching, setRepos, setUser} from './reducer';

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

test('user should be set', () => {
    const endState = reducer(startState, setUser({
        login: 'hello',
        public_repos: 5,
        html_url: 'https://',
        avatar_url: 'https://',
        following: 5,
        followers: 7,
        name: 'hello world'
    }))

    expect(endState.user?.login).toBe('hello');
    expect(endState.user?.name).toBe('hello world');
    expect(endState.user?.following).toBe(5);
});

test('repos should be set', () => {
    const endState = reducer(startState, setRepos([
            {id: '1', name: 'hello', html_url: 'https://', description: 'blabla'},
            {id: '2', name: 'hello', html_url: 'https://', description: 'blabla'}
        ]
    ))

    expect(endState.repositories.length).toBe(2);
    expect(endState.repositories[0].id).toBe('1');
});

test('current page should be update', () => {
    const endState = reducer(startState, setCurrentPage(5))

    expect(endState.currentPage).toBe(5);
});

test('error should be set', () => {
    const endState = reducer(startState, setError(true))

    expect(endState.error).toBe(true);
});

test('fetching should be update', () => {
    const endState = reducer(startState, setIsFetching(true))

    expect(endState.isFetching).toBe(true);
});
