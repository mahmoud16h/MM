const PictureReducer = (pictures={}, action) => {
    switch (action.type) {
        case 'ADD-TAG-TO-PICTURE':
            console.log('adding tag');

// /            let tags = pictures.get(`'${action.pictureId}', 'tags'`);
// /            let tags = pictures.get(`'${action.pictureId}', 'tags'`);
            console.log(pictures);
            // let pic = pictures.setIn(`"${action.pictureId}", "tags"`, );
            // console.log(pic);
            //
            return pictures;
        default:
            return pictures
    }
}

let addTagToPicture = (tag, picture) => {
    return {
    }
}

export default PictureReducer