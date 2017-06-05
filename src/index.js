import React from 'react';
import {render} from 'react-dom';
import Styles from './styles.sass';
import PictureHolder from './components/picture-holder/'

let pictures = [
  {text : "pic 1", tags : [{name: "happy"}, {name: "phi phi"}]},
  {text : "pic 2", tags : [{name: "happy"}, {name: "fun"}]},
  {text : "pic 3", tags : [{name: "bad"}]},
];

let tags = ["Thailand", "Lebanon", "Qatar"]


render(
  <PictureHolder pictures={pictures} tags={tags}/>,
  document.getElementById('root')
);
