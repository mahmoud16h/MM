export const addTagToPicture = (tag, pictureId) => {
    return {
        type: 'ADD-TAG-TO-PICTURE',
        tag,
        pictureId
    }
}

export const removeTagFromPicture = (tag, pictureId) => {
    return {
        type: 'REMOVE-TAG-FROM-PICTURE',
        tag,
        pictureId
    }
}

export const toggleXMode = () => {
    return {
        type: 'TOGGLE-X-MODE',
    }
}