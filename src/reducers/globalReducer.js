const globalReducer = (state={xMode: false}, action) => {
    switch (action.type) {
        case 'TOGGLE-X-MODE':
            return {xMode : !state.xMode}
        default:
            return state
    }
}
    export default globalReducer;