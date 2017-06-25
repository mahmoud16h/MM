const PictureReducer = (state, action) => {
    switch (action.type) {
        case 'TODO':
            console.log("executed todo");
            return {};
        default:
            return state
    }
}

export default PictureReducer