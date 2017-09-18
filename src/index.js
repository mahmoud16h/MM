import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers'
import Styles from './styles.sass';
import { Map } from 'immutable';
import PictureHolder from './components/picture-holder/'

const initialState = {
    pictures: Map({
        1: {id: 1, text: "pic 1", tags: [{name: "happy"}, {name: "phi phi"}]},
        2: {id: 2, text: "pic 2", tags: [{name: "happy"}, {name: "fun"}]},
        3: {id: 3, text: "pic 3", tags: [{name: "bad"}]}
    }),
    tags: ["Thailand", "Lebanon", "Qatar"],
    currentPictureIndex: 0
};

let initState = initialState;


const store = createStore(allReducers, initState);

render(
    <Provider store={store}>
        <PictureHolder/>
    </Provider>
    ,document.getElementById('root')
);
