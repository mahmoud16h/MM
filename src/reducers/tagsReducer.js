const TagsReducer = (state=null, action) => {
    switch (action.type) {
        case 'TODO-TAGS':
            console.log("executed todo");
            return state;
        default:
            return state
    }
}

export default TagsReducer
