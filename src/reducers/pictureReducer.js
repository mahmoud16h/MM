const PictureReducer = (state=null, action) => {
    switch (action.type) {
        case 'TODO':
            console.log(state);
            return state;
        default:
            return state
    }
}

export default PictureReducer
