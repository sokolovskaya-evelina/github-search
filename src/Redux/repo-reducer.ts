let initialState = {
    initialized: false,
}

type initialStateType = typeof initialState

const repoReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export default repoReducer