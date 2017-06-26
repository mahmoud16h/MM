const TagsReducer = (state=null, action) => {
    switch (action.type) {
        case 'TODO-TAGS':
            return state;
        default:
            return state
    }
}

export default TagsReducer
