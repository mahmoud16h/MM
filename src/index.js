import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {allReducers} from './reducers'
import Styles from './styles.sass';
import PictureHolder from './components/picture-holder/'

const store = createStore(allReducers);

let pictures = [
  {text : "pic 1", tags : [{name: "happy"}, {name: "phi phi"}]},
  {text : "pic 2", tags : [{name: "happy"}, {name: "fun"}]},
  {text : "pic 3", tags : [{name: "bad"}]},
];

let tags = ["Thailand", "Lebanon", "Qatar"]


render(
  <Provider store = {store}>
    <PictureHolder pictures={pictures} tags={tags}/>
  </Provider>
    ,document.getElementById('root')
);
