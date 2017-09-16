export const addTagToPicture = (tag, pictureId) => {
    return {
        type: 'ADD-TAG-TO-PICTURE',
        tag,
        pictureId
    }
}