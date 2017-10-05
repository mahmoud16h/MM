import { Map } from 'immutable';

const PictureReducer = (pictures=Map(), action) => {
    switch (action.type) {
        case 'ADD-TAG-TO-PICTURE':
            let pictureId = action.pictureId.toString();
            let newTags = addTag(pictures.getIn([pictureId]).tags, action.tag)
            let currentPic = pictures.getIn([pictureId])
            let newPicture = {
                id : currentPic.id,
                text: currentPic.text,
                tags: newTags
            }
            return pictures.setIn([pictureId], newPicture);
        case 'REMOVE-TAG-FROM-PICTURE':
            let picturesId = action.pictureId.toString();
            let updatedTags = removeTag(pictures.getIn([picturesId]).tags, action.tag)
            let currentPics = pictures.getIn([picturesId])
            let newPictures = {
                id : currentPics.id,
                text: currentPics.text,
                tags: updatedTags
            }
            return pictures.setIn([picturesId], newPictures);
        default:
            return pictures
    }
}

let removeTag = (tags, removingTag ) => {
   let newTagsArray = tags.filter((val) => {return val.name !== removingTag})
    return newTagsArray
}


let addTag = (tags, newTag) => {
    let found = false;
    tags.forEach((val) => {
        if (val.name === newTag){
            found = true
        }
    });

    if (found)
        return tags

    return [...tags, {name: newTag}]
}



export default PictureReducer