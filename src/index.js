import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './reducers'
import Styles from './styles.sass';
import PictureHolder from './components/picture-holder/'

const initialState = {
  pictures: [
    {text : "pic 1", tags : [{name: "happy"}, {name: "phi phi"}]},
    {text : "pic 2", tags : [{name: "happy"}, {name: "fun"}]},
    {text : "pic 3", tags : [{name: "bad"}]},
  ],
  tags: ["Thailand", "Lebanon", "Qatar"]
}

const store = createStore(allReducers, initialState);


render(
  <Provider store={store}>
    <PictureHolder/>
  </Provider>
    ,document.getElementById('root')
);
