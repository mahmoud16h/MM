const TagsReducer = (tags, action) => {
    switch (action.type) {
        case 'TODO-TAGS':
            return tags;
        default:
            return tags
    }
}

export default TagsReducer
