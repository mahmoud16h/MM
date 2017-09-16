const PictureReducer = (pictures=[], action) => {
    switch (action.type) {
        case 'ADD-TAG-TO-PICTURE':
            console.log('adding tag');
            console.log(action.tag);
            console.log(action.pictureId);
            return pictures;
        default:
            return pictures
    }
}



export default PictureReducer
